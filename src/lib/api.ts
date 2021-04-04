import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3005/",
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

// API endpoint
const API_REGISTER = "auth/register";
