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
  { book_id: 22, tag_id: 2 },
  { book_id: 4, tag_id: 1 },
  { book_id: 7, tag_id: 3 },
  { book_id: 24, tag_id: 5 },
  { book_id: 20, tag_id: 2 },
  { book_id: 1, tag_id: 4 },
  { book_id: 14, tag_id: 1 },
  { book_id: 11, tag_id: 5 },
  { book_id: 3, tag_id: 5 },
  { book_id: 15, tag_id: 5 },
  { book_id: 18, tag_id: 2 },
  { book_id: 2, tag_id: 3 },
  { book_id: 9, tag_id: 1 },
  { book_id: 21, tag_id: 4 },
  { book_id: 25, tag_id: 3 },
  { book_id: 17, tag_id: 2 },
  { book_id: 17, tag_id: 5 },
  { book_id: 26, tag_id: 4 },
  { book_id: 13, tag_id: 1 },
  { book_id: 26, tag_id: 3 },
  { book_id: 38, tag_id: 4 },
  { book_id: 28, tag_id: 1 },
  { book_id: 36, tag_id: 2 },
  { book_id: 33, tag_id: 3 },
  { book_id: 40, tag_id: 5 },
  { book_id: 30, tag_id: 1 },
  { book_id: 34, tag_id: 3 },
  { book_id: 37, tag_id: 4 },
  { book_id: 32, tag_id: 2 },
  { book_id: 37, tag_id: 2 },
  { book_id: 35, tag_id: 3 },
  { book_id: 31, tag_id: 5 },
  { book_id: 26, tag_id: 1 },
  { book_id: 29, tag_id: 1 },
  { book_id: 39, tag_id: 3 },
  { book_id: 27, tag_id: 2 },
  { book_id: 32, tag_id: 5 },
  { book_id: 38, tag_id: 5 },
  { book_id: 40, tag_id: 1 },
]

const seedBookTags = () => BookTag.bulkCreate(bookTagData)

module.exports = seedBookTags
