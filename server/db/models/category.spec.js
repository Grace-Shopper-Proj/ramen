const {expect} = require('chai')
const db = require('../index')
const Category = db.model('category')

describe('Category model', () => {
  it('has name', () => {
    const cat1 = Category.build({
      name: 'beef'
    })
    expect(cat1.name).to.equal('beef')
  })
})
