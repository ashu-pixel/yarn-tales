import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const PARSER = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
const TOKEN =  PARSER  ? PARSER.currentUser?.accessToken  : "" ;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
