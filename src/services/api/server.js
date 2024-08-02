import axios from "axios";

const server = axios.create({
  baseURL: "https://docare.posaccountant.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default server;
