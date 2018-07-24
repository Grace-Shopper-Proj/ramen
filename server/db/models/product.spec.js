const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  let ramen1

  before(() => {
    ramen1 = Product.build({
      title: 'beef ramen',
      description: 'has beef',
      inventory: 10,
      tags: ['meat', 'main course'],
      price: 5,
      type: 'broth',
      imageUrl: 'sdfdfs.jpg'
    })
  })

  describe('fields in model', () => {
    it('contains title', () => {
      expect(ramen1.title).to.equal('beef ramen')
    })

    it('contains description', () => {
      expect(ramen1.description).to.equal('has beef')
    })

    it('contains inventory', () => {
      expect(ramen1.inventory).to.equal(10)
    })

    it('contains tags', () => {
      expect(ramen1.tags).to.deep.equal(['meat', 'main course'])
    })

    it('contains price', () => {
      expect(ramen1.price).to.equal(5)
    })

    it('contains type', () => {
      expect(ramen1.type).to.deep.equal('broth')
    })

    it('contains imageUrl', () => {
      expect(ramen1.imageUrl).to.equal('sdfdfs.jpg')
    })
  })
})
