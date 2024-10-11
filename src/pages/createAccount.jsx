import React from "react";

const CreateAccount = () => {
  return (
    <div className="screen bg-light w3-display-container">
      <div className="w3-display-middle w-100 container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">

            <img src="logo2.png" alt="logo22" style={{ height: "80px" }} />
            <h3 className="text-center text-primary w3-bold">
              <b>DOCARE</b>
            </h3>

            {/* <b className="text-center mb-4 pt-5 pb-4 w3-block h5 bold">
              CreateAccount to your account
            </b> */}

         
        <div className="card border-2 rounded-3 ">

            <div className="text-center p-3">
              <input
                type="text"
                className="form-control  mt-3 p-3 text-medium"
                placeholder="Enter First Name"
              />

              <input
                type="text"
                className="form-control  mt-3 p-3 text-medium "
                placeholder="Enter Last Name"
              />

              <input
                type="email"
                className="form-control  mt-3 p-3 text-medium "
                placeholder="Enter Email Address"
              />

                <input
                type="text"
                className="form-control  mt-3 p-3 text-medium "
                placeholder="Enter Phone Number"
              />

                <input
                type="password"
                className="form-control  mt-3 p-3 text-medium "
                placeholder="Enter Password"
              />

             
             

              <button
                className="btn btn-primary w3-block mt-4 mb-3 w3-round-large"
                type="button"
              >
                Submit
              </button>
            </div>

                
            </div>
        </div>

         
         
          <img src="assets/doctorsteam.png" alt="team" style={{postion:"absolute"}}/>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
