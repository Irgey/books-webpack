import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = "AIzaSyC39PA06hIM4P6RXk4tFDzFihjHVUO8cNw";

export const searchByQuery = async (query) => {
  const queryParams = query.trim().split(" ").join("+");
  const { data } = await axios.get(
    `${BASE_URL}/?q=${queryParams}&langRestrict=en&key=${API_KEY}`
  );
  return data;
};
export const getFullInfoById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`);
  return data;
};
