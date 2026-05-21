const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    business: { type: String, default: '' },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, default: '' },
    service: { type: String, required: true },
    message: { type: String, required: true },
    ip: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Contact', contactSchema)
