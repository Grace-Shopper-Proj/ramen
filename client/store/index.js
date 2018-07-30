import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allIngredients from './product'
import restrictions from './restrictions'
import cart from './order'
import pastOrders from './pastOrders'
import review from './review'
import pastReviews from './pastReviews'

const reducer = combineReducers({
  user,
  allIngredients,
  restrictions,
  cart,
  pastOrders,
  review,
  pastReviews
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
