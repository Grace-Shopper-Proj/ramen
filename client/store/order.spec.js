/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchOrder, deleteOrder} from './order'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('order/cart thunk creator', () => {
  let store
  let mockAxios

  const initialState = {order: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchOrder', () => {
    it('eventually dispatches the GET ORDER action', async () => {
      const fakeOrder = {id: 1}
      mockAxios.onGet('api/orders/cart').replyOnce(200, fakeOrder)
      await store.dispatch(fetchOrder())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ORDER')
      expect(actions[0].order).to.be.deep.equal(fakeOrder)
    })
  })
})
