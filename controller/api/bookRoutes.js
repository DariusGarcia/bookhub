const bookRouter = require('express').Router()
const { Book } = require('../../models')

// find ALL books
bookRouter.get('/', async (req, res) => {
  try {
    const allBooks = await Book.findAll({})
    res.json(allBooks)
  } catch (err) {
    res.status(400).json(err)
  }
})

// POST a new book
bookRouter.post('/', async (req, res) => {
  const bookInformation = { ...req.body }
  try {
    const newBook = await Book.create({
      bookInformation,
      // userId: req.session.userId,
    })
    res.json(newBook)
  } catch (err) {
    res.status(400).json(err)
  }
})

// GET a single book
bookRouter.get('/:id', async (req, res) => {
  const bookId = req.params.id
  try {
    const singleBook = await Book.findByPk(bookId)
    res.json(singleBook)
  } catch (err) {
    res.status(400).json(err)
  }
})

// UPDATE an existing book
bookRouter.put('/:id', async (req, res) => {
  const bookId = req.params.id
  try {
    const [singleBook] = await Book.update(req.body, {
      where: { id: bookId },
    })
    // check if there were any updates to the book
    if (singleBook > 0) {
      res
        .status(200)
        .json({ message: `Successfully updated book ID: ${bookId}` })
    } else {
      res
        .status(404)
        .json({ message: 'Error trying to update book. Please try again.' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE a single book
bookRouter.delete('/:id', async (req, res) => {
  const bookId = req.params.id
  try {
    const singleBook = Book.destroy({
      where: {
        id: bookId,
      },
    })
    if (!singleBook) {
      res.status(404).json({ message: 'No book found with this id!' })
      return
    }
    res.status(200).json({ message: `Book: ${bookId} successfully deleted!` })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = bookRouter
