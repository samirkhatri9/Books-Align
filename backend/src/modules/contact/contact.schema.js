const { z } = require('zod')

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  business: z.string().max(100).optional().default(''),
  email: z.string().email('Invalid email address'),
  phone: z.string().max(30).optional().default(''),
  service: z.enum([
    'NDIS Plan Management',
    'Bookkeeping',
    'BAS & Tax',
    'Payroll',
    'Financial Reporting',
    'Other',
  ]),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  recaptchaToken: z.string().min(1, 'reCAPTCHA token is required'),
})

module.exports = contactSchema
