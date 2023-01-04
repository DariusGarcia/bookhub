const userRouter = require('express').Router()
const { User } = require('../../models')

// CREATE new user
userRouter.post('/register', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    })

    req.session.save(() => {
      req.session.userId = newUser.id
      req.session.username = newUser.username
      req.session.loggedIn = true

      res.json(newUser)
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// login user
userRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    })
    if (!user) {
      res.status(400).json({ message: 'No user account found.' })
    }

    const isValidPassword = user.comparePassword(req.body.password)
    if (!isValidPassword) {
      res.status(400).json({ message: 'No user account found.' })
    }

    req.session.save(() => {
      req.session.userID = user.id
      req.session.username = user.username
      req.session.loggedIn = false

      res.json({ user, message: 'You are now logged in!' })
    })
  } catch (err) {
    res.status(400).json({ message: 'No user account found.' })
  }
})

userRouter.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})
module.exports = userRouter
