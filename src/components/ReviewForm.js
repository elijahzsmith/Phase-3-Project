import React, { useState } from "react";

function ReviewForm() {
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");

  console.log(starInput, reviewInput);
  return (
    <form>
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
      <button>Submit</button>
    </form>
  );
}

export default ReviewForm;
