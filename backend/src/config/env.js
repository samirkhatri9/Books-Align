const { z } = require('zod')

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('5001'),
  MONGODB_URI: z.string().min(1, 'MONGODB_URI is required'),
  EMAIL_USER: z.string().email('EMAIL_USER must be a valid email'),
  EMAIL_PASS: z.string().min(1, 'EMAIL_PASS is required'),
  RECAPTCHA_SECRET_KEY: z.string().min(1, 'RECAPTCHA_SECRET_KEY is required'),
  CLIENT_URL: z.string().url('CLIENT_URL must be a valid URL'),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('Invalid environment variables:')
  parsed.error.issues.forEach((issue) => {
    console.error(`  ${issue.path.join('.')}: ${issue.message}`)
  })
  process.exit(1)
}

module.exports = parsed.data
