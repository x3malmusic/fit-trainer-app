import axios from "axios";
import {getToken} from "./token";

const http = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 4000,
  withCredentials: true,
});


http.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${getToken()}`
  return config
  }
)

export default http;