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
        username: 'codythedog',
        password: 'secret',
        userType: 'customer'
      })
    })

    it('GET /api/users/:username', async () => {
      const res = await request(app)
        .get('/api/users/codythedog')
        .expect(200)

      expect(res.body.email).to.be.equal(codysEmail)
    })

    it('POST /api/users/', async () => {
      const res = await request(app)
        .post('/api/users/')
        .send({
          email: 'tom@hello.com',
          username: 'tom',
          password: 'secret',
          userType: 'customer'
        })
        .expect(201)

      expect(res.body.email).to.be.equal('tom@hello.com')
    })

    it('DELETE /api/users/:username', async () => {
      const res = await request(app)
        .delete('/api/users/codythedog')
        .expect(204)
    })
  })
})
