import React, { useState } from "react";

function ReviewForm() {
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  return (
    <form>
      Leave a review!
      <input type="integer" value={starInput} placeholder="Star Rating" />
      <textarea type="textarea" value={reviewInput} placeholder="Review..." />
      <button>Submit</button>
    </form>
  );
}

export default ReviewForm;
