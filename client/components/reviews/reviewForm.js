import React from 'react'

export default props => {
  const {submitReview, handleChange, reviewInfo, userId} = props
  console.log(
    'ReviewInfo in the FORM ',
    reviewInfo,
    'UserID in the form',
    userId
  )
  return (
    <form onSubmit={event => submitReview(event, reviewInfo, userId)}>
      <h3>Please leave a review:</h3>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={reviewInfo.title}
        onChange={handleChange}
      />
      <label>Rating:</label>
      <input
        name="rating"
        type="number"
        value={reviewInfo.rating}
        onChange={handleChange}
      />
      <label>Review:</label>
      <textarea
        name="content"
        row="7"
        cols="50"
        value={reviewInfo.content}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
