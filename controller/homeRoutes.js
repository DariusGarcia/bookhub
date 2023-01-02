const homeRouter = require('express').Router()
const { User } = require('../models/')

// get all users for homepage
homeRouter.get('/', async (req, res) => {
	try {
		const userData = await User.findAll({})

		const users = userData.map((user) => user.get({ plain: true }))

		res.render('home', { users })
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = homeRouter