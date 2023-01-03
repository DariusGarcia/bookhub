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

const sess = {
  secret: process.env.SESSION_SECRET_KEY,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
  },
  store: new SequelizeStore({ db: sequelize }),
}

app.use(session(sess))

// set express engine to handlebars
const hbs = expressHandleBars.create()
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}!`))
})
