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
    <article className="w-full ">
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
            slidesPerView: 1.3,
            spaceBetween: 11,
          },

          1024: {
            slidesPerView: 2.3,
            spaceBetween: 22,
          },
        }}
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
              className="bg-[#1E2028] backdrop-blur-[5.599999904632568px] opacity-[0.93] py-8 md:py-12 px-8 xl:py-16 md:pl-10 md:pr-14 xl:pr-24"
            >
              <div className=" flex gap-x-5 md:gap-x-7 lg:gap-x-12 xl:gap-x-20 ">
                <p className="text-white hidden sm:block text-2xl font-satoshi font-medium">
                  {index > 9 ? "" : "0"}
                  {index + 1}.
                </p>

                <div>
                  <h5 className="text-white text-xl lg:text-2xl font-satoshi font-medium min-h-[60px] lg:min-h-[100px] xl:min-h-[65px] text-center sm:text-left">
                    {data?.title}
                  </h5>
                  <p className="max-w-[380px] font-satoshi text-base leading-[187%] text-[#80848D] mt-5 md:mt-10 text-center sm:text-left">
                    {descText}
                  </p>
                  <Link
                    href={"/"}
                    className="text-sm md:text-base font-satoshi flex items-center gap-x-3 mt-6 group w-fit mx-auto sm:mx-0"
                  >
                    Read more{" "}
                    <span className="bg-[#35373E] h-8 w-8 md:h-12 md:w-12 rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors duration-300 ">
                      <ArrowRight
                        className="text-white group-hover:translate-x-2 transition-transform duration-300"
                        size={16}
                      />
                    </span>
                  </Link>
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
