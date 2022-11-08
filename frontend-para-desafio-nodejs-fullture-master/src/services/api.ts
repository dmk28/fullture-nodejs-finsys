import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_PUBLIC_URL}`,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
  }
});
