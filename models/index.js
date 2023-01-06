const User = require('./User')
const Book = require('./Book')
const Tag = require('./Tag')
const BookTag = require('./BookTag')

Book.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Book.belongsToMany(Tag, {
  through: BookTag,
  // as: 'book_tags',
  foreignKey: 'book_id',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Book, {
  through: BookTag,
  // as: 'book_tags',
  foreignKey: 'tag_id',
})

module.exports = { User, Book, Tag, BookTag }
