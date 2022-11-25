import type { NextApiRequest, NextApiResponse } from 'next';

import { getSingleMovie } from '@/app/server/movies/getSingleMovie';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not Supported' });
  }

  const { id } = req.query;

  const singleMovie = await getSingleMovie(id);

  res.status(200).json({ message: singleMovie });
}
