import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://doctor-server-green.vercel.app",
});

// Automatically attach token to each request if available
axiosPublic.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
