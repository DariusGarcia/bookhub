const Sequelize = require('sequelize')

require('dotenv').config()

// connect sequelize to mysql db
const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(
			process.env.DB_NAME,
			process.env.DB_USER,
			process.env.DB_PASSWORD,
			{
				host: process.env.DB_HOST,
				dialect: process.env.DIALECT,
				port: process.env.DB_PORT,
			}
	  )

module.exports = sequelize
