// https://api.themoviedb.org/3/tv/top_rated?api_key=0948a6844e69835e86a78fcfbba6cbb6

import ApiClient from '@/app/utils/ApiClient';

export const getTopRatedTv = async () => {
  return ApiClient.get(`tv/top_rated`, {
    params: {
      api_key: process.env.API_KEY,
    },
  })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};
