import React, {Component} from 'react'
import {connect} from 'react-redux'

import {me} from './store/user'

class AccountManagement extends Component {
  componentDidMount() {
    this.props.getUser()
  }
  handleClick = event => {
    event.preventDefault()
    // A thunk creator for deleting user is needed to implement this method
  }
  render() {
    const {user} = this.props
    // Temporary message
    if (!user.id) return <h1>No logged in user to manage</h1>
    return (
      <div>
        <h1>Account Management</h1>
        <h2>User Information</h2>
        <p>Logged in with: {user.email}</p>
        <p>User Type: {user.userType}</p>
        <button type="submit" onClick={this.handleClick}>
          Delete this account
        </button>
        <h2>Past Order</h2>
        <p>To be implemented</p>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(AccountManagement)
