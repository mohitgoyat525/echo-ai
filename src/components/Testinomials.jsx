import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { TESTINOMIALS_LIST } from '../utils/helper';
const Testinomials = () => {
  return (
    <div>
      <h2>Testinomials</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {TESTINOMIALS_LIST.map((obj, i) => (
            <SwiperSlide key={i}>
                <div className='w-full max-w-[364px] slider-bg-color'>
                    <div className='pt-6 px-6'>
                        <h3 className='text-white text-2xl font-medium leading-[28.8px]'>{obj.heading}</h3>
                        <p className='text-white'></p>
                    </div>
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testinomials