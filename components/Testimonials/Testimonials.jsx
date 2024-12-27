"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { TestimonialData } from "./TestimonialsData";
const Testimonials = () => {
  return (
    <section className="bg-slate-700 p-10">
      <div className="mb-5 text-center">
        <h2 className="font-jost text-[2rem] font-bold text-white">
          Testimonials
        </h2>
        <p className="text-sm font-semibold">
          <span className="font-jost uppercase text-blue-700">what </span>
          <span className="font-caveat text-2xl text-white">Customers Say</span>
        </p>
      </div>
      {/* slider container */}
      <div className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[28rem]"
        >
          {TestimonialData.map((item) => (
            <SwiperSlide>
              <TestimonialCard
                clientName={item.name}
                key={item.id}
                desc={item.desc}
                roll={item.roll}
                img={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
