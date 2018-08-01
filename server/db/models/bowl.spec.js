const {expect} = require('chai')
const db = require('../index')
const Bowl = db.model('bowl')

describe('Bowl model', () => {
  it('has price', () => {
    const bowl1 = Bowl.build({
      price: 3
    })
    expect(bowl1.price).to.equal(3)
  })
})
