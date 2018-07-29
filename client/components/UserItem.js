// User items show up in the ManageUser view.
import React from 'react'

export default function UserItem(props) {
  const {user, modifyUser} = props
  return (
    <li key={user.id}>
      user email: {user.email}
      <button type="submit" onClick={() => modifyUser(user.id, 'upgrade')}>
        Upgrade to admin
      </button>
      <button type="submit" onClick={() => modifyUser(user.id, 'ban')}>
        Ban user
      </button>
    </li>
  )
}
