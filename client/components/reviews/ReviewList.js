import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Reactstars from 'react-stars'
//import components
import ReviewForm from './ReviewForm'

//import thunks
import {getReviewList, addReview} from '../../store/review'
import {me} from '../../store/user'

class ReviewList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      rating: 0,
      content: 'Tell us what you think of our ramen...'
    }
    this.handleChange = this.handleChange.bind(this)
    this.ratingChanged = this.ratingChanged.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllReviews()
    this.props.fetchUser()
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  ratingChanged(newRating) {
    this.setState({rating: newRating})
  }

  render() {
    const {allReviews, submitReview, user} = this.props
    return (
      <div>
        {user.id ? (
          <ReviewForm
            handleChange={this.handleChange}
            ratingChanged={this.ratingChanged}
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
              <Reactstars
                count={5}
                edit={false}
                size={24}
                color2="#ffd700"
                value={review.rating}
              />
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
