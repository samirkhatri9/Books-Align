const jwt = require('jsonwebtoken')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/asyncHandler')
const User = require('../modules/auth/auth.model')
const env = require('../config/env')

const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.token

  if (!token) {
    return next(ApiError.unauthorized('No token provided'))
  }

  const decoded = jwt.verify(token, env.JWT_SECRET)
  const user = await User.findById(decoded.id).select('-__v')

  if (!user) {
    return next(ApiError.unauthorized('User no longer exists'))
  }

  req.user = user
  next()
})

const verifyAdmin = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.adminToken

  if (!token) {
    return next(ApiError.unauthorized('Admin access required'))
  }

  const decoded = jwt.verify(token, env.JWT_SECRET)

  if (decoded.role !== 'admin') {
    return next(ApiError.forbidden('Admin access required'))
  }

  req.admin = decoded
  next()
})

module.exports = { verifyToken, verifyAdmin }
