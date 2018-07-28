const router = require('express').Router()
const Review = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const reviewList = await Review.findAll()
    if (!reviewList) {
      const error = new Error('There is no reviews')
      //send an error
      error.status = 404
      return next(error)
    }
    res.status(200).json(reviewList)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  //request body receives review object includes orderId and UserId
  try {
    const review = await Review.create(req.body)
    res.status(201).json(review)
  } catch (err) {
    console.log('Sorry, cannot add a review...', err)
    next(err)
  }
})
