import axios from 'axios'

// ACTION TYPES

const GOT_RESTRICTIONS = 'GOT_RESTRICTIONS'

//ACTION CREATORS
export const gotRestrictions = restrictions => ({
  type: GOT_RESTRICTIONS,
  restrictions
})

//THUNK CREATORS
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

// INITIAL STATE
const allRestrictions = [] //an array of objects

//Reducer
export default function(state = allRestrictions, action) {
  switch (action.type) {
    case GOT_RESTRICTIONS:
      return action.restrictions

    default:
      return state
  }
}
