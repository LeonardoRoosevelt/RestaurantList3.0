const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restaurantList', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', () => {
  console.error('Could not connect')
})

db.once('open', () => {
  console.log('connect success')
})

module.exports = db
