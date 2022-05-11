import React, { useState } from "react";

function ReviewForm({
  // starInput,
  // setStarInput,
  // reviewInput,
  // setReviewInput,
  // handleSubmit,
  reviews,
  setReviews,
}) {
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");

  const newReview = {
    review_details: reviewInput,
    star_rating: starInput,
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newReview),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews([...reviews, data]);
        setStarInput("");
        setReviewInput("");
      });
  };

  //console.log(starInput, reviewInput);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      Leave a review!
      <input
        type="integer"
        value={starInput}
        placeholder="Star Rating"
        onChange={(e) => setStarInput(e.target.value)}
      />
      <textarea
        type="textarea"
        value={reviewInput}
        placeholder="Review..."
        onChange={(e) => setReviewInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default ReviewForm;
