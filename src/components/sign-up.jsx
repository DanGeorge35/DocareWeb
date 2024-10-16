import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  // State for input fields
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Function to handle sign up
  const handleSignUp = async () => {
    try {
      const response = await axios.post("YOUR_SERVER_URL/api/signup", {
        firstname,
        lastname,
        email,
      });

      // If the request is successful
      if (response.status === 200) {
        setSuccess("Account created successfully. Please check your email.");
        setError("");
      }
    } catch (err) {
      // Handle errors
      setError("Unable to create account. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="bg-info container0">
      <div className="row">
        <div className="col-xl-6 p-0 d-none d-lg-block">
          <div className="medical_banner"></div>
        </div>
        <div className="col-xl-6 text-center login_bg screen w3-display-container">
          <div className="w3-display-middle w-100 container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
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
                  {error && <div className="alert alert-danger">{error}</div>}{" "}
                  {/* Error message */}
                  {success && (
                    <div className="alert alert-success">{success}</div>
                  )}{" "}
                  {/* Success message */}
                  <div className="px-1 pb-3 w3-block">
                    <b className="w3-left text-light">Firstname</b>
                  </div>
                  <input
                    type="text"
                    className="form-control mt-3 text-medium"
                    placeholder="Enter your Firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} // Update firstname state
                  />
                  <div className="px-1 pb-3 mt-3 w3-block">
                    <b className="w3-left text-light">Lastname</b>
                  </div>
                  <input
                    type="text"
                    className="form-control mt-3 text-medium"
                    placeholder="Enter your Lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)} // Update lastname state
                  />
                  <div className="px-1 pb-3 w3-block mt-3">
                    <b className="w3-left text-light">Email Address</b>
                  </div>
                  <input
                    type="email"
                    className="form-control mt-3 text-medium"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                  />
                  <button
                    className="btn btn-primary w3-block mt-5 mb-3 w3-round-large"
                    type="button"
                    onClick={handleSignUp} // Call handleSignUp on button click
                  >
                    SIGN UP
                  </button>
                </div>

                <div
                  className="w3-block text-center navigator-footer"
                  onClick={() => navigate("/")}
                >
                  <span className="navigator">
                    Already have an account?
                    <b className="px-2">Login Here</b>
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
