const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)

const search = require('./modules/search')
router.use('/search', search)

const restaurants = require('./modules/restaurants')
router.use('/restaurants', restaurants)

const sort = require('./modules/sort')
router.use('/sort', sort)

module.exports = router
