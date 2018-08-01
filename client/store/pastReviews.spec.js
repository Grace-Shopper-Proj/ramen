/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {getPastReviews} from './pastReviews'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('past reviews thunk creator', () => {
  let store
  let mockAxios

  const initialState = {pastReviews: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getPastReviews', () => {
    it('eventually dispatches the GET PAST REVIEWS action', async () => {
      const fakeReviews = [{id: 1}, {id: 3}]
      mockAxios.onGet('/api/reviews/user_reviews').replyOnce(200, fakeReviews)
      await store.dispatch(getPastReviews())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PAST_REVIEWS')
      expect(actions[0].reviews).to.be.deep.equal(fakeReviews)
    })
  })
})
