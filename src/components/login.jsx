import React from "react";
import { Translate } from "@mui/icons-material";

const Login = () => {
  return (
    <div className="screen bg-light-color w3-display-container">
      <div className="w3-display-middle w-100 container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 text-center">
            <b className="text-center mb-4 pb-4 w3-block h3 bold">
              Docare Login
            </b>
            <label className="text-center header pb-5 w3-block mb-5">
              Select Your Language
            </label>
            <Translate sx={{ fontSize: 40 }} className="text-primary" />
            <div className="text-center p-3">
              <button
                className="btn btn-primary w3-block mb-3 w3-round-large"
                type="button"
              >
                English
              </button>
              <button
                className="btn btn-primary w3-block mb-3 w3-round-large"
                type="button"
              >
                Hausa
              </button>
              <button
                className="btn btn-primary w3-block mb-3 w3-round-large"
                type="button"
              >
                Igbo
              </button>
              <button
                className="btn btn-primary w3-block mb-3 w3-round-large"
                type="button"
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

export default Login;
