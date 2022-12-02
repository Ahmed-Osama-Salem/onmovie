// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import type { Key } from 'react';
import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
// import required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { imagePath } from '@/app/server/movies/getMoviesList';

export default function MovieParallax({ data }: { data: any }) {
  SwiperCore.use([Autoplay]);

  return (
    <div className="flex h-full w-[100%] items-center justify-center ">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={20}
        loop
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        modules={[Autoplay]}
        className="h-[30rem] w-[100%]  bg-[#110e14]"
      >
        {data.map((mov: any, i: Key) => {
          return (
            <SwiperSlide
              key={i}
              className=" flex w-full items-center justify-between gap-[200px] "
            >
              {({ isActive }) => (
                <>
                  <img
                    src={imagePath + mov.backdrop_path}
                    alt=""
                    className={
                      isActive
                        ? 'scale-[1.8] rounded-xl opacity-100 shadow-lg shadow-black blur-0 transition-all duration-200 ease-in-out'
                        : 'scale-[1] opacity-20 blur-sm transition-all duration-200 ease-in-out'
                    }
                  />
                  <p
                    className={
                      isActive
                        ? ' text-3xl font-semibold text-white opacity-100'
                        : 'opacity-0'
                    }
                  >
                    {mov.title}
                  </p>
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
