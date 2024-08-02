/* eslint-disable no-undef */
import React from "react";
import LanguageSelection from "../components/langselection";
import Login from "../components/login";

const Home = () => {
  const languageSelected = localStorage.getItem("languageSelected");
  const loggedIn = localStorage.getItem("loggedIn");

  if (!languageSelected) {
    return <LanguageSelection />;
  }
  console.log(1);

  if (!loggedIn) {
    return <Login />;
  }
};

export default Home;
