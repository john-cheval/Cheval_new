"use client";
import React, { useRef } from "react";
import "swiper/css";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { /* Navigation, */ Autoplay } from "swiper/modules";
import { swiperData } from "@/app/lib/swiperData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { truncateByWords } from "@/app/lib/truncateByWords";
const SwiperCards = () => {
  const swiperRef = useRef(null);
  return (
    <article className="w-full pt-12">
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
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1.2,
        //     spaceBetween: 10,
        //   },

        //   600: {
        //     slidesPerView: 2.3,
        //     spaceBetween: 11,
        //   },

        //   1024: {
        //     slidesPerView: 4.3,
        //     spaceBetween: 11,
        //   },

        //   1200: {
        //     slidesPerView: 5,
        //     spaceBetween: 11,
        //   },
        // }}
        modules={[Autoplay]}
        className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300 overflow-hidden"
      >
        {swiperData?.map((data, index) => {
          const { text: descText, isTruncated: showReadMore } = truncateByWords(
            data?.description,
            20,
            false
          );
          return (
            <SwiperSlide
              key={index}
              className="bg-[#1E2028] backdrop-blur-[5.599999904632568px] opacity-[0.93] py-16 pl-10 pr-24"
            >
              <div>
                <div className=" flex gap-x-20 ">
                  <p className="text-white text-2xl font-satoshi font-medium">
                    {index > 9 ? "" : "0"}
                    {index + 1}.
                  </p>

                  <div>
                    <h5 className="text-white text-2xl font-satoshi font-medium min-h-[65px]">
                      {data?.title}
                    </h5>
                    <p className="max-w-[380px] font-satoshi text-base leading-[187%] text-[#80848D] mt-10">
                      {descText}
                    </p>
                    <Link
                      href={"/"}
                      className="text-base font-satoshi flex items-center gap-x-3 mt-6 group w-fit"
                    >
                      Read more{" "}
                      <span className="bg-[#35373E] h-12 w-12 rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors duration-300 ">
                        <ArrowRight
                          className="text-white group-hover:translate-x-2 transition-transform duration-300"
                          size={16}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};

export default SwiperCards;
