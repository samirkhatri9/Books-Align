const router = require('express').Router()
const { contactLimiter } = require('../../middleware/ratelimit.middleware')
const validate = require('../../middleware/validate.middleware')
const contactSchema = require('./contact.schema')
const { submitContact } = require('./contact.controller')

router.post('/', contactLimiter, validate(contactSchema), submitContact)

module.exports = router
