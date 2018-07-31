/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'
import AccountManagement from './AccountManagement'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AccountManagement Component', () => {
  let userHome

  beforeEach(() => {
    AccountManagement = shallow(
      <AccountManagement
        user={{
          id: 1,
          email: 'cody@email.com',
          userType: 'admin'
        }}
      />
    )
  })

  it('renders the email in an h3', () => {
    expect(userHome.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
