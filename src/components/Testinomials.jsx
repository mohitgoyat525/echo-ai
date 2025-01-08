import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { TESTINOMIALS_LIST } from "../utils/helper";
import CustomHeading from "../common/CustomHeading";


const Testinomials = () => {
  return (
    <div
      id="testimonials"
      className="max-w-[1150px] mx-auto p-4 pt-[175px] max-lg:pt-32 max-md:pt-20 max-sm:pt-10"
    >
      <CustomHeading sectionHeading="Testimonials" customClass="pb-10" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {TESTINOMIALS_LIST.map((obj, i) => (
          <SwiperSlide key={i}>
            <div className="w-full min-w-[364px] max-sm:min-w-[320px] slider-bg-color rounded-t-3xl pt-6 px-6 pb-14 max-sm:pb-10">
              <h3 className="text-white text-2xl font-medium leading-[28.8px]">
                {obj.heading}
              </h3>
              <p
                className={`text-white text-base font-normal leading-6 opacity-80 pt-2 max-xl:max-w-none ${
                  i === 1 ? "max-w-[325px]" : "max-w-[316px]"
                }`}
              >
                {obj.description}
              </p>
              <div
                className={`flex items-center gap-2  ${
                  i === 2 ? "mt-6" : i === 5 ? "mt-6" : "mt-[47px]"
                }`}
              >
                <img
                  src={obj.user}
                  alt="user"
                  className="w-[60px] h-[60px] cursor-pointer"
                />
                <div className="flex flex-col">
                  <p className="text-white text-start font-medium text-xl max-sm:text-xl">
                    {obj.useName}
                  </p>
                  <p className="text-white font-medium text-base leading-6 max-sm:text-base">
                    {obj.userDesignation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testinomials;
