const router = require('express').Router()

const userRoutes = require('./userRoutes')
const bookRoutes = require('./bookRoutes')
const tagRoutes = require('./tagRoutes')

router.use('/user', userRoutes)
router.use('/books', bookRoutes)
router.use('/tags', tagRoutes)

module.exports = router
