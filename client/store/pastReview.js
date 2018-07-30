import axios from 'axios'
//ACTION
const GET_PAST_REVIEWS = 'GET_PAST_REVIEWS'

//ACTION CREATOR
const pastReviews = reviews => ((type: GET_PAST_REVIEWS), reviews)

//THUNK
const getPastReviews = userId => {
  return async dispatch => {
    //const {data} = axios.
  }
}
