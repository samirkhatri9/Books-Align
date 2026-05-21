const rateLimit = require('express-rate-limit')

const message = (action) => (req, res) => {
  return res.status(429).json({
    success: false,
    message: `Too many ${action} attempts. Please try again later.`,
  })
}
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: message('requests'),
})

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: message('contact form'),
})

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: message('authentication'),
})

const bookingLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: message('booking'),
})

module.exports = { globalLimiter, contactLimiter, authLimiter, bookingLimiter }
