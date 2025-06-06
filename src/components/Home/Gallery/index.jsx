import isVideo from "@/app/lib/checkVideo";
import chunkAlternating from "@/app/lib/chunkAlternate";
import { galleryData } from "@/app/lib/swiperData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

const Gallery = () => {
  const rows = chunkAlternating(galleryData);
  return (
    <section className=" pt-10 md:pt-14 lg:pt-20 xl:pt-28  2xl:pt-36 container-main bg-white">
      <div className="grid grid-cols-12 gap-x-5">
        <motion.h5
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="main-heading-2 col-span-12 lg:col-span-10 text-center lg:text-left"
        >
          We engineer new-age solutions and transform legacy systems with
          cutting-edge technologies to future-proof your business.
        </motion.h5>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="col-span-2  items-center ml-auto hidden lg:flex"
        >
          <Link
            href="/"
            className="py-3 px-14 text-[#fff] text-base leading-[176%] bg-[#d81100] h-fit  w-fit"
          >
            View All
          </Link>
        </motion.div>
      </div>

      <div className="space-y-6 pt-10">
        {rows?.map((row, index) => {
          const column = row.length;
          return (
            <div
              key={index}
              className={`grid gap-6 ${
                column === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {row?.map((item, idx) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: idx * 0.2,
                    }}
                    key={idx + 1}
                    className="relative"
                  >
                    {item?.imageUrl ? (
                      <div>
                        {isVideo(item?.imageUrl) ? (
                          <div className="">
                            <video
                              src={item?.imageUrl}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-auto- h-[308px] object-cover "
                            />
                          </div>
                        ) : (
                          <div>
                            <Image
                              src={item?.imageUrl}
                              alt={item?.title || "image"}
                              width={300}
                              height={100}
                              sizes="100vw"
                              unoptimized={
                                process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED ===
                                "true"
                              }
                              className="w-full h-auto object-cover- max-h-[308px]"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div
                        className={`py-7 md:py-12 h-full px-7 md:px-10 lg:pl-14 lg:pr-9  border-[#D9D9D9] relative- ${
                          item?.isBg
                            ? "bg-[#101763]"
                            : column === 2
                            ? "bg-[#F0F0F0]"
                            : "bg-white border"
                        }`}
                      >
                        <div className="space-y-6 md:space-y-10 lg:space-y-14 ">
                          <h6
                            className={`${
                              item?.isBg ? "text-white" : "text-black"
                            } text-xl md:text-2xl font-satoshi font-medium`}
                          >
                            {item?.title}
                          </h6>
                          <p
                            className={`${
                              item?.isBg ? "text-white" : "text-black"
                            } text-base font-satoshi font-normal leading-[187%]`}
                          >
                            {item?.description}
                          </p>

                          {item?.link && (
                            <Link
                              href={"/"}
                              className="absolute top-0 md:-top-5 right-5"
                            >
                              <Image
                                src={"/Home/NewHome/arrow_outward.svg"}
                                width={48}
                                height={48}
                                className="w-full h-auto max-w-8 md:max-w-full object-cover"
                                unoptimized={
                                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED ===
                                  "true"
                                }
                              />
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
