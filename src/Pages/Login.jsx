// import React from "react";
import "./Login.css";
// import { Link } from "react-router-dom";
// import LoginImage from "../assets/download(1).png";
import LoginImage from "../assets/download (1).png";

function Login() {
  return (
    <div className="login-page">
      <div className="login-section">
        <div
          className="login d-flex justify-content-center align-items-center vh-100  
    "
        >
          <div className="form_container p-5 rounded ">
            <form action="">
              <h3 className=" Signin text-center">Sign In</h3>
              <div className="mb-4">
                <label htmlFor="email" className="label-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="label-text mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <input
                  type="checkbox"
                  id="check"
                  className="custom-control custom-checkbox"
                />
                <label htmlFor="check" className="custom-input-label ms-2">
                  Remember me
                </label>
              </div>
              <div className="d-grid">
                <button className="btn ">Sign In</button>
              </div>
              <p className=" text-start mt-4">
                <a href="" className="forgot-password ">
                  I forgot my password
                </a>
                {/* <Link to="/signup" className="ms-2">
                  Sign up
                </Link> */}
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="image-section  d-flex justify-content-center align-items-center">
        <div className="image-holder d-flex justify-content-center align-items-center">
          <img src={LoginImage} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
// -------------------------
