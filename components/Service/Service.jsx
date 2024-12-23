"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./ServiceCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./service.css";

// Import required modules
import { Pagination } from "swiper/modules";

const Service = () => {
  return (
    <section className="px-10 text-center bg-gradient-to-b from-slate-700 to-slate-600">
      <h2 className="text-[2rem] font-bold uppercase text-white py-10">
        Our Services
      </h2>
      {/* Swiper Slider */}
      <div className="py-20 w-3/4 mx-auto">
       <Swiper
  slidesPerView={3}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper"
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
</Swiper>

      </div>
    </section>
  );
};

export default Service;
