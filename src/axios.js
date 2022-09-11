import axios from "axios";
import store from "./store";

const axiosClient = axios.create({
  baseURL: "http://localhost/cciwebsite/public/api/",
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer";
  return config;
});

export default axiosClient;
