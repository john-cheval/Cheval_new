"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { /* Navigation, */ Autoplay } from "swiper/modules";
import "swiper/css";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { truncateByChars, truncateByWords } from "@/app/lib/truncateByWords";
import Link from "next/link";

const Blogs = ({ blogData }) => {
  const swiperRef = useRef(null);
  const router = useRouter();

  return (
    <div className="h-fit bg-white pb-10   md:pb-14 xl:pb-20 container-main pt-11 relative">
      <h5 className="main-heading-2">Blogs</h5>

      <div className="w-full pt-9 pb-7 md:pb-14">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={2.3}
          spaceBetween={33}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 22,
            },

            600: {
              slidesPerView: 1.3,
              spaceBetween: 22,
            },

            1024: {
              slidesPerView: 2.3,
              spaceBetween: 33,
            },
          }}
          onSlideChange={(swiper) => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            const desktopBar = document.querySelector(".progress-fill-desktop");
            // const mobileBar = document.querySelector(".progress-fill-mobile");

            if (desktopBar) desktopBar.style.width = `${progress * 100}%`;
            // if (mobileBar) mobileBar.style.width = `${progress * 100}%`;
          }}
          onInit={(swiper) => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            const desktopBar = document.querySelector(".progress-fill-desktop");
            // const mobileBar = document.querySelector(".progress-fill-mobile");

            if (desktopBar) desktopBar.style.width = `${progress * 100}%`;
            // if (mobileBar) mobileBar.style.width = `${progress * 100}%`;
          }}
          modules={[Autoplay]}
          className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300 overflow-hidden"
        >
          {blogData?.map((data, index) => {
            const titleText = truncateByChars(data.title.rendered, 40, true);
            const { text: descText, isTruncated: showReadMore } =
              truncateByWords(data.content.rendered, 20, false);
            return (
              <SwiperSlide
                key={index}
                onClick={() => router.push(`/blogs/${data.slug}`)}
              >
                <div>
                  <div>
                    <Image
                      src={data?._embedded["wp:featuredmedia"][0].source_url}
                      alt={data?.type}
                      width={200}
                      height={350}
                      sizes="100vw"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                      className="w-full h-auto object-cover min-h-[300px] max-h-[300px]"
                    />
                  </div>

                  <div className="mt-5 md:mt-8">
                    <p className="font-sora text-lg md:text-xl lg:text-2xl text-left   text-[#000] group-hover:text-[#D81100] transition-all duration-300 leading-relaxed min-h-[50px] md:min-h-[80px] mb-3">
                      {titleText}
                    </p>
                    <p className="text-[#80848d] font-sora text-sm md:text-base leading-[187%] min-h-[120px] md:min-h-full">
                      {descText}
                    </p>
                    <Link
                      href={`/blogs/${data.slug}`}
                      className="text-[#80848d] font-sora text-sm md:text-base leading-[187%] hover:text-[#d81100] transition-colors duration-300"
                    >
                      Read more{" "}
                    </Link>
                  </div>
                </div>

                {/* <div>
                  <Image
                    src={data?._embedded["wp:featuredmedia"][0].source_url}
                    alt={data?.type}
                    width={200}
                    height={350}
                    sizes="100vw"
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                    className="w-full h-auto object-cover max-h-[200px]"
                  />
                  <p className="font-sora text-2xl sm:text-left  text-center text-[#000] group-hover:text-[#D81100] transition-all duration-300 leading-relaxed min-h-[80px]- mt-3">
                    {titleText}
                  </p>
                  <Link
                    href={`/blogs/${data.slug}`}
                    className="text-[#80848d] font-sora text-base leading-[187%] hover:text-[#d81100] transition-colors duration-300"
                  >
                    Read more{" "}
                  </Link>
                </div> */}
              </SwiperSlide>

              //   <SwiperSlide key={index}>
              //     {index % 2 === 0 ? (
              //       // Full-width blog card (1st, 3rd, etc.)
              //       <div
              //         onClick={() => router.push(`/blogs/${data.slug}`)}
              //         className="cursor-pointer"
              //       >
              //         <Image
              //           src={data?._embedded["wp:featuredmedia"][0].source_url}
              //           alt={data?.type}
              //           width={200}
              //           height={350}
              //           sizes="100vw"
              //           unoptimized={
              //             process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
              //           }
              //           className="w-full h-auto object-cover max-h-[300px]"
              //         />
              //         <div className="mt-8">
              //           <p className="font-sora text-2xl text-[#000] mb-3">
              //             {titleText}
              //           </p>
              //           <p className="text-[#80848d] font-sora text-base leading-[187%]">
              //             {descText}
              //           </p>
              //           <Link
              //             href={`/blogs/${data.slug}`}
              //             className="text-[#80848d] font-sora text-base hover:text-[#d81100] transition-colors duration-300"
              //           >
              //             Read more
              //           </Link>
              //         </div>
              //       </div>
              //     ) : (
              //       // Two stacked mini cards (2nd, 4th, etc.)
              //       <div className="flex flex-col gap-6">
              //         {[data, blogData[index + 1]] // current and next item
              //           .filter(Boolean) // avoid undefined
              //           .map((item, idx) => {
              //             const miniTitle = truncateByChars(
              //               item.title.rendered,
              //               40,
              //               true
              //             );
              //             return (
              //               <div
              //                 key={idx}
              //                 onClick={() => router.push(`/blogs/${item.slug}`)}
              //                 className="cursor-pointer"
              //               >
              //                 <Image
              //                   src={
              //                     item?._embedded["wp:featuredmedia"][0]
              //                       .source_url
              //                   }
              //                   alt={item?.type}
              //                   width={200}
              //                   height={200}
              //                   sizes="100vw"
              //                   unoptimized={
              //                     process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED ===
              //                     "true"
              //                   }
              //                   className="w-full h-auto object-cover max-h-[200px]"
              //                 />
              //                 <p className="font-sora text-xl mt-3 text-[#000]">
              //                   {miniTitle}
              //                 </p>
              //                 <Link
              //                   href={`/blogs/${item.slug}`}
              //                   className="text-[#80848d] font-sora text-base hover:text-[#d81100] transition-colors duration-300"
              //                 >
              //                   Read more
              //                 </Link>
              //               </div>
              //             );
              //           })}
              //       </div>
              //     )}
              //   </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="progress block w-full h-[1px] bg-black/[0.2] relative overflow-hidden">
        <div className="progress-fill-desktop absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
      </div>
    </div>
  );
};

export default Blogs;
