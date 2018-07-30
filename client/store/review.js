import axios from 'axios'

//ACTION
const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
const ADD_A_REVIEW = 'ADD_A_REVIEW'

//ACTION CREATOR
const getAllReviews = reviews => ({
  type: GET_ALL_REVIEWS,
  reviews
})

const submitReview = singleReview => ({
  type: ADD_A_REVIEW,
  singleReview
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
export const addReview = reviewInfo => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/reviews', reviewInfo)
      dispatch(submitReview(data))
    } catch (err) {
      console.log("sorry, you can't submit this review...".err)
    }
  }
}

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return action.reviews
    case ADD_A_REVIEW:
      return [...state, action.singleReview]
    default:
      return state
  }
}

export default reducer