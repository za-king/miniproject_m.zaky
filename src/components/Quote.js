import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Quote() {
  return (
    <div className="w-full h-[350px] bg-gray-900 text-white">
      <div className="text-center pt-12">
        <h1 className="font-bold text-4xl">Quote</h1>
      </div>

      <div className="py-12 mx-24 bg-white my-12 rounded">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="text-center text-black font-bold text-2xl">“Being a student is easy. Learning requires actual work.”</SwiperSlide>
          <SwiperSlide className="text-center text-black font-bold text-2xl">“Education without application is just entertainment.”</SwiperSlide>
          <SwiperSlide className="text-center text-black font-bold text-2xl">“Keberhasilan bukanlah milik orang yang pintar. Keberhasilan adalah kepunyaan mereka yang senantiasa berusaha.”</SwiperSlide>
          <SwiperSlide className="text-center text-black font-bold text-2xl">“Sebaik-baiknya manusia, adalah manusia yang bermanfaat bagi orang lain.”</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Quote;
