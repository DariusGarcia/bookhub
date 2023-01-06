const tagRouter = require('express').Router()
const { Tag, Book, BookTag } = require('../../models')

// get ALL tags
tagRouter.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Book,
        through: BookTag,
      },
    ],
  })
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(500).json(err))
})

// get single tag
tagRouter.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Book,
        through: BookTag,
      },
    ],
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err))
})

// POST new tag
tagRouter.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err))
})

// Update single tag
tagRouter.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err))
})

// DELETE tag
tagRouter.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err))
})

module.exports = tagRouter
