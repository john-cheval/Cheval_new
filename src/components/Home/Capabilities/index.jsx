import { capabilitiesData } from "@/app/lib/swiperData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

const Capabilities = () => {
  return (
    <section className="container-main pt-16 bg-white">
      <div className="grid grid-cols-12 gap-x-16">
        <div
          className="col-span-5 mb-auto "
          style={{
            position: "sticky",
            top: "100px",
            alignSelf: "start",
          }}
        >
          <video
            src="/Home/NewHome/4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full   object-contain "
          />
        </div>
        <div className="col-span-7">
          <motion.h5
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-satoshi text-[40px] text-[#101763] font-medium leading-[120%] mb-9"
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
                  className="grid grid-cols-12 k-- border-t border-t-[#C9C9C9] py-6"
                >
                  <div className="col-span-10 space-y-3">
                    <h5 className="font-satoshi text-2xl font-medium capabilities-text w-fit">
                      {data?.title}
                    </h5>
                    <p className="font-satoshi text-[#9a9a9a] text-base leading-[176%]">
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
