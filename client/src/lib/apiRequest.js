import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "https://real-estatebackendapi.vercel.app/api/",
  // baseURL: "http://localhost:8800/api/",
  baseURL: "https://realestate-backend-api-9y65.onrender.com/api/",
  withCredentials: true,
});

export default apiRequest;

//updated this
