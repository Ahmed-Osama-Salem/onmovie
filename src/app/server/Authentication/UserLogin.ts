import ApiClient from '@/app/utils/ApiClient';

interface IUserLogin {
  username: string;
  password: string;
  request_token: string;
}
const userLogin = async ({ username, password, request_token }: IUserLogin) => {
  console.log({ username, password, request_token }, 'FROM HERE-----');

  return ApiClient.post(
    '/authentication/token/validate_with_login',
    { username, password, request_token },
    {
      params: {
        api_key: process.env.API_KEY,
      },
    }
  )
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};

export default userLogin;
