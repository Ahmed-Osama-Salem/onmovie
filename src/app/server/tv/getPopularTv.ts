import ApiClient from '@/app/utils/ApiClient';

import { key } from '../movies/getMoviesList';

export const getPopularTv = async () => {
  return ApiClient.get(`tv/popular${key}`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};
