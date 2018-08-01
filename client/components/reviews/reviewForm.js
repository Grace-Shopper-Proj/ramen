import React from 'react'
//a library for star rating components
import ReactStars from 'react-stars'

export default props => {
  const {handleSubmit, reviewInfo, userId, handleChange, ratingChanged} = props
  return (
    <form onSubmit={event => handleSubmit(event, reviewInfo, userId)}>
      <h1>Please leave a review:</h1>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={reviewInfo.title}
        onChange={handleChange}
      />
      <label>Rating:</label>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2="#ffd700"
        value={reviewInfo.rating}
      />
      <label>Review:</label>
      <textarea
        name="content"
        row="7"
        cols="50"
        value={reviewInfo.content}
        placeholder="Tell us what you think of our ramen..."
        onChange={handleChange}
      />
      <br />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
