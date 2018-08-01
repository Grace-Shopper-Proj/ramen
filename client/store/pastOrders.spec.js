/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchPastOrders} from './pastOrders'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('past orders thunk creator', () => {
  let store
  let mockAxios

  const initialState = {pastOrders: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchPastOrders', () => {
    it('eventually dispatches the GET PAST ORDERS action', async () => {
      const fakeOrders = [{id: 1}, {id: 3}]
      mockAxios.onGet('/api/orders/past').replyOnce(200, fakeOrders)
      await store.dispatch(fetchPastOrders())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PAST_ORDERS')
      expect(actions[0].orders).to.be.deep.equal(fakeOrders)
    })
  })
})
