const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  let ramen1

  before (() => {
    ramen1 = Product.build({
      title: 'beef ramen',
      description: 'has beef',
      inventory: 10,
      category: ['meat', 'main course'],
      imageUrl: 'sdfdfs.jpg'
    })
  })

  describe('fields in model', () => {
    it('contains title', () => {
      expect(ramen1.title).to.equal('beef ramen');
    })

    it('contains description', () => {
      expect(ramen1.description).to.equal('has beef');
    })

    it('contains inventory', () => {
      expect(ramen1.inventory).to.equal(10);
    })

    it('contains category', () => {
      expect(ramen1.category).to.deep.equal(['meat', 'main course']);
    })

    it('contains imageUrl', () => {
      expect(ramen1.imageUrl).to.equal('sdfdfs.jpg');
    })

  })
})
