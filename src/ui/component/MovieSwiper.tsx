// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import type { Key } from 'react';
import React, { useLayoutEffect, useRef } from 'react';
// import required modules
import { Controller, EffectCards, Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type SwiperClass from 'swiper/types/swiper-class';

import { imagePath } from '@/app/server/movies/getMoviesList';

export default function MovieSwiper({ list }: { list: any }) {
  const swiper1Ref = useRef<SwiperClass | null>(null);
  const swiper2Ref = useRef<SwiperClass | null>(null);

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null && swiper2Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
      swiper2Ref.current.controller.control = swiper1Ref.current;
    }
  }, []);
  return (
    <div className=" mx-auto flex h-[620px] w-screen flex-row-reverse items-center justify-center gap-[100px] ">
      <Swiper
        onSwiper={(swiper) => {
          if (swiper1Ref !== null) {
            swiper1Ref.current = swiper;
          }
        }}
        style={{
          boxShadow: '0 18px 150px -16px #829FE3 , 0px 20px 20px -18px #682E83',
        }}
        effect={'cards'}
        grabCursor={true}
        modules={[Pagination, Navigation, Controller, EffectCards]}
        // modules={[EffectCards]}
        className=" h-[30rem] w-[20rem] rounded-2xl text-end"
      >
        {list.map((item: any, i: Key) => {
          return (
            <SwiperSlide key={i} className=" rounded-2xl">
              <img src={imagePath + item.poster_path} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => {
          swiper2Ref.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={100}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Controller]}
        className="flex h-screen w-[500px] items-center gap-5 "
      >
        {list.map((items: any, i: Key) => {
          return (
            <SwiperSlide
              key={i}
              className="w-[100px] translate-y-[120px] text-[4.5rem] font-extrabold text-white"
            >
              {items.title}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
