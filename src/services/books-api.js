import axios from 'axios';
import { MAX_RESULTS } from 'constants';

export const searchByQuery = async query => {
  const queryParams = query.trim().split(' ').join('+');
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/?q=${queryParams}&langRestrict=en&maxResults=${MAX_RESULTS}&key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};
export const getFullInfoById = async id => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/${id}?key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};
