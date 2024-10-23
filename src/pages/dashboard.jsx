import React, { useState, useEffect } from "react";
import { Dashboard as DashboardIcon } from "@mui/icons-material";

const UserDashboard = () => {
  const User = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (User) {
      // You can fetch or set the user details and token details here
      setUserDetails(User);
    } else {
      setError("User not found");
    }
  }, [User]);

  return (
    <div className="screen bg-light-color w3-display-container">
      <div className="w3-display-middle w-100 container text-center">
        <DashboardIcon fontSize="large" />
        <h2>Welcome to {User.FirstName} Dashboard</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">Success message</p>}
        {/* Additional content related to user details or dashboard can be added here */}
      </div>
    </div>
  );
};

export default UserDashboard;
