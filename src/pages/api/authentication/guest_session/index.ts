import { setCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

import createGuestSession from '@/app/server/Authentication/CreateGuestSession';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res
      .status(403)
      .json({ message: `${req.method} method not support` });
  }
  const guestToken = await createGuestSession();
  // save guestToken in the cookies
  setCookie('guestToken', guestToken.guest_session_id, { req, res });

  return res.status(200).json({ ...guestToken });
}
