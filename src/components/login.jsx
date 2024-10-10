import React from "react";

const Login = () => {
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
              Login to your account
            </b>

            <div className="text-center p-3">
              <input
                type="email"
                className="form-control  mt-3 p-3 text-medium"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control  mt-3 p-3 text-medium "
                placeholder="Password"
              />

              <button
                className="btn btn-primary w3-block p-3 mt-4 mb-3 w3-round-large"
                type="button"
              >
                LOGIN
              </button>
            </div>
            <label className="text-center header pb-5 w3-block mb-5">
              Select Your Language
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
