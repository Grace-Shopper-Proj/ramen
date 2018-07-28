/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        email: codysEmail,
        password: 'secret',
        userType: 'customer'
      })
    })

    it('POST /api/users/', async () => {
      const res = await request(app)
        .post('/api/users/')
        .send({
          email: 'tom@hello.com',
          password: 'secret',
          userType: 'customer'
        })
        .expect(201)

      expect(res.body.email).to.be.equal('tom@hello.com')
    })
  })
})
