const router = require('express').Router()
const {Review, User} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const reviewList = await Review.findAll({
      includes: [
        {
          model: User,
          as: 'userId'
        }
      ]
    })
    console.log('1. Here is the reviewList in routes', reviewList)
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
  //request body receives an object includes review and UserId
  const {review, userId} = req.body
  console.log(
    '5. we are posting this Backend review and userID',
    review,
    ' and userId',
    userId
  )
  try {
    const newReview = await Review.create(review)
    await newReview.setUser(userId)
    console.log('backEnd after setUser', newReview)
    res.status(201).json(newReview)
  } catch (err) {
    console.log('Sorry, cannot add a review...', err)
    next(err)
  }
})
