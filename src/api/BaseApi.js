import axios from "axios";
const baseUrl = "https://json-server-endpoint.herokuapp.com";

export const getData = (url) => {
  return axios.get(`${baseUrl}/${url}`);
};

export const postData = (url, data) => {
  return axios.post(`${baseUrl}/${url}`, data);
};

export const updateData = (url, data) => {
  return axios.put(`${baseUrl}/${url}`, data);
};

export const deletData = (url) => {
  return axios.delete(`${baseUrl}/${url}`);
};
