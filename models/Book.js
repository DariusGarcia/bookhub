const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

// Book model
class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishingDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      // hook to hash password before instantiating User model
      beforeCreate: async (book) => {
        const cleanedBook = book.title.trim()
        book.author.trim()
        book.genre.trim()
        book.description.trim()
        book.publishingDate.trim()
        return cleanedBook
      },
      // hook to hash password before updating the User model
      beforeUpdate: async (book) => {
        const cleanedBook = book.title.trim()
        book.author.trim()
        book.genre.trim()
        book.description.trim()
        book.publishingDate.trim()
        return cleanedBook
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Book',
  }
)

module.exports = Book
