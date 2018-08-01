/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {getRestrictions} from './restrictions'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('restrictions/categories thunk creator', () => {
  let store
  let mockAxios

  const initialState = {restrictions: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('gotRestrictions', () => {
    it('eventually dispatches the GOT_RESTRICTIONS action', async () => {
      const fakeRestrictions = [{id: 1}, {id: 3}]
      mockAxios.onGet('/api/categories').replyOnce(200, fakeRestrictions)
      await store.dispatch(getRestrictions())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GOT_RESTRICTIONS')
      expect(actions[0].restrictions).to.be.deep.equal(fakeRestrictions)
    })
  })
})
