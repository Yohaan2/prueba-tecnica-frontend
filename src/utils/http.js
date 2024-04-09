import axios from "axios";

import { HOST_API } from "./config";

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) =>
    Promise.reject(
      error.response?.data?.message ||
        error.response?.data?.error ||
        error.response?.data?.errors ||
        "Something went wrong",
    ),
);

// axiosInstance.interceptors.request.use((config) => {
//   const token = JSON.parse(localStorage.getItem("auth"));
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default axiosInstance;