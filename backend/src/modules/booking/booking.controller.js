const asyncHandler = require('../../utils/asyncHandler')
const ApiError = require('../../utils/ApiError')
const verifyRecaptcha = require('../../utils/verifyRecaptcha')
const Booking = require('./booking.model')
const {
  sendBookingConfirmation,
  sendBookingNotification,
  sendCancellationConfirmation,
} = require('../../services/email.service')

// Converts a time slot string like "9:00 AM" or "4:30 PM" into { hour, minute }
function parseTimeSlot(timeStr) {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s+(AM|PM)$/)
  if (!match) throw new Error('Invalid time format')
  let hour = parseInt(match[1], 10)
  const minute = parseInt(match[2], 10)
  if (match[3] === 'PM' && hour !== 12) hour += 12
  if (match[3] === 'AM' && hour === 12) hour = 0
  return { hour, minute }
}

const createBooking = asyncHandler(async (req, res, next) => {
  const { name, email, phone, businessName, service, date, time, recaptchaToken } = req.body
  console.log(`-----------------------${phone}----------------------`)

  const valid = await verifyRecaptcha(recaptchaToken)
  if (!valid) {
    return next(ApiError.badRequest('reCAPTCHA verification failed. Please try again.'))
  }

  // Build startTime as an AEST (UTC+10) Date
  const { hour, minute } = parseTimeSlot(time)
  const hh = String(hour).padStart(2, '0')
  const mm = String(minute).padStart(2, '0')
  const startTime = new Date(`${date}T${hh}:${mm}:00+10:00`)

  if (isNaN(startTime.getTime())) {
    return next(ApiError.badRequest('Invalid date or time value.'))
  }

  const booking = await Booking.create({
    name,
    email,
    phone,
    businessName,
    service,
    startTime,
    ip: req.ip,
  })

  const details = { name, email, phone, businessName, service, startTime }

  sendBookingConfirmation(details)
    .catch(err => console.error('Confirmation email failed:', err))

  sendBookingNotification(details)
    .catch(err => console.error('Notification email failed:', err))

  res.status(201).json({ success: true, message: 'Booking confirmed.', data: { bookingId: booking._id } })
})

const cancelBooking = asyncHandler(async (req, res, next) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: 'cancelled' },
    { new: true }
  )

  if (!booking) return next(ApiError.notFound('Booking not found'))

  sendCancellationConfirmation({
    name: booking.name,
    email: booking.email,
    startTime: booking.startTime,
  }).catch(() => {})

  res.json({ success: true, message: 'Booking cancelled.' })
})

module.exports = { createBooking, cancelBooking }
