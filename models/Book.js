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
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    publishing_date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      // hook to hash password before instantiating User model
      beforeCreate: async (book) => {
        const cleanedBook = book.title.trim()
        return cleanedBook
      },
      // hook to hash password before updating the User model
      beforeUpdate: async (book) => {
        const cleanedBook = book.title.trim()
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
