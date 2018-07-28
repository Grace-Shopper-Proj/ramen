const router = require('express').Router()
module.exports = router

router.use('/ingredients', require('./ingredients'))

router.use('/users', require('./users'))

router.use('/bowls', require('./bowls'))

router.use('/orders', require('./orders'))

router.use('/reviews', require('./reviews'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
