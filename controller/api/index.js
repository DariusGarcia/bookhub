const router = require('express').Router()

const userRoutes = require('./userRoutes.js')

router.use('/user', userRoutes)

module.exports = router
