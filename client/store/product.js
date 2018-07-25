import axios from 'axios'

// ACTION TYPES
const GOT_PRODUCTS = 'GOT_PRODUCTS'

// ACTION CREATORS
export const gotProducts = products => ({type: GOT_PRODUCTS, products})

//THUNK CREATORS
export const getProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/ingredients')
      const products = response.data
      dispatch(gotProducts(products))
    } catch (err) {
      console.error(err)
    }
  }
}

// INITIAL STATE
const allProducts = [] //an array of objects

//Reducer
export default function(state = allProducts, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products

    default:
      return state
  }
}
