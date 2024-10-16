import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();

  // State for email input
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Function to handle password reset
  const handleReset = async () => {
    try {
      const response = await axios.post("YOUR_SERVER_URL/api/forgot-password", {
        email,
      });

      // If the request is successful
      if (response.status === 200) {
        setSuccess("Password reset link has been sent to your email.");
        setError("");
      }
    } catch (err) {
      // Handle errors
      setError("Unable to send password reset email. Please try again.");
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

                <b className="form-title">Forgot your password?</b>

                <div className="text-center p-3">
                  {error && <div className="alert alert-danger">{error}</div>}{" "}
                  {/* Error message */}
                  {success && (
                    <div className="alert alert-success">{success}</div>
                  )}{" "}
                  {/* Success message */}
                  <div className="px-1 pb-3 w3-block">
                    <b className="w3-left text-light">Email Address</b>
                  </div>
                  <input
                    type="email"
                    className="form-control mt-3 text-medium"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                  />
                  <button
                    className="btn btn-primary w3-block mt-4 mb-3 w3-round-large"
                    type="button"
                    onClick={handleReset} // Call handleReset on button click
                  >
                    RESET
                  </button>
                </div>

                <div className="w3-block text-center navigator-footer">
                  <b className="navigator" onClick={() => navigate("/")}>
                    Go back to Login
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
