const homeRouter = require('express').Router()
const { Book, User } = require('../models/')

// get all users for homepage
homeRouter.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({})

    const books = bookData.map((book) => book.get({ plain: true }))

    res.render('displayBooks', { layout: 'main', books })
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
// display single book
homeRouter.get('/:id', async (req, res) => {
  try {
    const singleBook = await Book.findByPk(req.params.id)

    if (singleBook) {
      const book = singleBook.get({ plain: true })
      res.render('displaySingleBook', { layout: 'main', book })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = homeRouter
