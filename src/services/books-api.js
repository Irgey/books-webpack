import { MAX_RESULTS } from 'constants';
import { instance } from './api';

export const searchByQuery = async query => {
  const { data } = await instance.get('/', {
    params: {
      q: query,
      langRestrict: 'en',
      maxResults: MAX_RESULTS,
    },
  });
  return data;
};
export const getFullInfoById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};
