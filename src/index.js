import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// App Styling
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";

// Custom Styling
import "./style/w3.css";
import "./style/index.scss";
import "./style/small-screen.scss";
import "./style/medium-screen.scss";
import "./style/large-screen.scss";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
