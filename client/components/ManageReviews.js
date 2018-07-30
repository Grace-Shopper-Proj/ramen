import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Reactstars from 'react-stars'

//import thunks
import {getReviewList, deleteReview} from '../store/review'

class ManageReviews extends Component {
  componentDidMount() {
    this.props.fetchAllReviews()
  }
  removeReview = (event, id) => {
    event.preventDefault()
    this.props.deleteReview(id)
  }
  render() {
    const {allReviews} = this.props
    return (
      <div>
        <h1>Reviews </h1>
        {!allReviews ? (
          <p>There are no reviews</p>
        ) : (
          allReviews.map(review => (
            <div key={review.id}>
              <h4>User: {review.user.email}</h4>
              <h5>{review.title}</h5>
              <h6>Posted at: {review.createdAt}</h6>
              <Reactstars
                count={5}
                edit={false}
                size={24}
                color2="#ffd700"
                value={review.rating}
              />
              <p>{review.content}</p>
              <button
                className="btn btn-primary btn-danger"
                onClick={event => this.removeReview(event, review.id)}
              >
                Delete Review
              </button>
            </div>
          ))
        )}
      </div>
    )
  }
}

const mapState = state => ({
  allReviews: state.review
})

const mapDispatchToProps = dispatch => ({
  fetchAllReviews: () => dispatch(getReviewList()),
  deleteReview: id => dispatch(deleteReview(id))
})

export default withRouter(connect(mapState, mapDispatchToProps)(ManageReviews))
