import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//import the thunk called
//import {getReviewList}
class ReviewList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllReviews()
  }

  render() {
    return (
      <div>
        <h1>Here is Our Reviews: </h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allReviews: state.allReviews.ReviewList
})

const mapDispatchToProps = dispatch => ({
  fetchAllReviews: () => dispatch(getReviewList())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewList)
)
