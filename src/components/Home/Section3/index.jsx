import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

const SectionThree = () => {
  return (
    <section className="bg-white pb-10  md:pb-14 lg:pb-[74px] container-main  relative overflow-hidden">
      <div className="grid grid-cols-12 relative z-[70]">
        <div className="col-span-12 md:col-span-3" />
        <div className="col-span-12 md:col-span-9 flex flex-col gap-y-5">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="max-w-[723px] main-heading-2 text-center md:text-left pt-10 md:pt-3"
          >
            Lorem Ipsum is simply dummy text of the printing and
          </motion.h2>

          <div className="flex flex-col gap-y-3 md:gap-y-0  md:flex-row md:justify-between md:gap-x-5 lg:gap-x-10 xl:gap-x-16">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="text-[#9a9a9a] font-satoshi text-base font-normal leading-[176%] text-center md:text-left"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              className="text-[#9a9a9a] font-satoshi text-base font-normal leading-[176%] text-center md:text-left"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </motion.p>
          </div>

          <motion.div
            className="mt-2 mx-auto md:mx-0"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="px-8 md:px-12 py-3 bg-[#d81100] text-white font-satoshi text-sm md:text-base leading-[176%] w-fit  border border-[#d81100] hover:bg-transparent hover:text-[#d81100] transition-all duration-300  "
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>

      <div className=" hidden md:block absolute md:-top-[20.5rem] top-0  left-0 md:max-w-[560px]  ">
        {/* <div className="relative h-full"> */}
        <video
          src="/Home/NewHome/3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full  h-full md:h-auto max-h-[350px]- object-cover relative"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-section-1-1 bg-red-500- " /> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default SectionThree;
