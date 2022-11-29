import { getAllMovies } from '@/app/server/movies/getMoviesList';
import { Meta } from '@/layouts/Meta';
import { NavLayout } from '@/templates/NavLayout';
import MovieSwiper from '@/ui/component/MovieSwiper';

const Index = ({ list }: { list: any }) => {
  return (
    <NavLayout
      meta={
        <Meta
          title="Suiiz Tech Team"
          description="Suiiz Tech Team Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <section className=" relative mx-auto h-screen w-screen justify-end bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <MovieSwiper list={list} />
      </section>
    </NavLayout>
  );
};

export default Index;
export async function getServerSideProps() {
  // const movieList = await ApiClientLocal.get('api/movies')
  //   .then((data) => {
  //     return data.data.message.results;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
  const movieList = await getAllMovies();

  return {
    props: {
      list: movieList,
    },
  };
}
