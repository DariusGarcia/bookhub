const homeRouter = require('express').Router()
const isAuthenticated = require('../utils/auth')
const { Book } = require('../models/')

// display home page that displays all books
homeRouter.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({})
    const books = bookData.map((book) => book.get({ plain: true }))
    res.render('landing', { layout: 'main', books })
  } catch (err) {
    res.status(500).json(err)
  }
})
// display home page that displays all books
homeRouter.get('/dashboard', isAuthenticated, async (req, res) => {
  try {
    const bookData = await Book.findAll({})
    const books = bookData.map((book) => book.get({ plain: true }))
    res.render('dashboard', { layout: 'main', books })
  } catch (err) {
    res.status(500).json(err)
  }
})
// display all books
homeRouter.get('/books', async (req, res) => {
  try {
    const bookData = await Book.findAll({
      order: [[['title', 'DESC']]],
    })
    const books = bookData.map((book) => book.get({ plain: true }))
    res.render('displayAllBooks', { layout: 'main', books })
  } catch (err) {
    res.status(500).json(err)
  }
})
// display add a book page
homeRouter.get('/books/add', isAuthenticated, async (req, res) => {
  try {
    const bookData = await Book.findAll({})
    const books = bookData.map((book) => book.get({ plain: true }))
    res.render('addNewBook', { layout: 'main', books })
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
homeRouter.get('/:id', isAuthenticated, async (req, res) => {
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
homeRouter.get('/edit/:id', isAuthenticated, async (req, res) => {
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
