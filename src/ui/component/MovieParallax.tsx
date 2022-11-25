// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import type { Key } from 'react';
import React from 'react';
// import required modules
import { Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { imagePath } from '@/app/server/movies/getMoviesList';

export default function MovieParallax({ data }: { data: any }) {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="h-[400px] w-[100%]"
      >
        {data.map((mov: any, i: Key) => {
          return (
            <SwiperSlide key={i} className="w-[100%]">
              <img
                src={imagePath + mov.backdrop_path}
                alt=""
                className="w-[100%]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
