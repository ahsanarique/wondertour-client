import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [loggedInUser] = useContext(UserContext);
  const { image, name } = loggedInUser;

  const avatarStyle = {
    verticalAlign: "middle",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  };

  const avatar = (
    <img className="mx-2" style={avatarStyle} src={image} alt="avatar" />
  );

  const addIcon = <FontAwesomeIcon icon={faPlus} />;

  const dashboardStyle = {
    height: "100vh",
    backgroundColor: "rgba(0, 72, 85, 0.9)",
  };

  const linkStyle = {
    color: "white",
  };
  return (
    <div style={dashboardStyle}>
      <div className="m-2 ">
        <Link style={linkStyle} to="/">
          <h4 className="mb-5">WonderTour</h4>
        </Link>

        <div>{avatar}</div>
        <div className="mt-2 mb-4 border-bottom border-light">
          <h5 className="text-center text-light">{name}</h5>
        </div>

        <div>
          {!loggedInUser.admin && (
            <div>
              <Link style={linkStyle} to="/dashboard/booking">
                <h6>
                  <span className="mx-2">{addIcon}</span> Place Booking
                </h6>
              </Link>
              <Link style={linkStyle} to="/dashboard/bookinglist">
                <h6>
                  <span className="mx-2">{addIcon}</span> Booking List
                </h6>
              </Link>
              <Link style={linkStyle} to="/dashboard/addreview">
                <h6>
                  <span className="mx-2">{addIcon}</span> Add Review
                </h6>
              </Link>
            </div>
          )}
          {loggedInUser.admin && (
            <div>
              <Link style={linkStyle} to="/dashboard/addservice">
                <h6>
                  <span className="mx-2">{addIcon}</span> Add Tour
                </h6>
              </Link>
              <Link style={linkStyle} to="/dashboard/managetour">
                <h6>
                  <span className="mx-2">{addIcon}</span> Manage Tour
                </h6>
              </Link>
              <Link style={linkStyle} to="/dashboard/managebooking">
                <h6>
                  <span className="mx-2">{addIcon}</span> Manage Booking
                </h6>
              </Link>
              <Link style={linkStyle} to="/dashboard/makeadmin">
                <h6>
                  <span className="mx-2">{addIcon}</span> Add Admin
                </h6>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
