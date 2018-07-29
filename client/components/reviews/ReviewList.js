import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//import components
import ReviewForm from './reviewForm'

//import thunks
import {getReviewList, addReview} from '../../store/review'
import {me} from '../../store/user'
//import the thunk called
//import {getReviewList}

// const allReviews = [{
//     "id": 1,
//     "title": "THIS RAMEN SUCK!",
//     "rating": 2,
//     "content": "noodles were soggy, broth was cold and blend. Don't want to comeback",
//     "updatedAt": "2018-07-28T20:17:03.869Z",
//     "createdAt": "2018-07-28T20:17:03.869Z",
//     user: {
//       id:1,
//       email: 'sdf@gmail.com'
//     }}
//     ]

class ReviewList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      rating: 0,
      content: 'Tell us what you think of our ramen...'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllReviews()
    this.props.fetchUser()
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {allReviews, submitReview, user} = this.props
    console.log('2. This is the allReviews', allReviews)
    return (
      <div>
        {user.id ? (
          <ReviewForm
            handleChange={this.handleChange}
            submitReview={submitReview}
            reviewInfo={this.state}
            userId={user.id}
          />
        ) : (
          ''
        )}
        <h1>Here is Our Reviews: </h1>
        {!allReviews.length ? (
          <p>we don't have reviews. please add some</p>
        ) : (
          allReviews.map(review => (
            <div key={review.id}>
              <h4>User: {review.user.email}</h4>
              <h5>{review.title}</h5>
              <h6>ordered at: {review.createdAt}</h6>
              <div>rating: {review.rating} / 5</div>
              <p>{review.content}</p>
            </div>
          ))
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allReviews: state.review,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllReviews: () => dispatch(getReviewList()),
  fetchUser: () => dispatch(me()),
  submitReview: async (event, review, userId) => {
    event.preventDefault()
    await dispatch(addReview({review, userId}))
  }
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewList)
)
