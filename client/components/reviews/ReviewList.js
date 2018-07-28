import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//import components
import reviewForm from './reviewForm'

//import thunks
import {getReviewList} from '../../store/review'
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
  }

  componentDidMount() {
    this.props.fetchAllReviews()
    this.props.fetchUser()
  }

  render() {
    const {allReviews, user} = this.props
    console.log('This is the user', user)
    console.log(reviewForm)
    return (
      <div>
        <reviewForm />
        {user.id ? <reviewForm /> : <p>we have reviews. please add some</p>}
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
    allReviews: state.review.reviewList,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllReviews: () => dispatch(getReviewList()),
  fetchUser: () => dispatch(me())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewList)
)
