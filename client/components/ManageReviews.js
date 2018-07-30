import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Reactstars from 'react-stars'
import axios from 'axios'

//import thunks
import {getReviewList} from '../store/review'

class ManageReviews extends Component {
  componentDidMount() {
    this.props.fetchAllReviews()
  }
  removeReview = async event => {
    event.preventDefault()
    await axios.delete(`api/reviews/${this.state.id}`)
    this.props.fetchAllReviews()
  }
  render() {
    const {allReviews} = this.props
    return (
      <div>
        <h1>Reviews </h1>
        {console.log(allReviews)}
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
                onClick={this.removeReview}
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
  fetchAllReviews: () => dispatch(getReviewList())
})

export default withRouter(connect(mapState, mapDispatchToProps)(ManageReviews))
