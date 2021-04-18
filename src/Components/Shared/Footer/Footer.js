import React from "react";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerBgStyle = {
    backgroundColor: "rgba(0, 72, 85, 0.9)",
  };

  const aboutUs = [
    {
      name:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora voluptate omnis vel adipisci ratione delectus.",
    },
  ];
  const ourAddress = [{ name: "New York - 101010 Hudson" }, { name: "Yards" }];

  const services = [
    { name: "About Us" },
    { name: "How It Works" },
    { name: "Our Blog" },
    { name: "Our Services" },
    { name: "Contact Us" },
    { name: "Listing" },
  ];

  const fbIcon = (
    <FontAwesomeIcon className="icon active-icon" icon={faFacebookF} />
  );
  const gPlusIcon = <FontAwesomeIcon className="icon" icon={faGooglePlusG} />;
  const instagramIcon = <FontAwesomeIcon className="icon" icon={faInstagram} />;

  return (
    <footer
      style={footerBgStyle}
      className="container-fluid card border-0 text-light mt-5"
    >
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"About Us"} menuItems={aboutUs}>
            <div className="mt-3">
              <button className="btn btn-sm btn-light me-2">
                <a href="//facebook.com">{fbIcon}</a>
              </button>
              <button className="btn btn-sm btn-light mx-2">
                <a href="//google.com">{gPlusIcon}</a>
              </button>
              <button className="btn btn-sm btn-light ms-2">
                <a href="//instagram.com">{instagramIcon}</a>
              </button>
            </div>
          </FooterCol>

          <FooterCol key={2} menuTitle="Services" menuItems={services} />

          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-light">+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
