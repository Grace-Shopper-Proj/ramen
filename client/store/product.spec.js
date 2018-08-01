/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {getProducts} from './product'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('ingredients thunk creator', () => {
  let store
  let mockAxios

  const initialState = {allIngredients: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getProducts', () => {
    it('eventually dispatches the GOT PRODUCTS action', async () => {
      const fakeProducts = [{id: 1}, {id: 3}]
      mockAxios.onGet('/api/ingredients').replyOnce(200, fakeProducts)
      await store.dispatch(getProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GOT_PRODUCTS')
      expect(actions[0].products).to.be.deep.equal(fakeProducts)
    })
  })
})
