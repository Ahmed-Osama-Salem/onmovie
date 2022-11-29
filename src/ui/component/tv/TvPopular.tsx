import type { Key } from 'react';

import { imagePath } from '@/app/server/movies/getMoviesList';

const TvPopular = ({ popularTvData }: any) => {
  return (
    <div className="grid grid-cols-2 gap-[40px]">
      {popularTvData.map((tv: any, i: Key | null | undefined) => {
        return (
          <div
            key={i}
            className="flex  flex-col items-center rounded-xl border-none bg-gray-300 shadow-md outline-none transition-all duration-300 hover:-translate-y-[10px]  hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={imagePath + tv.poster_path}
              alt=""
            />
            <div className="flex flex-col justify-start w-full h-full p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {tv.name}
              </h5>
              <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                {tv.overview}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TvPopular;
