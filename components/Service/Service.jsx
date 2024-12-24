"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import ServiceCard from "./ServiceCard";
import "./styles.css";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Service = () => {
  return (
    <section className="bg-gradient-to-b from-slate-700 to-slate-600 px-10 text-center">
      <h2 className="py-10 text-[2rem] font-bold uppercase text-white">
        Our Services
      </h2>
      {/* Swiper Slider */}
      <div className="mx-auto w-3/4 py-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[15rem]"
        >
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
