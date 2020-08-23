import axios from "axios";

const server = "https://gorest.co.in/public-api";
const token = "e9824362ca01d2eb935f7bf2990ab1a387aa9c67815a8dc53f08b7474ebb7e21";

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

headers.Authorization = `Bearer ${token}`;

export default axios.create({
  baseURL: server,
  headers: headers,
});
