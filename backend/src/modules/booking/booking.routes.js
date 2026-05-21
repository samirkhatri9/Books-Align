const router = require('express').Router()
const { bookingLimiter } = require('../../middleware/ratelimit.middleware')
const validate = require('../../middleware/validate.middleware')
const bookingSchema = require('./booking.schema')
const { createBooking, cancelBooking } = require('./booking.controller')

router.post('/', bookingLimiter, validate(bookingSchema), createBooking)
router.patch('/:id/cancel', cancelBooking)

module.exports = router
