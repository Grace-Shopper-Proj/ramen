import React from 'react'
import Reactstars from 'react-stars'
export default function SingleReview(props) {
  const {review, userName} = props
  return (
    <div key={review.id}>
      <h4>User: {userName}</h4>
      <h5>{review.title}</h5>
      <h6>Reviewed at: {review.createdAt}</h6>
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
