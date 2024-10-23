import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Authguard = ({ children }) => {
  const location = useLocation();

  // Check local storage for login status
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  // Redirect if not logged in
  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Render the protected component
  return children;
};

export default Authguard;
