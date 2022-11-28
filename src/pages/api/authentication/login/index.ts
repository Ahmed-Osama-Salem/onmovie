import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

import userLogin from '@/app/server/Authentication/UserLogin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(403)
      .json({ message: `${req.method} method not support` });
  }

  const requestToken = getCookie('requestToken', { req, res });
  const { username, password } = req.body;
  // const userLoginValues = {
  //   username,
  //   password,
  //   request_token: requestToken,
  // };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const request_token = requestToken;
  if (
    request_token === undefined ||
    request_token === null ||
    typeof request_token === 'boolean'
  ) {
    return res.status(404).json({ message: 'cookie not found' });
  }
  const login = await userLogin({ username, password, request_token });
  return res.status(200).json({ login });
}
