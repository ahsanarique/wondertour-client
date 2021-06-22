import React from "react";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import header from "../../../images/header.jpg";

const Header = () => {
  const headerBgStyle = {
    backgroundColor: "rgba(0, 72, 85, 0.9)",
  };

  return (
    <section style={headerBgStyle} className="text-light mb-5">
      <NavigationBar />
      <Jumbotron className="row mx-5">
        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
          <div>
            <h1>Explore Your Travel</h1>
          </div>
          <div>
            <p>
              Discover your next great adventure, become an explorer to get
              started!
            </p>
          </div>
          <div>
            <Button variant="warning" href="#services">
              Explore More
            </Button>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <img className="pe-5 m-5 img-fluid" src={header} alt="" />
        </div>
      </Jumbotron>
    </section>
  );
};

export default Header;
