import React from "react";

const ForgetPassword = () => {
  return (
    <div className="screen bg-light w3-display-container">
      <div className="w3-display-middle w-100 container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 ">

            
                <h5 className="text-right"> 
                  Enter your Email Address to reset your password 
                </h5>
                <p> A 4-digit code will be sent to your designated email</p>
            
         
            <div className="text-center p-3">
              <input
                type="email"
                className="form-control  mt-3 p-3 text-medium"
                placeholder="Enter Email Address"
              />
              
              <p className="fs-6 mt-4" style={{fontSize:"20px"}}> A You will receive an email of your verification code</p>

              <button
                className="btn btn-primary w3-block mt-4 mb-3 w3-round-large"
                type="button"
              >
                Get Code
              </button>

              <label className="text-center header pb-2 w3-block mb-5">
                  Don't have an Account? <a href="/" className="fw-bold" >Create now </a>
                </label>

            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
