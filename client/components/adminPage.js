import React from 'react'
import AdminAllProducts from './adminAllProducts'
import ManageUsers from './ManageUsers'
import ManageOrders from './ManageOrders'

export default function adminPage(props) {
  return (
    <div>
      <h1>Welcome Admin</h1>
      <AdminAllProducts />
      <ManageUsers />
      <ManageOrders />
    </div>
  )
}
