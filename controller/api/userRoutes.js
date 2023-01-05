const userRouter = require('express').Router()
const { User } = require('../../models')

// CREATE new user
userRouter.post('/register', async (req, res) => {
  const password = req.body.password
  const username = req.body.username
  try {
    const newUser = await User.create({
      username: username,
      password: password,
    })
    // save user info to server-side session storage
    req.session.save(() => {
      req.session.userId = newUser.id
      req.session.username = newUser.username
      req.session.loggedIn = true
    })
    res.json(newUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

// LOGIN user
userRouter.post('/login', async (req, res) => {
  const password = req.body.password
  const username = req.body.username
  try {
    const existingUser = await User.findOne({
      where: {
        username: username,
      },
    })
    if (!existingUser) {
      res
        .status(400)
        .json({ message: 'No existing user account found. Please try again.' })
    }
    // check if passwords match
    const isValidPassword = existingUser.comparePassword(password)
    if (!isValidPassword) {
      res.status(400).json({ message: 'Wrong password.' })
    }
    // save user info to server-side session storage
    req.session.save(() => {
      req.session.userID = existingUser.id
      req.session.username = existingUser.username
      req.session.loggedIn = true
    })
    res.json({ existingUser, message: 'You are now logged in!' })
  } catch (err) {
    res
      .status(400)
      .json({ message: 'No user account found. Please try again.' })
  }
})

// LOGOUT user
userRouter.post('/logout', (req, res) => {
  const loggedIn = req.session.loggedIn
  if (loggedIn) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

module.exports = userRouter
