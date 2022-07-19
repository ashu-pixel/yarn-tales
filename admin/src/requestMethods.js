import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const localS = JSON.parse(localStorage.getItem("persist:root"))
console.log(localS)
const PARSER = localS ? JSON.parse(localS.user) : null 
console.log(PARSER)

const TOKEN =  PARSER  ? PARSER.currentUser?.accessToken  : "" ;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
