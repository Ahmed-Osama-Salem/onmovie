import ApiClient from '@/app/utils/ApiClient';

import { key } from './getMoviesList';

export const getSingleMovie = async (
  id: string | number | undefined | string[]
) => {
  return ApiClient.get(`/movie/${id}${key}`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};
