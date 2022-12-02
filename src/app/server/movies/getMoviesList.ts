import ApiClient from '@/app/utils/ApiClient';

export const getAllMovies = async () => {
  return ApiClient.get(`trending/movie/week`, {
    params: {
      api_key: process.env.API_KEY,
    },
  })
    .then((data) => {
      return data.data.results;
    })
    .catch((error) => {
      return error;
    });
};

export const imagePath = 'https://image.tmdb.org/t/p/w500/';
