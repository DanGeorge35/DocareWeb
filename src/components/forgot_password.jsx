import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="screen  login_bg bg-info w3-display-container ">
      <div className="w3-display-middle w-100 container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <img src="logo_white.png" alt="logo" style={{ height: "80px" }} />
            <h3 className="text-center text-white w3-bold">
              <b>DOCARE</b>
            </h3>
            <b className="text-center text-white  mb-4 pt-5 pb-4 w3-block h5 bold">
              Forgot your password?
            </b>

            <div className="text-center p-3">
              <div className="px-1 pb-3 w3-block">
                <label className="w3-left">Email Address</label>
              </div>
              <input
                type="email"
                className="form-control  mt-3  text-medium"
                placeholder="Enter your Address"
              />
              <p className="fs-6 mt-4" style={{ fontSize: "20px" }}>
                You will receive an email of your verification code
              </p>

              <button
                className="btn btn-primary w3-block p-3 mt-4 mb-3 w3-round-large"
                type="button"
              >
                RESET
              </button>
            </div>

            <div className=" w3-block text-center ">
              <b className="navigator" onClick={() => navigate("/")}>
                Go back to Login
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
