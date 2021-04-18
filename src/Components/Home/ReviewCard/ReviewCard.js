import React from "react";

const ReviewCard = ({ review }) => {
  const avatarStyle = {
    verticalAlign: "middle",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  return (
    <div className="col-md-6 card p-4 m-2" style={{ maxWidth: "50rem" }}>
      <div className="card-body">
        <div className="d-flex card-footer border-0">
          <div className="me-3">
            <img style={avatarStyle} src={review.image} alt="" />
          </div>
          <div>
            <h5 style={{ color: "#1CC7C1" }}>{review.name}</h5>
          </div>
        </div>
        <div className="mt-2">
          <div className="card-text">
            <h6>Reviewed: {review.title}</h6>
          </div>
          <div>
            <p className="text-secondary card-text">{review.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
