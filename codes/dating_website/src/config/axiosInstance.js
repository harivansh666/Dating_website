import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vibely-5kiw.onrender.com/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
});
