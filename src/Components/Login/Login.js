import React, { useState, useEffect, useContext } from "react";
import { handleGoogleSignIn, initializeLoginFramework } from "./loginManager";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [adminEmail, setAdminEmail] = useState([]);

  initializeLoginFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      if (adminEmail.includes(res.email)) {
        res.admin = true;
      } else res.admin = false;
      handleResponse(res, true);
    });
  };

  const handleResponse = (res, redirect) => {
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/checkAdmin")
      .then((res) => res.json())
      .then((data) => {
        setAdminEmail(data.map((x) => x.email));
      })
      .catch((err) => {
        if (err) {
          console.log(err.message);
        }
      });
  }, []);

  const loginDivStyle = {
    backgroundColor: "rgba(0, 72, 85, 0.9)",
    width: "40rem",
  };

  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

  return (
    <section
      style={{ height: "80vh" }}
      className="card border-0 bg-transparent d-flex align-items-center justify-content-center"
    >
      <div style={loginDivStyle} className="card text-center">
        <div className="card-body my-5">
          <button
            onClick={() => googleSignIn()}
            className="btn btn-light btn-lg"
          >
            <span className="mx-2">{googleIcon}</span> Continue With Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
