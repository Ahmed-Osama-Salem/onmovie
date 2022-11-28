import { setCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

import createRequestToken from '@/app/server/Authentication/CreateRequestToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res
      .status(403)
      .json({ message: `${req.method} method not support` });
  }
  const requestToken = await createRequestToken();
  // save requestToken in the cookies
  setCookie('requestToken', requestToken.request_token, { req, res });

  return res.status(200).json({ ...requestToken });
}
