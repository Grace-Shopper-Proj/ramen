import React, {Component} from 'react'
import axios from 'axios'

import UserItem from './UserItem'

// using dummy data
const dummyUsers = [
  {
    id: 1,
    email: 'cody@email.com'
  },
  {
    id: 2,
    email: 'exploding.kitten@email.com'
  }
]

export default class ManageUser extends Component {
  state = {
    allUsers: []
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/users')
    this.setState({
      allUsers: data
    })
  }
  modifyUser = async (userId, actionType) => {
    let newStatus = {}
    if (actionType === 'upgrade') {
      newStatus = {userType: 'admin'}
    }
    if (actionType === 'ban') {
      newStatus = {isBan: true}
    }
    const {data} = await axios.put(`/api/user/${userId}`, newStatus)
  }
  render() {
    return (
      <div>
        <h1>Upgrade or band users</h1>
      </div>
    )
  }
}
