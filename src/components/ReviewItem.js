import React, { useState } from "react";
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'

function ReviewItem({
  review,
  reviewInput,
  starInput,
  deleteReview,
  handleEdit,
  reviewEditInput,
  setReviewEditInput,
  setStarEditInput,
  starEditInput,
}) {
  const [displayEdit, setDisplayEdit] = useState(false);
  // change initial state
  // const [reviewEditInput, setReviewEditInput] = useState(reviewInput);
  // const [starEditInput, setStarEditInput] = useState(starInput);
  const { review_details, star_rating, customer_id, restaurant_id } = review;

  // const reviewAfterEdit = {
  //   review_details: reviewEditInput,
  //   star_rating: starEditInput,
  // };

  // const configObjPATCH = {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify(reviewAfterEdit),
  // };

  // const handleEdit = (review, e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:9292/reviews/${review.id}`, configObjPATCH)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  // const configObjDELETE = { method: "DELETE" };

  // const deleteReview = (review) => {
  //   fetch(`http://localhost:9292/reviews/${review.id}`, configObjDELETE)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <div className="review-item">
      {/* <Paper> */}
      <h3>{review_details}</h3>
      {/* <h3>{star_rating}</h3> */}
      <Rating value={star_rating} readOnly />
      <button onClick={() => setDisplayEdit(!displayEdit)}>edit</button>
      <button onClick={() => deleteReview(review)}>delete</button>
      {displayEdit ? (
        <form
          className="review-edit-form"
          onSubmit={(e) => handleEdit(review, e)}
        >
          <input
            onChange={(e) => setReviewEditInput(e.target.value)}
            placeholder="edit review"
            value={reviewEditInput}
          ></input>
          <input
            onChange={(e) => setStarEditInput(e.target.value)}
            placeholder="edit star_rating"
            // CHANGE VALUES
            value={starEditInput}
          ></input>
          <button onClick={(e) => handleEdit(review, e)}>update</button>
        </form>
      ) : null}
      {/* </Paper> */}
    </div>
  );
}

export default ReviewItem;
