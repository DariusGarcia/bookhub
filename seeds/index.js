const seedUsers = require('./userSeed')

const sequelize = require('../config/connection')

const seedAll = async () => {
	await sequelize.sync({ force: true })
	console.log('\n----- DATABASE SYNCED -----\n')

	await seedUsers()

	console.log('\n----- USERS SEEDED -----\n')
}

seedAll()
