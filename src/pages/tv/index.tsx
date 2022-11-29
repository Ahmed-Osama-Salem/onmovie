import { motion } from 'framer-motion';
import { useState } from 'react';

import ApiClientLocal from '@/app/utils/ApiClientLocal';
import TvPopular from '@/ui/component/tv/TvPopular';
import TvTopRated from '@/ui/component/tv/TvTopRated';

const Tv = ({ TopRatedData, popularTvData }: any) => {
  const [toggleTv, setToggleTv] = useState('topRated');

  console.log(popularTvData);
  return (
    <div>
      <article className="  w-[100%] bg-[#110e14] p-8">
        <div className="mx-auto flex w-full justify-center gap-[23rem] px-5">
          <h2
            className="mb-4 text-3xl text-white "
            onClick={() => {
              setToggleTv('topRated');
            }}
          >
            Top rated
          </h2>
          <h2 className="mb-4 text-3xl text-white ">Latest</h2>
          <h2
            className="mb-4 text-3xl text-white "
            onClick={() => {
              setToggleTv('popular');
            }}
          >
            Popular
          </h2>
        </div>
        {toggleTv === 'topRated' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TvTopRated TopRatedData={TopRatedData} />
          </motion.div>
        ) : null}

        {toggleTv === 'popular' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TvPopular popularTvData={popularTvData} />
          </motion.div>
        ) : null}
      </article>
    </div>
  );
};
export default Tv;
export async function getServerSideProps() {
  const TopRatedData = await ApiClientLocal.get('api/tv/toprated')
    .then((data) => {
      return data.data.message.results;
    })
    .catch((error) => {
      return error;
    });

  const popularTvData = await ApiClientLocal.get('api/tv/popular')
    .then((data) => {
      return data.data.message.results;
    })
    .catch((error) => {
      return error;
    });

  return {
    props: { TopRatedData, popularTvData },
  };
}
