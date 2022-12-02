import ApiClient from '@/app/utils/ApiClient';

export const getSingleMovie = async (
  id: string | number | undefined | string[]
) => {
  return ApiClient.get(`/movie/${id}`, {
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
