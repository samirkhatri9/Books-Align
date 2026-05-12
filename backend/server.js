require('dotenv').config()
const env = require('./src/config/env')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')

const connectDB = require('./src/config/db')
const passport = require('./src/config/passport')
const logger = require('./src/services/logger.service')
const { globalLimiter } = require('./src/middleware/ratelimit.middleware')
const errorMiddleware = require('./src/middleware/error.middleware')
const swaggerSpec = require('./src/docs/swagger')

const app = express()

// ── Security headers ──────────────────────────────────────────────
app.use(helmet())

// ── CORS ──────────────────────────────────────────────────────────
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

// ── Body parsers ──────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())

// ── Session (required for Passport OAuth flow) ────────────────────
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 10 * 60 * 1000, // 10 min — only used during OAuth handshake
    },
  })
)

// ── Passport ──────────────────────────────────────────────────────
app.use(passport.initialize())
app.use(passport.session())

// ── Sanitization ──────────────────────────────────────────────────
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// ── HTTP logging ──────────────────────────────────────────────────
if (env.NODE_ENV !== 'test') {
  app.use(morgan('combined', { stream: logger.stream }))
}

// ── Global rate limit ─────────────────────────────────────────────
app.use('/api', globalLimiter)

// ── Routes ────────────────────────────────────────────────────────
app.use('/api/auth', require('./src/modules/auth/auth.routes'))
app.use('/api/contact', require('./src/modules/contact/contact.routes'))
app.use('/api/booking', require('./src/modules/booking/booking.routes'))
app.use('/api/admin', require('./src/modules/admin/admin.routes'))

// ── Swagger docs ──────────────────────────────────────────────────
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// ── Health check ──────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const mongoose = require('mongoose')
  res.json({
    success: true,
    message: 'Books Align API is running',
    env: env.NODE_ENV,
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  })
})

// ── 404 handler ───────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` })
})

// ── Global error handler ──────────────────────────────────────────
app.use(errorMiddleware)

// ── Start ─────────────────────────────────────────────────────────
const PORT = env.PORT

app.listen(PORT, () => {
  logger.info(`🚀  Server running on port ${PORT} [${env.NODE_ENV}]`)
  logger.info(`📚  API docs: http://localhost:${PORT}/api/docs`)
  connectDB() // connect after server is already listening
})
