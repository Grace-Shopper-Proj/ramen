/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {spy} from 'sinon'
import {OrderPage} from './OrderPage'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('React', () => {
  const ShioBroth = Ingredient.create({
    title: 'Shio',
    description:
      'A clear and saltier soup base made with chicken, vegetables and salt. It is the oldest of the ramen broth. ',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl:
      'https://i.pinimg.com/originals/d2/b2/09/d2b20921e8cf9b504e7d897ae6595aae.jpg'
  })

  const ShoyuBroth = Ingredient.create({
    title: 'Shoyu',
    description:
      'A tangy-flavored, clear, brown broth made with vegetable and soy souce',
    price: '3.50',
    inventory: 100,
    type: 'broth',
    imageUrl: 'https://truffle-assets.imgix.net/9a72cc13-ramentime6.png'
  })

  const UdonNoodles = Ingredient.create({
    title: 'Udon',
    description: 'thick, chewy',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'http://kandscorporation.com/wp-content/uploads/2017/02/order-noodles-1848952632.png'
  })

  const CurlyNoodles = Ingredient.create({
    title: 'Curly noodle',
    description: 'yellow, made with wheat and eggs.',
    price: '3.50',
    inventory: 100,
    type: 'noodles',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EXTRA-NOODLE-2.png'
  })

  const noriTopping = Ingredient.create({
    title: 'nori',
    description: 'crunchy seaweed',
    price: '1.00',
    inventory: 100,
    type: 'toppings',
    imageUrl:
      'https://www.superfoodevolution.com/images/nori-flakes-8oz-live-superfoods.png'
  })

  const EggTopping = Ingredient.create({
    title: 'soft-boiled egg',
    description: 'egg that is soft-boiled and cutted a half',
    price: '1.00',
    inventory: 100,
    type: 'toppings',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-EGG.png'
  })

  const porkProtein = Ingredient.create({
    title: 'pork',
    description: 'pork belly',
    price: '2.00',
    inventory: 100,
    type: 'protein',
    imageUrl:
      'https://s3-us-west-2.amazonaws.com/tatsuramen/production/menu/TATSU-ITE-PORK.png'
  })

  ////ORDER PAGE/////
  describe('OrderPage', () => {
    let orderPage

    beforeEach(() => {
      orderPage = shallow(<OrderPage />)
    })

    it('renders the orderpage in an h3', () => {
      expect(userHome.find('h3').text()).to.be.equal('Welcome, cody@email.com')
    })
  })
})
