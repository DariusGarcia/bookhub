const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

// User model
class User extends Model {
  // comparing the bcrypt password to the stored password
  comparePassword(password) {
    return bcrypt.compareSync(password, this.password)
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      // hook to hash password before instantiating User model
      beforeCreate: async (data) => {
        data.password = await bcrypt.hash(data.password, 10)
        return data
      },
      // hook to hash password before updating the User model
      beforeUpdate: async (data) => {
        data.password = await bcrypt.hash(data.password, 10)
        return data
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
)

module.exports = User
