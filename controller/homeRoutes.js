const homeRouter = require('express').Router()
const { User } = require('../models/')

// get all users for homepage
homeRouter.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({})

    const users = userData.map((user) => user.get({ plain: true }))

    res.render('displaybooks', { layout:'main' })
  } catch (err) {
    res.status(500).json(err)
  }
})
// display login page
homeRouter.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err)
  }
})
// display sign up page
homeRouter.get('/signup', async (req, res) => {
  try {
    res.render('signup')
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = homeRouter
