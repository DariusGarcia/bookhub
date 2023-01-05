const { User } = require('../models/')

const userData = [
  {
    username: 'johnDoe8',
    password: 'password123',
  },
  {
    username: 'apple',
    password: 'password123',
  },
  {
    username: 'orange',
    password: 'password123',
  },
  {
    username: 'testing',
    password: 'password123',
  },
  {
    username: 'jackDoe8',
    password: 'password123',
  },
  {
    username: 'janeApple8',
    password: 'password123',
  },
]

const createUserTable = () => User.bulkCreate(userData)

module.exports = createUserTable
