import React from "react";
import { Translate } from "@mui/icons-material";

const LanguageSelection = ({ onLanguageSelect }) => {
  const handleButtonClick = (language) => {
    onLanguageSelect(language);
  };

  return (
    <div className="screen bg-light-color w3-display-container">
      <div className="w3-display-middle w-100 container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 text-center">
            <b className="text-center mb-4 pb-4 w3-block h3 bold">
              Welcome to Docare
            </b>
            <label className="text-center header pb-5 w3-block mb-5">
              Select Your Language
            </label>
            <Translate sx={{ fontSize: 40 }} className="text-primary" />
            <div className="text-center p-3">
              <button
                className="btn btn-primary w3-block mb-3 w3-round-large"
                type="button"
                onClick={() => handleButtonClick("English")}
              >
                English
              </button>
              <button
                className="btn btn-primary w3-block mb-3 w3-round-large"
                type="button"
                onClick={() => handleButtonClick("Hausa")}
              >
                Hausa
              </button>
              <button
                className="btn btn-primary w3-block mb-3 w3-round-large"
                type="button"
                onClick={() => handleButtonClick("Igbo")}
              >
                Igbo
              </button>
              <button
                className="btn btn-primary w3-block mb-3 w3-round-large"
                type="button"
                onClick={() => handleButtonClick("Yoruba")}
              >
                Yoruba
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
