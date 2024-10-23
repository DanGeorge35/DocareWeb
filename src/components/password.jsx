import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPassword } from "../services/auth"; // Import verifyAccount service

const PasswordSetup = () => {
  const navigate = useNavigate();
  const User = JSON.parse(localStorage.getItem("user"));

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!password || !confirmPassword) {
      handleError("Please enter and confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      handleError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await createPassword({
        Email: User.Account.Email,
        Password: password,
        ConfirmPassword: confirmPassword,
        Token: User.Account.Token,
      });

      if (response.success) {
        setSuccess(response.message);
        handleError("");
        localStorage.setItem("user", JSON.stringify(response.data));
        setTimeout(() => {
          navigate(0);
        }, 3000);
      } else {
        handleError(response.message || "Unable to create password.");
        setSuccess("");
      }
    } catch (err) {
      handleError("Unable to create password. Please try again.");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  const handleError = (err) => {
    setError(err);
    setTimeout(() => {
      setError("");
    }, 4000);
  };

  return (
    <div className="bg-info container0">
      <div className="row">
        <div className="col-xl-6 p-0 d-none d-lg-none d-xl-block medical_banner">
          <div className="medical_cover"></div>
        </div>
        <div className="col-xl-6 text-center login_bg screen w3-display-container">
          <div className="w3-display-middle w-100 container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                <div className="text-white">
                  <b className="text-large">
                    Hello, {User.Account.FirstName} {User.Account.LastName}
                  </b>
                </div>
                <div className="text-black mt-5">
                  <b className="text-small">CREATE YOUR PASSWORD</b>
                </div>
                <div className="text-center px-4 mt-2">
                  {error && <div className="alert alert-danger">{error}</div>}
                  {success && (
                    <div className="alert alert-success">{success}</div>
                  )}
                  <div className="row mt-4">
                    <div className="col-12">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-12 potp">
                      <button
                        className="btn btn-primary text-small w3-block mt-4 mb-3 w3-round-large"
                        type="button"
                        onClick={handleCreate}
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "CREATE PASSWORD"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w3-block text-left navigator-footer mt-3">
                  <b>PLEASE NOTE</b>
                  <p className="text-small text-left">
                    A secure password should be at least{" "}
                    <b>8 characters long</b>.<br />
                    <b>Mix of Characters:</b> Include a combination of:
                    <br />
                    <ul>
                      <li>Uppercase letters (A-Z)</li>
                      <li>Lowercase letters (a-z)</li>
                      <li>Numbers (0-9)</li>
                      <li>Special symbols (e.g., !, @, #, $, %)</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSetup;
