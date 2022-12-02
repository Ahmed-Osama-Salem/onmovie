import Link from 'next/link';
import type { Key } from 'react';

import { getAllMovies, imagePath } from '@/app/server/movies/getMoviesList';
import MovieParallax from '@/ui/component/MovieParallax';

const movies = ({ list }: { list: any }) => {
  console.log(list);

  return (
    <section className="relative top-0 left-0 w-screen ">
      <MovieParallax data={list} />
      <article className="w-[100%] bg-[#110e14] p-8">
        <h1 className="mb-4 text-3xl text-white ">Movie List</h1>
        <div className="grid w-full grid-cols-3  justify-items-center gap-[80px]">
          {list.map((film: any, i: Key | null | undefined) => {
            return (
              <div key={i} className="group relative overflow-hidden">
                <Link href={`/movies/${film.id}`}>
                  <div className="absolute z-[999] flex h-full  w-full items-center justify-center p-2 transition-all duration-500 group-hover:bg-black/80">
                    <h5 className="translate-y-[300px] text-3xl font-bold tracking-tight text-white opacity-0 transition-all  delay-100 duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">
                      {film.title}
                    </h5>
                  </div>
                </Link>

                <img
                  className="h-[27rem] w-[19rem] rounded-lg object-cover transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-125 group-hover:rounded-lg "
                  src={imagePath + film.poster_path}
                  alt=""
                />
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
  const movieList = await getAllMovies();
  return {
    props: {
      list: movieList,
    },
  };
}
