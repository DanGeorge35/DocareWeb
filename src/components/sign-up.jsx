import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-info container0 ">
      <div className="row">
        <div className="col-xl-6 p-0 d-none d-lg-block">
          <div className="medical_banner"></div>
        </div>
        <div className="col-xl-6 text-center  login_bg screen w3-display-container">
          <div className="w3-display-middle w-100 container">
            <div className="row">
              <div className=" col-xl-8  offset-xl-2  col-lg-10  offset-lg-1  ">
                <img
                  src="logo_white.png"
                  className="form-top-logo"
                  alt="logo"
                />
                <h3 className="text-center text-white w3-bold">
                  <b>DOCARE</b>
                </h3>

                <b className="form-title">Create your account</b>

                <div className="text-center p-3">
                  <div className="px-1 pb-3 w3-block">
                    <b className="w3-left text-light">Firstname</b>
                  </div>
                  <input
                    type="text"
                    className="form-control  mt-3  text-medium"
                    placeholder="Enter your Firstname"
                  />
                  <div className="px-1 pb-3 mt-3 w3-block">
                    <b className="w3-left text-light">Lastname</b>
                  </div>
                  <input
                    type="text"
                    className="form-control  mt-3  text-medium"
                    placeholder="Enter your Lastname"
                  />
                  <div className="px-1 pb-3 w3-block  mt-3 ">
                    <b className="w3-left text-light">Email Address</b>
                  </div>
                  <input
                    type="email"
                    className="form-control  mt-3  text-medium"
                    placeholder="Enter your Email"
                  />

                  <button
                    className="btn btn-primary w3-block  mt-5 mb-3 w3-round-large"
                    type="button"
                  >
                    SIGN UP
                  </button>
                </div>

                <div
                  className=" w3-block text-center   navigator-footer"
                  onClick={() => navigate("/")}
                >
                  <span className="navigator">
                    Already have an account?
                    <b className=" px-2">Login Here</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
