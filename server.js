require('dotenv').config()
const path = require('path')
const express = require('express')
const session = require('express-session')
const expressHandleBars = require('express-handlebars')
const routes = require('./controller')
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const helpers = require('./utils/helpers')

const app = express()
const PORT = process.env.PORT || 3001

// express session options
const sess = {
  secret: '74vLqUS50mP4FNlPzfqd42IBnoL34823',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
}

app.use(session(sess))

// set express engine to handlebars
const hbs = expressHandleBars.create({ helpers })
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\n------------------------------------------------\nSuccessfully connected to SQL database \nNow listening on port: ${PORT}\n\nhttp://localhost:3001/\n------------------------------------------------`
    )
  )
})
