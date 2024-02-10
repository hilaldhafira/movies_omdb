import axios from "axios";
import { API_KEY, API_URL } from "../constant/apiConstant";

const api = `${API_URL}`;

export const doGet = ({ params }) => {
    console.log(params)
  const url = api;
  const method = "GET";
  const request = { url, method, params: { apikey: API_KEY, ...params } };
  console.log(request)
  return axios(request);
};
