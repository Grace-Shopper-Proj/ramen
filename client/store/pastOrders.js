import axios from 'axios'

//ACTION TYPES
const GET_PAST_ORDERS = 'GET_PAST_ORDERS'

//ACTION CREATORS
const getPastOrders = orders => ({type: GET_PAST_ORDERS, orders})

//THUNK CREATORS
export const fetchPastOrders = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/past`)
    dispatch(getPastOrders(data))
  } catch (err) {
    console.log(err)
  }
}

//REDUCER
export default (state = [], action) => {
  switch (action.type) {
    case GET_PAST_ORDERS:
      return action.orders
    default:
      return state
  }
}
