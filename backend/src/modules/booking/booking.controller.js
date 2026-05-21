const asyncHandler = require('../../utils/asyncHandler')
const ApiError = require('../../utils/ApiError')
const verifyRecaptcha = require('../../utils/verifyRecaptcha')
const Booking = require('./booking.model')
const {
  sendBookingConfirmation,
  sendBookingNotification,
  sendCancellationConfirmation,
} = require('../../services/email.service')

const createBooking = asyncHandler(async (req, res, next) => {
  const { name, email, startTime, recaptchaToken } = req.body

  const valid = await verifyRecaptcha(recaptchaToken)
  if (!valid) {
    return next(ApiError.badRequest('reCAPTCHA verification failed. Please try again.'))
  }

  const booking = await Booking.create({ name, email, startTime, ip: req.ip })

  sendBookingConfirmation({ name, email, startTime })
  .catch(err => console.error('Confirmation failed:', err))

  sendBookingNotification({ name, email, startTime })
  .catch(err => console.error('Notification failed:', err))

  res.status(201).json({ success: true, message: 'Booking confirmed.', data: { id: booking._id } })
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
