require('dotenv').config()
const path = require('path')
const express = require('express')
const session = require('express-session')
const expressHandleBars = require('express-handlebars')
const routes = require('./controller')

const sequelize = require('./config/connection')

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express()
const PORT = process.env.PORT || 3001

// const sess = {
// 	secret: process.env.SESSION_SECRET_KEY,
// 	cookie: {
// 		maxAge: 300000,
// 		httpOnly: true,
// 		secure: false,
// 	},
// 	resave: false,
// 	saveUnitialized: true,
// 	store: new SequelizeStore({ db: process.env.SESSION_DB }),
// }

// app.use(session(sess))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// app.use(routes)

sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on ${PORT}!`))
})
