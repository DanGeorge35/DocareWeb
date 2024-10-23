/* eslint-disable no-undef */
import React, { useState } from "react";
import LanguageSelection from "../components/langselection";
import Login from "../components/login";
import PasswordSetup from "../components/password";
import UserDashboard from "./dashboard";

const Home = () => {
  const [languageSelected, setLanguageSelected] = useState(
    localStorage.getItem("languageSelected")
  );
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true" ? true : false
  );

  const handleLanguageSelect = (language) => {
    localStorage.setItem("languageSelected", language);
    setLanguageSelected(language);
  };

  if (!languageSelected) {
    return <LanguageSelection onLanguageSelect={handleLanguageSelect} />;
  }

  if (!loggedIn) {
    return <Login />;
  }

  const User = JSON.parse(localStorage.getItem("user"));
  if (User.Status === "Unauth") {
    return <PasswordSetup />;
  }

  return <UserDashboard />;

  // Add any additional rendering or functionality here if needed
};

export default Home;
