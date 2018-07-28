import axios from 'axios'

// ACTION TYPES
const GET_ORDER = 'GET_ORDER'
const GET_PAST_ORDERS = 'GET_PAST_ORDERS'
const REMOVE_ORDER = 'REMOVE_ORDER' // e.g. user decides to start over

// ACTION CREATORS
const getOrder = order => ({type: GET_ORDER, order})
const getPastOrders = orders => ({type: GET_PAST_ORDERS, orders})
const removeOrder = () => ({type: REMOVE_ORDER})

// THUNK CREATORS
export const fetchOrder = userId => async dispatch => {
  try {
    let res
    if (userId) {
      res = await axios.get(`/api/orders/${userId}/cart`)
    } else {
      res = await axios.get('/api/orders/guest/cart')
    }
    dispatch(getOrder(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const fetchPassOrders = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/orders/${userId}/past`)
    dispatch(getPastOrders(data))
  } catch (err) {
    console.log(err)
  }
}

export const deleteOrder = orderId => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/orders/${orderId}`)
    dispatch(removeOrder())
  } catch (err) {
    console.log(err)
  }
}

// REDUCER

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    case REMOVE_ORDER:
      return {}
    default:
      return state
  }
}
