import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard as DashboardIcon } from "@mui/icons-material";

const UserDashboard = () => {
  const navigate = useNavigate();
  // Safely parse user data from localStorage
  const User = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const token = localStorage.getItem("token");
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (User && User.Account) {
      // Set user details if available
      setUserDetails(User.Account);
    } else {
      setError("User not found");
    }
  }, [User]);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "fasle");
    navigate("/login");
  };

  return (
    <div className="screen bg-light-color w3-display-container">
      <span
        onClick={handleLogout}
        className="w3-display-topright py-1 px-4 rounded-5 border border-dark m-3 "
        style={{ cursor: "pointer" }}
      >
        Logout
      </span>
      <div className="w3-display-middle w-100 container text-center">
        <DashboardIcon fontSize="large" />
        <h2>
          Welcome to {userDetails.FirstName ? userDetails.FirstName : "the"}{" "}
          Dashboard
        </h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">Success message</p>}
        {/* Additional content related to user details or dashboard can be added here */}
      </div>
    </div>
  );
};

export default UserDashboard;
