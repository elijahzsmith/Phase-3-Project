import React from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewItem from "../components/ReviewItem";

function About({ reviews }) {
  const renderReviews = reviews.map((review) => {
    console.log(review);
    return <ReviewItem key={review.id} review={review} />;
  });
  return (
    <div>
      About
      <h1>Sinatra's Finest</h1>
      <h4>Include a paragraph about sinatra's finest for content</h4>
      <ReviewForm />
      <div className="reviews-container">
        <h2>Reviews</h2>
        {renderReviews}
      </div>
    </div>
  );
}

export default About;
