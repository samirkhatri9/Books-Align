const { z } = require('zod')

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().max(30).optional(),
  businessName: z.string().max(100).optional(),
  service: z.string().max(100).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  time: z.string().regex(/^\d{1,2}:\d{2}\s+(AM|PM)$/, 'Time must be like "9:00 AM" or "4:30 PM"'),
  timezone: z.string().default('Australia/Sydney'),
  recaptchaToken: z.string().optional().default(''),
})

module.exports = bookingSchema
