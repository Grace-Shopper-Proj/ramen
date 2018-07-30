import React from 'react'
import Reactstars from 'react-stars'
export default function SingleReview(props) {
  const {review} = props
  return (
    <div>
      <h5>{review.title}</h5>
      <h6>
        Reviewed at: {review.createdAt.slice(0, 10)},{' '}
        {review.createdAt.slice(11, 16)}{' '}
      </h6>
      <Reactstars
        count={5}
        edit={false}
        size={24}
        color2="#ffd700"
        value={review.rating}
      />
      <p>{review.content}</p>
    </div>
  )
}
