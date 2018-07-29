import React, {Component} from 'react'
import axios from 'axios'

import UserItem from './UserItem'

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
    if (actionType === 'unban') {
      newStatus = {isBan: false}
    }
    await axios.put(`/api/user/${userId}`, newStatus)
    const {data} = await axios.get('/api/users')
    this.setState({
      allUsers: data
    })
  }
  render() {
    const {allUsers} = this.state
    return (
      <div>
        <h1>Upgrade or ban users</h1>
        {allUsers.lenght === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {allUsers.map(user => (
              <UserItem
                key={user.id}
                user={user}
                modifyUser={this.modifyUser}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
