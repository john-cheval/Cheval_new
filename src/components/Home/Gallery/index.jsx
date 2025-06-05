import isVideo from "@/app/lib/checkVideo";
import chunkAlternating from "@/app/lib/chunkAlternate";
import { galleryData } from "@/app/lib/swiperData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  const rows = chunkAlternating(galleryData);
  return (
    <section className="pt-36 container-main bg-white">
      <div className="grid grid-cols-12">
        <h5 className="text-[#101763] font-satoshi text-[40px] font-medium leading-[120%] col-span-10">
          We engineer new-age solutions and transform legacy systems with
          cutting-edge technologies to future-proof your business.
        </h5>
        <div className="col-span-2 flex items-center ml-auto">
          <Link
            href="/"
            className="py-3 px-14 text-[#fff] text-base leading-[176%] bg-[#d81100] h-fit  w-fit"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="space-y-6 pt-10">
        {rows?.map((row, index) => {
          const column = row.length;
          return (
            <div
              key={index}
              className={`grid gap-6 ${
                column === 2 ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              {row?.map((item, idx) => {
                return (
                  <div key={idx + 1} className="relative">
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
                        className={`py-12 h-full pl-14 pr-9  border-[#D9D9D9] relative- ${
                          item?.isBg
                            ? "bg-[#101763]"
                            : column === 2
                            ? "bg-[#F0F0F0]"
                            : "bg-white border"
                        }`}
                      >
                        <div className="space-y-14 ">
                          <h6
                            className={`${
                              item?.isBg ? "text-white" : "text-black"
                            } text-2xl font-satoshi font-medium`}
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
                              className="absolute -top-5 right-5"
                            >
                              <Image
                                src={"/Home/NewHome/arrow_outward.svg"}
                                width={48}
                                height={48}
                                className="w-full h-auto object-cover"
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
                  </div>
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
