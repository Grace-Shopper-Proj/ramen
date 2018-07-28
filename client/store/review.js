import axios from 'axios'

//ACTION
const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'

//ACTION CREATOR
const getAllReviews = reviews => ({
  type: GET_ALL_REVIEWS,
  reviews
})

//THUNK
export const getReviewList = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/reviews')
      dispatch(getAllReviews(data))
    } catch (err) {
      console.log('Sorry, we cannot get the reviews...', err)
    }
  }
}

const initialState = {
  reviewList: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return {...state, reviewList: action.reviews}
    default:
      return state
  }
}

export default reducer
