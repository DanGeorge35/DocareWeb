import React from "react";

const Verify_code = () => {
  return (
    <div className="screen bg-light w3-display-container">
      <div className="w3-display-middle w-100 container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 ">

            <div className="text-center">
                <h6 className="text-center"> 
                 Enter 6-digit code sent to you via Email 
                </h6>
                <p style={{color:"#0064e0"}}> dangoerge35@gmail.com</p>
            </div>
         
            <div className="text-left p-3">
                <label className="text-left">OTP CODE </label>
              <input
                type="email"
                className="form-control  mt-1 p-3 text-medium"
                placeholder="Enter OTP (000-000)"
              />
              
              <div className="text-center mt-4">
                <p className="fs-6  " style={{fontSize:"20px"}}> 
                Didn't get OTP?
                </p>
                <p style={{color:"#0064e0"}} > Resend OTP in 00:58s </p>
            </div>
              <button
                className="btn btn-primary w3-block mt-4 mb-3 w3-round-large"
                type="button" >
                    
               Verify
              </button>

              

            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify_code;
