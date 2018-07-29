import React, {Component} from 'react'
import {connect} from 'react-redux'

import UserItem from './UserItem'

// using dummy data
const dummyUsers = {}

class ManageUser extends Component {
  render() {
    return <h1>This is where user management lives.</h1>
  }
}

const mapState = state => ({
  allUsers: dummyUsers
})

const mapDispatch = dispatch => ({
  modifyUser: user => dispatch(modifyUser(user))
})

export default connect(mapState, mapDispatch)(ManageUser)
