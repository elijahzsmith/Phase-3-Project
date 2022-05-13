import React, { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewItem from "../components/ReviewItem";
import Grid from "@mui/material/Grid";

function About({ reviews, setReviews }) {
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [reviewEditInput, setReviewEditInput] = useState("");
  const [starEditInput, setStarEditInput] = useState("");

  const configObjDELETE = { method: "DELETE" };

  const deleteReview = (review) => {
    fetch(`http://localhost:9292/reviews/${review.id}`, configObjDELETE)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const afterDelete = reviews.filter((review) => {
          return review.id !== data.id;
        });
        setReviews(afterDelete);
      });
  };

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
        const afterEdit = reviews.map((review) => {
          return review.id !== data.id ? review : data;
        });
        setReviews(afterEdit);
      });
  };

  const renderReviews = reviews.map((review) => {
    return (
      <ReviewItem
        key={review.id}
        review={review}
        reviewInput={reviewInput}
        starInput={starInput}
        deleteReview={deleteReview}
        reviewEditInput={reviewEditInput}
        setReviewEditInput={setReviewEditInput}
        setStarEditInput={setStarEditInput}
        starEditInput={starEditInput}
        handleEdit={handleEdit}
      />
    );
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
      <div className="reviews-container">
        <h1>Sinatra's Finest</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime doloremque. Quaerat provident commodi consectetur
          veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
          pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
          excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
          Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
          temporibus sint culpa, recusandae aliquam numquam totam ratione
          voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
          aliquam eligendi, placeat qui corporis!
        </p>
      </div>
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
        <Grid container style={{ justifyContent: "space-evenly" }}>
          <h2>Reviews</h2>
          {renderReviews}
        </Grid>
      </div>
    </div>
  );
}

export default About;
