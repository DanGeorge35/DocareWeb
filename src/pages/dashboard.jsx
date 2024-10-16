/* eslint-disable no-undef */
import React from "react";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const [userDetails, setUserDetails] = React.useState({});
  const [tokenDetails, setTokenDetails] = React.useState({});
  const [error, setError] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  return (
    <div className="screen bg-light-color w3-display-container">
      <div className="w3-display-middle w-100 container">
        <span>DASHBOARD</span>
      </div>
    </div>
  );
};

export default Dashboard;
