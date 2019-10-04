import axios from "axios";

export default axios.create({
  baseURL: process.env.SERVER_DOMAIN || "http://localhost:5000"
});
