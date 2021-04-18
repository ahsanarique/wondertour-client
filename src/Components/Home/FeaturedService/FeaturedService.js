import React from "react";
import { Link } from "react-router-dom";
import featuredBg from "../../../images/service.jpg";

const featuredTour = [
  {
    title: "Group Travel to Norway",
    originalPrice: "200",
    discountPrice: "100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eumullam, tempora voluptatem nobis soluta maxime dicta enim dolore! Tenetur, quia!",
  },
];

const FeaturedService = () => {
  const featuredImgBg = {
    backgroundImage: `url(${featuredBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="card container-fluid border-0"
      style={featuredImgBg}
      id="upcoming"
    >
      <div
        style={{ maxWidth: "20rem", height: "20rem" }}
        className="card m-5 bg-dark text-light"
      >
        {featuredTour.map((featured, i) => (
          <div key={i} className="card-body">
            <div>
              <h4 className="card-title">{featured.title}</h4>
            </div>
            <div className="card-text d-flex">
              <h5>
                ${featured.discountPrice}{" "}
                <strike className="text-secondary">
                  ${featured.originalPrice}
                </strike>
              </h5>
            </div>
            <div className="card-text m-3">{featured.description}</div>
            <div className="d-grid mt-5">
              <Link to="/dashboard/booking">
                <button className="btn btn-light">Book This Tour</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedService;
