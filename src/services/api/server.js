import axios from "axios";

const server = (header = "") => {
  return axios.create({
    baseURL: "https://docare.posaccountant.com/api/v1",
    headers: {
      "Content-Type": "application/json",
      header,
    },
    validateStatus: function (status) {
      // Resolve only if the status code is in the range 200–499
      // This prevents it from entering the catch block for 4xx responses
      return status >= 200 && status < 500;
    },
  });
};

export default server;
