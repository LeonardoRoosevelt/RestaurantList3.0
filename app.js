const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const methodOverride = require('method-override')
const routes = require('./routes')
const Restaurant = require('./models/restaurant')

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(express.static('public'))
app.use(routes)

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
