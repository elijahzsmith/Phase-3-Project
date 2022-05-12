import React, { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewItem from "../components/ReviewItem";

function About({ reviews, setReviews }) {
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const renderReviews = reviews.map((review) => {
    console.log(review);
    return <ReviewItem reviews={reviews} setReviews={setReviews} key={review.id} review={review} />;
  });

  // const newReview = {
  //   review_details,

  // }

  // const configObjPOST = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify(newReview),
  // };

  // const handleSubmit = () => {
  //   fetch(`http://localhost:9292`)
  // }
  return (
    <div>
      About
      <h1>Sinatra's Finest</h1>
      <h4>Include a paragraph about sinatra's finest for content</h4>
      <ReviewForm
        starInput={starInput}
        setStarInput={setStarInput}
        reviewInput={reviewInput}
        setReviewInput={setReviewInput}
        reviews={reviews}
        setReviews={setReviews}
        // handleSubmit={handleSubmit}
      />
      <div className="reviews-container">
        <h2>Reviews</h2>
        {renderReviews}
      </div>
    </div>
  );
}

export default About;
