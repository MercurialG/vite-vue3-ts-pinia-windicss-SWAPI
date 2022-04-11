import axios from "axios";
export default () => {
  return axios.create({
    baseURL: "https://swapi.dev/api/",
    proxy: false,
    headers: { "Content-Type": "application/json"},
    responseType: 'json',
  });
};