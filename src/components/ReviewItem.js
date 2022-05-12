import React from "react";

function ReviewItem({ review, setReviews,reviews }) {
  const { review_details, star_rating,  } = review;
  console.log(reviews)
 
  const handleDelete = (review) => {
    console.log("Deleted order: ", review);
    fetch(`http://localhost:9292/reviews/${review.id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((deletedReview) => {
        
        const afterDelete = reviews.filter((item) => {
          return item.id !== deletedReview.id;
        });
        setReviews(afterDelete);
  console.log(deletedReview);
  console.log(reviews);
      });
  };
  
  return (
    <div>
      <h3>{review_details}</h3>
      <h3>{star_rating}</h3>
      <button onClick={() => handleDelete(review)}>Remove</button>
    </div>
  );
}

export default ReviewItem;
