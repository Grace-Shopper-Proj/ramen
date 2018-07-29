// There routes are for managing users.

const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401).send('Login required')
    }
    if (req.user.userType !== 'admin') {
      res.status(401).send('User do no have permission to access admin page')
    }
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'userType', 'isBan']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401).send('Login required')
    }
    if (req.user.userType !== 'admin') {
      res.status(401).send('User do no have permission to access admin page')
    }
    const user = await User.findOne({
      where: {
        id: +req.params.userId,
        attributes: ['id', 'email', 'userType', 'isBan']
      }
    })
    if (user) {
      const updatedUser = user.update(req.body)
      res.json(updatedUser)
    } else {
      res.status(404).send('User not found')
    }
  } catch (err) {
    next(err)
  }
})

// This post route is probably useless
//
// router.post('/', async (req, res, next) => {
//   try {
//     const user = await User.create(req.body)
//     if (user) res.status(201).json(user)
//     else throw new Error('Fail to create new user')
//   } catch (err) {
//     next(err)
//   }
// })
