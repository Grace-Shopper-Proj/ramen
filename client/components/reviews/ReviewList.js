import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//import components
import ReviewForm from './ReviewForm'
import SingleReview from './SingleReview'

//import thunks
import {getReviewList, addReview} from '../../store/review'
import {me} from '../../store/user'
import {sendMessage} from '../../store/toast'

class ReviewList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      rating: 0,
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.ratingChanged = this.ratingChanged.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  async handleSubmit(event, review, userId) {
    event.preventDefault()
    this.setState({
      title: '',
      rating: 0,
      content: ''
    })
    this.props.submitNotification('Thank you for your review!')
    await this.props.submitReview(review, userId)
  }

  render() {
    const {allReviews, user} = this.props
    return (
      <div className="container">
        {user.id ? (
          <ReviewForm
            handleChange={this.handleChange}
            ratingChanged={this.ratingChanged}
            handleSubmit={this.handleSubmit}
            reviewInfo={this.state}
            userId={user.id}
          />
        ) : (
          ''
        )}
        <h1>Here Are Our Reviews: </h1>
        {!allReviews.length ? (
          <p>we don't have reviews. please add some</p>
        ) : (
          allReviews.map(review => {
            //
            const indexOfAt = review.user.email.indexOf('@')
            const userName = review.user.email.slice(0, indexOfAt)
            return (
              <div key={review.id}>
                <h4>user: {userName}</h4>
                <SingleReview userName={userName} review={review} />
              </div>
            )
          })
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
  submitReview: (review, userId) => {
    dispatch(addReview({review, userId}))
  },
  submitNotification: msg => dispatch(sendMessage(msg))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewList)
)
