import React, { useState } from "react";

function ReviewItem({ review, reviewInput, starInput }) {
  const [displayEdit, setDisplayEdit] = useState(false);
  // change initial state
  const [reviewEditInput, setReviewEditInput] = useState(reviewInput);
  const [starEditInput, setStarEditInput] = useState(starInput);
  const { review_details, star_rating, customer_id, restaurant_id } = review;

  const reviewAfterEdit = {
    review_details: reviewEditInput,
    star_rating: starEditInput,
  };

  const configObjPATCH = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(reviewAfterEdit),
  };

  const handleEdit = (review, e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews/${review.id}`, configObjPATCH)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h3>{review_details}</h3>
      <h3>{star_rating}</h3>
      <button onClick={() => setDisplayEdit(!displayEdit)}>edit</button>
      {displayEdit ? (
        <form
          className="review-edit-form"
          onSubmit={(e) => handleEdit(review, e)}
        >
          <input
            placeholder="edit review"
            value={(e) => setReviewEditInput(e.target.value)}
          ></input>
          <input
            placeholder="edit star_rating"
            // CHANGE VALUES
            // value={}
          ></input>
          <button onClick={(e) => handleEdit(review, e)}>commit changes</button>
        </form>
      ) : null}
    </div>
  );
}

export default ReviewItem;
