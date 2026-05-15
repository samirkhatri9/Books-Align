const mongoose = require('mongoose')
const logger = require('../services/logger.service')

const connectDB = async () => {
  const { MONGODB_URI } = require('./env')

  try {
    
    const conn = await mongoose.connect(MONGODB_URI)
    logger.info(`MongoDB connected: ${conn.connection.host}`)
    console.log("Mongo db connected successfully.")
  } catch (err) {
    logger.error(`MongoDB connection error: ${err.message}`)
    if (process.env.NODE_ENV === 'production') process.exit(1)
  }
}

mongoose.connection.on('disconnected', () => {
  logger.warn('MongoDB disconnected')
})

mongoose.connection.on('reconnected', () => {
  logger.info('MongoDB reconnected')
})

module.exports = connectDB
