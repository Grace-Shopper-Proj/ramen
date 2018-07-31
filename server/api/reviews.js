const router = require('express').Router()
const {Review, User} = require('../db/models')
const authorize = require('./authorize')

module.exports = router

router.get('/', authorize, async (req, res, next) => {
  try {
    const reviewList = await Review.findAll({
      include: [
        {
          model: User
        }
      ]
    })
    if (!reviewList) {
      const error = new Error('There is no reviews')
      //send an error
      error.status = 404
      return next(error)
    }
    res.status(200).json(reviewList.reverse())
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', authorize, async (req, res, next) => {
  try {
    const reviewList = await Review.findAll({
      where: {userId: req.params.userId},
      include: [
        {
          model: User
        }
      ]
    })
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

router.post('/', authorize, async (req, res, next) => {
  //request body receives an object includes review and UserId
  const {review, userId} = req.body
  try {
    const newReview = await Review.create(review)
    await newReview.setUser(userId)
    const newReviewIncludesUser = await Review.findById(newReview.id, {
      include: [{model: User}]
    })
    res.status(201).json(newReviewIncludesUser)
  } catch (err) {
    console.log('Sorry, cannot add a review...', err)
    next(err)
  }
})

router.delete('/:id', authorize, async (req, res, next) => {
  try {
    await Review.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).send()
  } catch (err) {
    console.log('Sorry, cannot delete this review...', err)
    next(err)
  }
})
