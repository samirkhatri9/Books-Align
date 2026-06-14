require('dotenv').config()
const env = require('./src/config/env')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const connectDB = require('./src/config/db')
const logger = require('./src/services/logger.service')
const { globalLimiter } = require('./src/middleware/ratelimit.middleware')
const errorMiddleware = require('./src/middleware/error.middleware')

const app = express()

app.use(helmet())

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())

if (env.NODE_ENV !== 'test') {
  app.use(morgan('combined', { stream: logger.stream }))
}

app.use('/api', globalLimiter)

app.use('/api/contact', require('./src/modules/contact/contact.routes'))
app.use('/api/booking', require('./src/modules/booking/booking.routes'))

app.get('/api/health', (req, res) => {
  const mongoose = require('mongoose')
  res.json({
    success: true,
    message: 'Books Align API is running',
    env: env.NODE_ENV,
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  })
})

app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` })
})

app.use(errorMiddleware)

const PORT = env.PORT

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT} [${env.NODE_ENV}]`)
  connectDB()
})
