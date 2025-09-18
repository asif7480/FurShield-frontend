import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: "https://fur-shield-backend-sage.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

export default axiosInstance;
