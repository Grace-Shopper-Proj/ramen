import axios from 'axios'
import {runInNewContext} from 'vm'

// ACTION TYPES
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_RESTRICTIONS = 'GOT_RESTRICTIONS'
const SELECT_SIZE = 'SELECT_SIZE'
const SELECT_NOODLES = 'SELECT_NOODLES'
const SELECT_BROTH = 'SELECT_BROTH'
const SELECT_PROTEIN = 'SELECT_PROTEIN'
const SELECT_TOPPINGS = 'SELECT_TOPPING'
const SELECT_RESTRICTIONS = 'SELECT_RESTRICTIONS'

// ACTION CREATORS
export const gotProducts = products => ({type: GOT_PRODUCTS, products})
export const gotRestrictions = restrictions => ({
  type: GOT_RESTRICTIONS,
  restrictions
})
export const selectSize = size => ({type: SELECT_SIZE, size})
export const selectNoodles = noodleType => ({type: SELECT_NOODLES, noodleType})
export const selectBroth = brothType => ({type: SELECT_BROTH, brothType})
export const selectProtein = proteinType => ({
  type: SELECT_PROTEIN,
  proteinType
})
export const selectToppings = toppings => ({type: SELECT_TOPPINGS, toppings})
export const selectRestrictions = restrictions => ({
  type: SELECT_TOPPINGS,
  restrictions
})

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

export const getRestrictions = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/ingredients/category')
      const restrictions = response.data
      dispatch(gotRestrictions(restrictions))
    } catch (err) {
      console.error(err)
    }
  }
}

// // INITIAL STATE
// const initialProductState = {
//   selectBroth
// }
