import ApiClient from '@/app/utils/ApiClient';

export const key = '?api_key=0948a6844e69835e86a78fcfbba6cbb6';
export const getAllMovies = async () => {
  return ApiClient.get(`trending/movie/week${key}`)
    .then((data) => {
      return data.data.results;
    })
    .catch((error) => {
      return error;
    });
};

export const imagePath = 'https://image.tmdb.org/t/p/w500/';
