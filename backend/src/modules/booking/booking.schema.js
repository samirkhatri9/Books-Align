const { z } = require('zod')

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  startTime: z.string().datetime({ message: 'Invalid date/time format' }),
  recaptchaToken: z.string().min(1, 'reCAPTCHA token is required'),
})

module.exports = bookingSchema
