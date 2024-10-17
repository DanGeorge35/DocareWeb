import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyAccount } from "../services/auth"; // Import resetPassword service

const VerifyAccount = () => {
  const navigate = useNavigate();

  // State for password input
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // To manage loading state

  const handleInputChange = (index, value) => {
    if (value && index < otp.length - 1) {
      document.getElementById("iotp" + (index + 1)).focus();
    }

    // Move focus to the previous input if the input is cleared
    if (!value && index > 0) {
      document.getElementById("iotp" + (index - 1)).focus();
    }
    if (value.length > 1) return; // Ensure single digit input

    // Create a new OTP array and update the specific index
    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);
  };

  const handlePaste = (event) => {
    const pastedData = event.clipboardData.getData("text");

    if (pastedData.length === otp.length) {
      const updatedOtp = pastedData.split("").slice(0, otp.length);
      setOtp(updatedOtp);

      // Move focus to the last field after pasting
      document.getElementById("iotp" + (otp.length - 1)).focus();
    }
  };

  const handleVerify = async () => {
    // if (!password) {
    //   setError("Please enter your password.");
    //   return;
    // }

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      setLoading(true); // Set loading to true when starting the request
      const OtpValues = [...otp].join("");

      const response = await verifyAccount({
        token: `${OtpValues}`,
        email: user.Email,
      }); // Use verifyAccount service
      console.log(response);
      // If the request is successful
      if (response.success === true) {
        setSuccess(response.message);
        setError("");
      } else {
        setError(response.message || "Unable to send password reset password.");
        setSuccess("");
      }
    } catch (err) {
      // Handle errors
      setError("Unable to send password. Please try again.");
      setSuccess("");
    } finally {
      setLoading(false); // Stop loading after the request is done
    }
  };

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
                <div className="text-white ">
                  <b className="text-large"> Welcome to Docare</b>
                </div>
                <div className="text-black mt-5">
                  <b className="text-small">
                    {" "}
                    Enter the OTP sent your Email Address
                  </b>
                </div>
                <div className="text-center px-4 mt-2">
                  {error && (
                    <div key="err" className="alert alert-danger">
                      {error}
                    </div>
                  )}{" "}
                  {/* Error message */}
                  {success && (
                    <div className="alert alert-success" key="succ">
                      {success}
                    </div>
                  )}{" "}
                  {/* Success message */}
                  <div className="row">
                    {otp.map((digit, index) => (
                      <div className="col-2 p-0 potp">
                        <input
                          className="form-control text-center otp mt-3 "
                          key={index}
                          id={"iotp" + index}
                          type="text"
                          maxLength="1"
                          value={digit}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                          onPaste={handlePaste}
                          placeholder="•"
                          maxlength="1"
                          autocomplete="off"
                          inputmode="numeric"
                          pattern="^[a-zA-Z0-9]+$"
                        />
                      </div>
                    ))}
                    <div className="col-12 potp">
                      <button
                        className="btn btn-primary text-small w3-block mt-4 mb-3 w3-round-large"
                        type="button"
                        onClick={handleVerify} // Call handleVerify on button click
                        disabled={loading} // Disable button while loading
                      >
                        {loading ? "Sending..." : "VERIFY"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w3-block text-center navigator-footer mt-3">
                  <b
                    className="navigator text-small"
                    onClick={() => navigate("/")}
                  >
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

export default VerifyAccount;
