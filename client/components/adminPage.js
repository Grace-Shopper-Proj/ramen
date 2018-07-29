import React from 'react'
import AdminAllProducts from './adminAllProducts'
import ManageUsers from './ManageUsers'

export default function adminPage(props) {
  return (
    <div>
      <h1>Welcome Admin</h1>
      <AdminAllProducts />
      <ManageUsers />
    </div>
  )
}
