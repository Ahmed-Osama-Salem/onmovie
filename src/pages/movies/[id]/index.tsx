import type { GetServerSidePropsContext } from 'next';

import ApiClientLocal from '@/app/utils/ApiClientLocal';

const SingleMovieDetails = ({ movieDetail }: { movieDetail: any }) => {
  console.log(movieDetail);

  return <div>hello {movieDetail.id}</div>;
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
