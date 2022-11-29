import ApiClient from '@/app/utils/ApiClient';

const createRequestToken = async () => {
  return ApiClient.get('/authentication/token/new', {
    params: {
      api_key: process.env.API_KEY,
    },
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};

export default createRequestToken;
