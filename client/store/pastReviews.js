import axios from 'axios'
//ACTION
const GET_PAST_REVIEWS = 'GET_PAST_REVIEWS'

//ACTION CREATOR
const pastReviews = reviews => ({
  type: GET_PAST_REVIEWS,
  reviews
})

//THUNK
export const getPastReviews = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/reviews/user_reviews`)
      dispatch(pastReviews(data))
    } catch (err) {
      console.log('Cannot get past reviews', err)
    }
  }
}

//REDUCER
export default (state = [], action) => {
  switch (action.type) {
    case GET_PAST_REVIEWS:
      return action.reviews
    default:
      return state
  }
}
