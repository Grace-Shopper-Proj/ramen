// User items show up in the ManageUser view.
import React from 'react'

export default function UserItem(props) {
  const {user, modifyUser} = props
  return (
    <li key={user.id}>
      User email: {user.email}
      {user.userType === 'customer' ? (
        <button type="submit" onClick={() => modifyUser(user.id, 'upgrade')}>
          Upgrade to admin
        </button>
      ) : (
        ''
      )}
      {user.isBan === true ? (
        <button type="submit" onClick={() => modifyUser(user.id, 'unban')}>
          Un-ban user
        </button>
      ) : (
        <button type="submit" onClick={() => modifyUser(user.id, 'unban')}>
          Un-ban user
        </button>
      )}
    </li>
  )
}
