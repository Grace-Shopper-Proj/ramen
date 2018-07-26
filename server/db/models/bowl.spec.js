const {expect} = require('chai')
const db = require('../index')
const Bowl = db.model('bowl')

describe('Bowl model', () => {
  beforeEach(() => db.sync({force: true}))

  describe('column definitions and validations', () => {
    it('has broth, noodles, protein, and toppings', async () => {
      const bowl1 = await Bowl.create({
        broth: 'Shio',
        noodles: 'Udon',
        protein: 'Chicken',
        toppings: ['peanut'],
        price: 3
      })

      expect(bowl1.broth).to.equal('Shio')
      expect(bowl1.noodles).to.equal('Udon')
      expect(bowl1.protein).to.equal('Chicken')
      expect(bowl1.toppings).to.deep.equal(['peanut'])
      expect(bowl1.price).to.equal('3.00')
    })
  })
})
