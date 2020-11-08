const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const User = require('../user')
const Restaurant = require('../restaurant')
const db = require('../../config/mongoose')

const SEED_USER = require('./user.json')
const SEED_RESTAURANT = require('./restaurant.json')

db.once('open', () => {
  const userLists = SEED_USER.results
  const restaurantLists = SEED_RESTAURANT.results

  User.find({
    email: { $in: ['user1@example.com', 'user2@example.com'] }
  }).then(user => {
    if (user.length !== 0) {
      console.log('userSeeds already exist')
      return process.exit()
    } else {
      Promise.all(
        userLists.map(userList => {
          return bcrypt
            .genSalt(10)
            .then(salt => bcrypt.hash(userList.password, salt))
            .then(hash =>
              User.create({
                name: userList.name,
                email: userList.email,
                password: hash
              })
            )
            .then(user => {
              return Promise.all(
                restaurantLists.map(restaurantList => {
                  if (
                    user.email === 'user1@example.com' &&
                    restaurantList.id < 4
                  ) {
                    restaurantList.userId = user._id
                    return Restaurant.create(Object.assign({}, restaurantList))
                  } else if (
                    user.email === 'user2@example.com' &&
                    restaurantList.id >= 4 &&
                    restaurantList.id <= 6
                  ) {
                    restaurantList.userId = user._id
                    return Restaurant.create(Object.assign({}, restaurantList))
                  }
                })
              ).catch(error => console.log(error))
            })
        })
      ).then(() => {
        console.log('done')
        process.exit()
      })
    }
  })
})
