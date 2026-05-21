const asyncHandler = require('../../utils/asyncHandler')
const ApiError = require('../../utils/ApiError')
const verifyRecaptcha = require('../../utils/verifyRecaptcha')
const Contact = require('./contact.model')
const { sendContactConfirmation, sendContactNotification } = require('../../services/email.service')

const submitContact = asyncHandler(async (req, res, next) => {
  const { name, business, email, phone, service, message, recaptchaToken } = req.body

  const valid = await verifyRecaptcha(recaptchaToken)
  if (!valid) {
    return next(ApiError.badRequest('reCAPTCHA verification failed. Please try again.'))
  }

  await Contact.create({ name, business, email, phone, service, message, ip: req.ip })

  sendContactConfirmation({ name, email }).catch(() => {})
  sendContactNotification({ name, email, businessName: business, service, message }).catch(() => {})

  res.status(201).json({ success: true, message: 'Your message has been received. We will be in touch within one business day.' })
})

module.exports = { submitContact }
