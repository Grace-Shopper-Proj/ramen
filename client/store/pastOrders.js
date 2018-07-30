import axios from 'axios'

//ACTION TYPES
const GET_PAST_ORDERS = 'GET_PAST_ORDERS'

//ACTION CREATORS
const getPastOrders = orders => ({type: GET_PAST_ORDERS, orders})

//THUNK CREATORS
export const fetchPastOrders = () => async (dispatch, getState) => {
  try {
    const {user} = getState()
    const userId = user.id
    const {data} = await axios.get(`/api/orders/${userId}/past`)
    dispatch(getPastOrders(data))
    console.log('what is this data', data)
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
