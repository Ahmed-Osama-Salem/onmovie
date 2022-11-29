import type { GetServerSidePropsContext } from 'next';

import { imagePath } from '@/app/server/movies/getMoviesList';
import ApiClientLocal from '@/app/utils/ApiClientLocal';

const SingleMovieDetails = ({ movieDetail }: { movieDetail: any }) => {
  console.log(movieDetail);

  return (
    <div className="h-screen text-white bg-black">
      <img
        src={imagePath + movieDetail.poster_path}
        alt=""
        className="w-[250px]"
      />
      <h2>{movieDetail.original_title}</h2>
      <p>{movieDetail.tagline}</p>
      <p>{movieDetail.status}</p>
    </div>
  );
};
export default SingleMovieDetails;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const movieDetail = await ApiClientLocal.get(`api/movies/${id}`)
    .then((data) => {
      return data.data.message;
    })
    .catch((error) => {
      return error;
    });

  return {
    props: {
      movieDetail,
    },
  };
}
