const {expect} = require('chai')
const db = require('../index')
const Ingredient = db.model('ingredient')

describe('Ingredient model', () => {
  let ramen1

  before(() => {
    ramen1 = Ingredient.build({
      title: 'beef ramen',
      description: 'has beef',
      inventory: 10,
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

    it('contains price', () => {
      expect(ramen1.price).to.equal(5)
    })

    it('contains type', () => {
      expect(ramen1.type).to.deep.equal('broth')
    })

    it('contains imageUrl', () => {
      expect(ramen1.imageUrl).to.equal('sdfdfs.jpg')
    })

    it('inventory adds 1 when calling increaseOne', () => {
      ramen1.increaseOne()
      expect(ramen1.inventory).to.equal(11)
    })

    it('inventory delete 1 when calling decreaseOne', () => {
      ramen1.decreaseOne()
      expect(ramen1.inventory).to.equal(10)
    })

    it('checks if there is any ingredient in the inventory', () => {
      expect(ramen1.hasAny()).to.equal(true)
    })
  })
})
