import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllMovies } from '@/app/server/movies/getMoviesList';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not found' });
  }

  const allMovies = await getAllMovies();
  res.status(200).json({ message: allMovies });
}
