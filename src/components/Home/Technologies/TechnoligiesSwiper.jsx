"use client";
import React, { useRef } from "react";
import "swiper/css";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { /* Navigation, */ Autoplay } from "swiper/modules";
import { technolgiesData } from "@/app/lib/swiperData";
import Image from "next/image";

const TechnoligiesSwiper = () => {
  const swiperRef = useRef(null);

  return (
    <article className="w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={2.3}
        spaceBetween={22}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },

          600: {
            slidesPerView: 2.3,
            spaceBetween: 11,
          },
          768: {
            slidesPerView: 1.3,
            spaceBetween: 11,
          },
          1280: {
            slidesPerView: 2.3,
            spaceBetween: 22,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300 overflow-hidden"
      >
        {technolgiesData?.map((tech, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex gap-x-4 p-6 lg:p-10 border border-[#D9D9D9]">
                <Image
                  src={tech?.imageUrl}
                  alt={tech?.title}
                  height={50}
                  width={50}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-auto object-cover- max-w-10"
                />

                <div className="space-y-2">
                  <p className="text-black font-satoshi text-xl md:text-2xl font-medium ">
                    {tech?.title}
                  </p>
                  <p className="text-sm md:text-base text-[#80848d] font-satoshi leading-[187%]">
                    {tech?.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};

export default TechnoligiesSwiper;
