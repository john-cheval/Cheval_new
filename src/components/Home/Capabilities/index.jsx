import { capabilitiesData } from "@/app/lib/swiperData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

const Capabilities = () => {
  return (
    <section className="container-main pt-12 lg:pt-16 bg-white">
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 lg:gap-x-12 xl:gap-x-16">
        <div className="col-span-12 left-side md:col-span-5 mb-auto ">
          <video
            src="/Home/NewHome/4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full   object-contain "
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <motion.h5
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="main-heading-2 mb-6 lg:mb-9 text-center md:text-left"
          >
            Generative AI Capabilities
          </motion.h5>
          <div>
            {capabilitiesData?.map((data, index) => {
              return (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  key={index}
                  className="grid grid-cols-12  border-t border-t-[#C9C9C9] py-4 lg:py-6"
                >
                  <div className="col-span-10 space-y-3">
                    <h5 className="font-satoshi text-xl md:text-2xl font-medium capabilities-text w-fit">
                      {data?.title}
                    </h5>
                    <p className="font-satoshi text-[#9a9a9a] text-sm md:text-base leading-[176%]">
                      {data?.description}
                    </p>
                  </div>

                  <div className="flex col-span-2 items-center ml-auto w-fit">
                    <Link
                      href="/"
                      className="border  border-[#c9c9c9] p-3 h-fit font-light"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
