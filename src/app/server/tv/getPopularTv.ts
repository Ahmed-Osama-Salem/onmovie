import ApiClient from '@/app/utils/ApiClient';

export const getPopularTv = async () => {
  return ApiClient.get(`tv/popular`, {
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
