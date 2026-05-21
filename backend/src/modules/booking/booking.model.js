const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    startTime: { type: Date, required: true },
    status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' },
    ip: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Booking', bookingSchema)
