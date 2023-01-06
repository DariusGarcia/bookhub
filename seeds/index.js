const seedUsers = require('./userSeed')
const seedBooks = require('./bookSeed')
const seedTags = require('./tagSeed')
const seedBookTags = require('./bookTagSeed')

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('\n----- DATABASE SYNCED -----\n')

  await seedUsers()
  console.log('\n----- USERS SEEDED -----\n')

  await seedBooks()
  console.log('\n----- BOOKS SEEDED -----\n')

  await seedTags()
  console.log('\n----- TAGS SEEDED -----\n')

  await seedBookTags()
  console.log('\n----- BOOK TAGS SEEDED -----\n')

  console.log('\n-----  SUCCESS: SEED ENDED  -----\n')

  process.exit(0)
}

seedAll()
