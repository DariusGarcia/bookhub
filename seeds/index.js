const seedUsers = require('./userSeed')
const seedBooks = require('./bookSeed')

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('\n----- DATABASE SYNCED -----\n')

  await seedUsers()
  console.log('\n----- USERS SEEDED -----\n')

  await seedBooks()
  console.log('\n----- BOOKS SEEDED -----\n')
  console.log('\n-----  SEED ENDED  -----\n')
  process.exit(0);
}

seedAll();
