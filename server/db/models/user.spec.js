/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  let user1
  before(() => {
    user1 = User.build({
      email: 'cody@email.com',
      password: 'jlkjlkjlkj',
      userType: 'admin'
    })
  })
  describe('fields in model', () => {
    it('contains email', () => {
      expect(user1.email).to.equal('cody@email.com')
    })
    it('contains user type', () => {
      expect(user1.userType).to.equal('admin')
    })
  })
})
