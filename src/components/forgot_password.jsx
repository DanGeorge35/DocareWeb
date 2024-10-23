import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../services/auth"; // Import resetPassword service

const ForgotPassword = () => {
  const navigate = useNavigate();

  // State for email input
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // To manage loading state

  // Function to handle password reset
  const handleReset = async () => {
    // Basic email validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true); // Set loading to true when starting the request
      const response = await resetPassword({ Email: email }); // Use resetPassword service

      // If the request is successful
      if (response.success === true) {
        setSuccess(response.message);
        setError("");
        localStorage.setItem("user", JSON.stringify({ Email: email }));
        setSuccess("Successfully. Please check your email.");
        handlleError("");
        navigate("/verify");
      } else {
        setError(response.message || "Unable to send password reset email.");
        setSuccess("");
      }
    } catch (err) {
      // Handle errors
      setError("Unable to send password reset email. Please try again.");
      setSuccess("");
    } finally {
      setLoading(false); // Stop loading after the request is done
    }
  };

  function handlleError(err) {
    setError(err);
    setTimeout(() => {
      setError("");
    }, 4000);
  }

  return (
    <div className="bg-info container0">
      <div className="row">
        <div className="col-xl-6 p-0 d-none d-lg-none d-xl-block medical_banner">
          <div className=" medical_cover"></div>
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
                    className="form-control mt-3 "
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                  />
                  <button
                    className="btn btn-primary w3-block mt-4 mb-3 w3-round-large"
                    type="button"
                    onClick={handleReset} // Call handleReset on button click
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? "Sending..." : "RESET"}
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
