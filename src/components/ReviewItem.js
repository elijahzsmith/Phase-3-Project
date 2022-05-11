import React from "react";

function ReviewItem({ review }) {
  const { review_details, star_rating, customer_id, restaurant_id } = review;
  return (
    <div>
      <h3>{review_details}</h3>
      <h3>{star_rating}</h3>
    </div>
  );
}

export default ReviewItem;
