const homeRouter = require('express').Router()
const { Book } = require('../models/')

// display home page that displays all books
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

// display sign-up page
homeRouter.get('/signup', async (req, res) => {
  try {
    res.render('signup')
  } catch (err) {
    res.status(500).json(err)
  }
})

// display single book page
homeRouter.get('/:id', async (req, res) => {
  const bookId = req.params.id
  try {
    const singleBook = await Book.findByPk(bookId)
    if (singleBook) {
      const book = singleBook.get({ plain: true })
      res.render('displaySingleBook', { layout: 'main', book })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// display update book page
homeRouter.get('/edit/:id', async (req, res) => {
  const bookId = req.params.id
  try {
    const singleBook = await Book.findByPk(bookId)
    if (singleBook) {
      const book = singleBook.get({ plain: true })
      res.render('updateBook', { layout: 'main', book })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = homeRouter
