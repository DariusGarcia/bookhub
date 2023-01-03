const User = require('./User')
const Book = require('./Book')

Book.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})

module.exports = { User, Book }
