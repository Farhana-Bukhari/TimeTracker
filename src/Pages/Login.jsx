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
          className="login d-flex justify-content-center align-items-center   
    "
        >
          <div className="form_container  rounded ">
            <h1 className="form-heading">Welcome Back!</h1>
            <form action="" className="">
              <h3 className=" Signin text-left">Login to your account</h3>
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
              <div className="rememberMe-forgotPassword ">
                <div className="rememberMe-holder  d-flex align-items-center justify-content-start w-100">
                  <input
                    type="checkbox"
                    id="check"
                    className="custom-control custom-checkbox"
                  />
                  <label htmlFor="check" className="custom-input-label ms-2">
                    Remember me
                  </label>
                </div>
                <div className="forgot-password-holder d-flex align-items-center justify-content-start w-100">
                  <p className=" mb-2 ">
                    <a href="" className="forgot-password ">
                      I forgot my password
                    </a>
                  </p>
                </div>
              </div>
              <div className="d-grid">
                <button className="btn">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="image-section  d-flex justify-content-center align-items-center">
        <div className="image-holder d-flex justify-content-center align-items-center">
          <img src={LoginImage} alt="" className="image-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Login;
// -------------------------
