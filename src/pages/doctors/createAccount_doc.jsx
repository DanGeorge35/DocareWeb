import React from "react";

const CreateAccount_Doc = () => {
  return (
    <div className="screen bg-light w3-display-container">
      <div className="w3-display-middle w-100 container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-right">

           
            <b className="text-right  pt-5  w3-block h5 bold">
              Personal Information
            </b>

            <div className="text-center p-3">
              <input
                type="text" name="txtFname"
                className="form-control  mt-2 p-3 text-medium"
                placeholder="Enter First Name"
              />

              <input
                type="text" name="txtLname"
                className="form-control  mt-2 p-3 text-medium "
                placeholder="Enter Last Name"
              />

              <input
                type="email" name="txtEmail"
                className="form-control  mt-2 p-3 text-medium "
                placeholder="Enter Email Address"
              />

                <input
                type="text" name="txtAddress"
                className="form-control  mt-2 p-3 text-medium "
                placeholder="Enter Residential Address"
              />

            <input
                type="text" name="txtSpecial"
                className="form-control  mt-2 p-3 text-medium "
                placeholder="Enter specialisation"
              />

            <input
                type="text" name="txtSpecial"
                className="form-control  mt-2 p-3 text-medium "
                placeholder="Enter Practising Tenure"
              />

            <input
                type="dob" name="txtDob"
                className="form-control  mt-2 p-3 text-medium "
                placeholder="Enter Your Date Of Birth"
              />

                
             <div className="mb-3 password-container">
                
                <input type="password" className="form-control" />
                <span className="toggle-password">
                    <i className="bi bi-eye-slash" ></i>
                </span>
            </div>
             

              <button
                className="btn btn-primary w3-block mt-4 mb-3 w3-round-large"
                type="button">
                 Create Account
              </button>

            </div>

                
            </div>
      

         
         
          <img src="assets/doctorsteam.png" alt="team" style={{postion:"absolute"}}/>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount_Doc;
