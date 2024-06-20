import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // INPUT_REQUIRED {Ensure this matches the backend API URL}
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;