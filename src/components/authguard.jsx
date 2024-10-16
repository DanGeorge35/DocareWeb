import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Authguard = ({ element: Component, ...rest }) => {
  const location = useLocation();

  // Check local storage for language and login status
  const languageSelected = localStorage.getItem("languageSelected");
  const loggedIn = localStorage.getItem("loggedIn");

  // Determine the redirection path
  if (!languageSelected) {
    return <Navigate to="/language" state={{ from: location }} />;
  } else if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Component {...rest} />;
};
export default Authguard;
