import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestate-website-1.onrender.com/api/",
  withCredentials: true,
});

export default apiRequest;

//updated this
