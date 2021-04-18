import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("https://pure-inlet-21064.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
      });
  }, []);

  const quoteIcon = (
    <FontAwesomeIcon
      icon={faQuoteLeft}
      size="7x"
      color="#1CC7C1"
      opacity="0.2"
    />
  );

  return (
    <section
      id="reviews"
      style={{ maxWidth: "100rem" }}
      className="card my-5 border-0 bg-transparent"
    >
      <div className="card-body">
        <div className="d-flex">
          <div>
            <h6 className="card-title" style={{ color: "#1CC7C1" }}>
              REVIEWS
            </h6>
            <h2 className="card-subtitle">
              Reviews from Our <br /> Clients
            </h2>
          </div>
          <div className="ms-auto">
            <h4>{quoteIcon}</h4>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          {reviewData.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
