import type { NextApiRequest, NextApiResponse } from 'next';

import { getTopRatedTv } from '@/app/server/tv/topRatedTv';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not found' });
  }

  const TopRatedTv = await getTopRatedTv();
  res.status(200).json({ message: TopRatedTv });
}
