const env = require('../config/env')

const verifyRecaptcha = async (token, minScore = 0.5) => {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  })
  const data = await res.json()
  return data.success && data.score >= minScore
}

module.exports = verifyRecaptcha
