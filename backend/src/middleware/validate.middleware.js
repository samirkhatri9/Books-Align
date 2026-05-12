const ApiError = require('../utils/ApiError')

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body)
  if (!result.success) {
    const errors = result.error.issues.map((i) => ({
      field: i.path.join('.'),
      message: i.message,
    }))
    return next(ApiError.badRequest('Validation failed', errors))
  }
  req.body = result.data
  next()
}

module.exports = validate
