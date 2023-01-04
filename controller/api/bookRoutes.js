const bookRouter = require('express').Router()
const { Book } = require('../../models')

bookRouter.get('/', async (req, res) => {
  try {
    const booksArr = await Book.findAll({})
    res.json(booksArr)
  } catch (err) {
    res.status(400).json(err)
  }
})
bookRouter.get('/:id', async (req, res) => {
  try {
    const singleBook = await Book.findByPk(req.params.id)
    res.json(singleBook)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = bookRouter
