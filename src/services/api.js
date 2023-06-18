import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});
