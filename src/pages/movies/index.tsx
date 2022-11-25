import Link from 'next/link';
import type { Key } from 'react';

import { imagePath } from '@/app/server/movies/getMoviesList';
import ApiClientLocal from '@/app/utils/ApiClientLocal';
import MovieParallax from '@/ui/component/MovieParallax';

const movies = ({ list }: { list: any }) => {
  console.log(list);

  return (
    <section className="relative top-0 left-0 w-screen ">
      <MovieParallax data={list} />
      <article className="  w-[100%] bg-[#110e14] p-8">
        <h1 className="mb-4 text-3xl text-white ">Movie List</h1>
        <div className="grid grid-cols-2 gap-[40px]">
          {list.map((film: any, i: Key | null | undefined) => {
            return (
              <div
                key={i}
                className="flex  flex-col items-center rounded-xl border-none bg-gray-300 shadow-md outline-none transition-all duration-300 hover:-translate-y-[10px]  hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
              >
                <Link href={`/movies/${film.id}`}>
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={imagePath + film.poster_path}
                    alt=""
                  />
                </Link>
                <div className="flex flex-col justify-start w-full h-full p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {film.title}
                  </h5>
                  <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                    {film.overview}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default movies;
export async function getServerSideProps() {
  const movieList = await ApiClientLocal.get('api/movies')
    .then((data) => {
      return data.data.message.results;
    })
    .catch((error) => {
      return error;
    });

  return {
    props: {
      list: movieList,
    },
  };
}
