import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle login
  const handleLogin = async () => {
    try {
      const response = await axios.post("YOUR_SERVER_URL/api/login", {
        email,
        password,
      });

      // If login is successful, redirect the user
      if (response.status === 200) {
        navigate("/dashboard"); // Change the route to your dashboard or home page
      }
    } catch (err) {
      // Handle errors
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className=" bg-info container0">
      <div className="row">
        <div className="col-xl-6 p-0 d-none d-lg-block">
          <div className="medical_banner"></div>
        </div>
        <div className="col-xl-6 login_bg text-center screen w3-display-container">
          <div className="w3-display-middle w-100 container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 ">
                <img
                  src="logo_white.png"
                  className="form-top-logo"
                  alt="logo"
                />
                <h3 className="text-center text-white w3-bold">
                  <b>DOCARE</b>
                </h3>

                <b className="form-title">Login to your account</b>
                <div className="text-center p-3">
                  {error && <div className="alert alert-danger">{error}</div>}{" "}
                  {/* Error message */}
                  <div className="px-1 pb-3 w3-block">
                    <b className="w3-left text-light">Email Address</b>
                  </div>
                  <input
                    type="email"
                    className="form-control mt-3 text-medium"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                  />
                  <div className="px-1 pt-4 pb-3 w3-block">
                    <b className="w3-left text-light">Password</b>
                  </div>
                  <input
                    type="password"
                    className="form-control mt-3 text-medium"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                  />
                  <div className="p-3 w3-block">
                    <b
                      className="w3-right navigator"
                      onClick={() => navigate("/forgetpass")}
                    >
                      Forget Password?
                    </b>
                  </div>
                  <button
                    className="btn btn-primary w3-block mt-4 mb-3 w3-round-large"
                    type="button"
                    onClick={handleLogin} // Call handleLogin on button click
                  >
                    LOGIN
                  </button>
                </div>

                <div
                  className="w3-block text-center navigator-footer"
                  onClick={() => navigate("/signup")}
                >
                  <span className="navigator">
                    Don't have an account?
                    <b className="px-2">Sign Up here</b>
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

export default Login;
