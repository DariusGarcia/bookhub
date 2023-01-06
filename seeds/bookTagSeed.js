const { BookTag } = require('../models')

const bookTagData = [
  {
    book_id: 1,
    tag_id: 1,
  },
  {
    book_id: 1,
    tag_id: 3,
  },
  {
    book_id: 11,
    tag_id: 2,
  },
  {
    book_id: 2,
    tag_id: 4,
  },
  {
    book_id: 3,
    tag_id: 1,
  },
  {
    book_id: 3,
    tag_id: 3,
  },
  {
    book_id: 3,
    tag_id: 4,
  },
  {
    book_id: 5,
    tag_id: 3,
  },
  {
    book_id: 6,
    tag_id: 1,
  },
  {
    book_id: 4,
    tag_id: 2,
  },
  {
    book_id: 7,
    tag_id: 2,
  },
  {
    book_id: 8,
    tag_id: 3,
  },
]

const seedBookTags = () => BookTag.bulkCreate(bookTagData)

module.exports = seedBookTags
