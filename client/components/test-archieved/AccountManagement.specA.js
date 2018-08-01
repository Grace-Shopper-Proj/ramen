/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AccountManagement from './AccountManagement'
import store from '../store'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AccountManagement Component', () => {
  const user = {
    id: 1,
    email: 'cody@email.com',
    userType: 'admin'
  }
  const orders = [
    {
      id: 1,
      bowls: [
        {
          id: 1,
          price: 10,
          ingredients: [
            {
              id: 1,
              title: 'shio'
            },
            {
              id: 2,
              title: 'udon'
            },
            {
              id: 3,
              title: 'chicken'
            }
          ]
        }
      ]
    }
  ]
  const reviews = [
    {
      id: 1,
      content: 'I hate ramen.'
    }
  ]
  let accountManagement // wrapper
  before(() => {
    accountManagement = shallow(
      <AccountManagement
        user={user}
        orders={orders}
        reviews={reviews}
        store={store}
      />
    )
  })

  it('renders the email in element with id "email"', () => {
    const accountManagement = shallow(
      <AccountManagement
        user={user}
        orders={orders}
        reviews={reviews}
        store={store}
      />
    )
    expect(accountManagement.find('#user-type').exists()).to.be.equal(true)
  })

  it('renders the user type in element with id "user-type"', () => {
    expect(accountManagement.find('#user-type').text()).to.be.equal(
      'User Type: admin'
    )
  })
})
