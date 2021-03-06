const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/:type/:method', (req, res) => {
  const type = req.params.type
  const method = req.params.method
  const userId = req.user._id

  Restaurant.find({ userId })
    .lean()
    .sort({ [type]: [method] })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

module.exports = router
