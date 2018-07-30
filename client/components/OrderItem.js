import React from 'react'

// parseItem is a helper function that parses a bowl object into a string that describes the bowl. It lives inside Cart.js
import {parseItem} from './Cart'

export default function OrderItem(props) {
  const {order, completeOrder} = props
  return (
    <li>
      <div>
        <p>
          Order ID: {order.id} / Time Created: {order.createdAt}
        </p>
        <p>Order Content:</p>
        <ol>
          <li>
            {order.bowls.map(bowl => `${parseItem(bowl)}, $${bowl.price}`)}
          </li>
        </ol>
        <button type="submit" onClick={() => completeOrder(order.id)}>
          Complete this order
        </button>
      </div>
    </li>
  )
}
