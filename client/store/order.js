import axios from 'axios'

// ACTION TYPES
const GET_ORDER = 'GET_ORDER'
const REMOVE_ORDER = 'REMOVE_ORDER' // e.g. user decides to start over

// ACTION CREATORS
const getOrder = order => ({type: GET_ORDER, order})
// Currently not in use
// const removeOrder = () => ({type: REMOVE_ORDER})

// THUNK CREATORS
export const fetchOrder = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/orders/cart')
    dispatch(getOrder(data))
  } catch (err) {
    console.log(err)
  }
}

// Currently not in used
//
// export const deleteOrder = orderId => async dispatch => {
//   try {
//     await axios.delete(`/api/orders/${orderId}`)
//     dispatch(removeOrder())
//   } catch (err) {
//     console.log(err)
//   }
// }

// REDUCER

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    // case REMOVE_ORDER:
    //   return {}
    default:
      return state
  }
}
