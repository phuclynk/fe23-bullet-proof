import { URL_API } from "Api";
import { API } from "./constants.api";

export const AuthAPI = {
  login: (data) => API.post(`${URL_API}/auth/login`,data),
  register: (data) => API.post(`${URL_API}/auth/register`,data),
}
// Cach sai
// export const AuthAPI = {
//   login: (data) => API.post('localhost:3000/auth/login',data),
//   register: (data) => API.post('localhost:3000/auth/register',data),
// }