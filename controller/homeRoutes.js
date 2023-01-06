const homeRouter = require('express').Router()
const isAuthenticated = require('../utils/auth')
const { Book, Tag, BookTag } = require('../models/')

// display home page that displays all books
homeRouter.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({})
    const books = bookData.map((book) => book.get({ plain: true }))
    const authStatus = req.session.loggedIn
    res.render('landing', { layout: 'main', books, authStatus })
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
// display search books page
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
  if (req.session.loggedIn) {
    res.redirect('/books')
  }
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err)
  }
})
// display sign-up page
homeRouter.get('/signup', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/books')
  }
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
// display books based on tag
homeRouter.get('/books/:tag', async (req, res) => {
  const tagSlug = req.params.tag
  let tagName = ''
  let templateView = ''
  switch (tagSlug) {
    case 'trending':
      tagName = 1
      templateView = 'trendingTag'
      break
    case 'recent':
      tagName = 2
      templateView = 'recentlyAddedTag'
      break
    case 'popular':
      tagName = 3
      break
    case 'best-seller':
      tagName = 4
      break
    case 'top-50':
      tagName = 5
      break
    default:
      res.redirect('/books')
      break
  }
  try {
    const trendingBooksArray = await Tag.findOne({
      where: {
        id: tagName,
      },
      include: [
        {
          model: Book,
          through: BookTag,
        },
      ],
    })
    if (trendingBooksArray) {
      const books = trendingBooksArray.get({ plain: true })
      res.render(templateView, { layout: 'bookDisplay', books })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = homeRouter
