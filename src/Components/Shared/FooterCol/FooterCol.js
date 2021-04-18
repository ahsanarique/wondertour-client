import React from "react";

const FooterCol = (props) => {
  return (
    <div className="col-md-4">
      <h6 className="text-light fw-bolder">
        {props.menuTitle ? props.menuTitle : " "}
      </h6>
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index} className="text-light">
            {item.name}
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
