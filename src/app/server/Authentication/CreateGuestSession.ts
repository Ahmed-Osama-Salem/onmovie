import ApiClient from '@/app/utils/ApiClient';

const createGuestSession = async () => {
  return ApiClient.get('/authentication/guest_session/new', {
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

export default createGuestSession;
