const rateLimit = require('express-rate-limit')

const msg = (text) => ({ success: false, message: text })

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: msg('Too many requests, please try again later.'),
})

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: msg('Too many submissions from this IP, please try again in an hour.'),
})

const bookingLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: msg('Too many booking attempts from this IP, please try again in an hour.'),
})

module.exports = { globalLimiter, contactLimiter, bookingLimiter }
