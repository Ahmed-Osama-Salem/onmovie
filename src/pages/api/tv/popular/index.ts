import type { NextApiRequest, NextApiResponse } from 'next';

import { getPopularTv } from '@/app/server/tv/getPopularTv';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not found' });
  }

  const popularTv = await getPopularTv();
  res.status(200).json({ message: popularTv });
}
