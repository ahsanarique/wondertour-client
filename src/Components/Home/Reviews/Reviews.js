import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Spinner } from "react-bootstrap";

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
    <section id="reviews" className="my-5 mx-2">
      <div className="row">
        <div className="col-sm-12 d-flex">
          <div>
            <h6 style={{ color: "#1CC7C1" }}>REVIEWS</h6>
            <h2>
              Reviews from Our <br /> Clients
            </h2>
          </div>
          <div className="ms-auto">
            <h4>{quoteIcon}</h4>
          </div>
        </div>

        <div className="col-sm-12 row">
          {reviewData.map((review) => (
            <div key={review._id} className="col-lg-4 col-md-6 col-sm-12">
              <ReviewCard review={review} />
            </div>
          ))}
          {reviewData.length < 1 && (
            <div className="d-flex justify-content-center">
              <Spinner variant="warning" animation="border" size="lg" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
