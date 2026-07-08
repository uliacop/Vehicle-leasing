/* import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      navigation
      autoplay={{ delay: 2000 }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/src/img/slider/automobile-2120430_1280.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/img/slider/bmw-1216469_1280.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/img/slider/car-1281640_1280.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/img/slider/suv-7541007_1280.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/img/slider/uaz-8254778_1280.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}; */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/src/img/slider/automobile-2120430_1280.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/img/slider/bmw-1216469_1280.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/img/slider/car-1281640_1280.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/img/slider/uaz-8254778_1280.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/img/slider/suv-7541007_1280.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};
