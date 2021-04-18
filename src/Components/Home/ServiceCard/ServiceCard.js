import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faClock,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const moneyIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />;
  const clockIcon = <FontAwesomeIcon icon={faClock} />;
  const mapIcon = <FontAwesomeIcon icon={faMap} />;

  return (
    <div style={{ width: "25rem" }} className="col-md-6 card m-2 animated">
      <div className="card-body d-flex flex-column align-items-center">
        <div>
          <img
            style={{ height: "15rem", width: "20rem" }}
            className="card-img-top"
            src={service.image}
            alt=""
          />
        </div>
        <div className="card-text">
          <h5 className="card-title my-3">{service.title}</h5>
          <div className="card-header d-flex p-3">
            <div className="me-2">
              <p className="card-text">
                {moneyIcon} ${service.price}/ person
              </p>
            </div>
            <div className="mx-2">
              <p className="card-text">
                {clockIcon} {service.duration} days
              </p>
            </div>
            <div className="mx-2">
              <p className="card-text">
                {mapIcon} {service.place}
              </p>
            </div>
          </div>
          <div className="card-text my-2">
            <p>{service.description}</p>
          </div>
        </div>
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/dashboard/booking=${service._id}`}
      >
        <div className="d-grid mb-3">
          <button className="btn btn-light">Book This Tour</button>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
