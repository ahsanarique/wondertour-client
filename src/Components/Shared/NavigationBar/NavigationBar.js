import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const NavigationBar = () => {
  const [loggedInUser] = useContext(UserContext);

  const avatarStyle = {
    verticalAlign: "middle",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;

  return (
    <section>
      <nav
        style={{ backgroundColor: "rgba(0, 72, 85, 0.9)" }}
        className="navbar navbar-expand-lg navbar-dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h4>WonderTour</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link mx-3" aria-current="page">
                Home
              </Link>
              <a className="nav-link mx-3" href="#services">
                Booking
              </a>
              <a className="nav-link mx-3" href="#upcoming">
                Featured
              </a>
              <a className="nav-link mx-3" href="#reviews">
                Reviews
              </a>
              <Link to="/dashboard" className="nav-link mx-3">
                Dashboard
              </Link>
              <a className="nav-link mx-3" href="#contact">
                Contact Us
              </a>
              {!loggedInUser.isSignedIn ? (
                <Link to="/login">
                  <button className="nav-link btn btn-light text-dark mx-3">
                    <span className="mx-3">{loginIcon} Login</span>
                  </button>
                </Link>
              ) : (
                <img
                  className="mx-3"
                  style={avatarStyle}
                  src={loggedInUser.image}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavigationBar;
