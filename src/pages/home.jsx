/* eslint-disable no-undef */
import React, { useState } from "react";
import LanguageSelection from "../components/langselection";
import Login from "../components/login";

const Home = () => {
  const [languageSelected, setLanguageSelected] = useState(
    localStorage.getItem("languageSelected")
  );
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));

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

  // Add any additional rendering or functionality here if needed
  return null;
};

export default Home;
