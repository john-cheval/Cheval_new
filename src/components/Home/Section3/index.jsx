import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

const SectionThree = () => {
  return (
    <section className="bg-white pb-[74px]  relative overflow-hidden">
      <div className="grid grid-cols-12 relative z-[70]">
        <div className="col-span-3" />
        <div className="col-span-9 flex flex-col gap-y-5">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="max-w-[723px] text-[#101763] font-satoshi text-[40px] font-medium leading-[120%]"
          >
            Lorem Ipsum is simply dummy text of the printing and
          </motion.h2>

          <div className="flex  justify-between gap-x-16">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="text-[#9a9a9a] font-satoshi text-base font-normal leading-[176%]"
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
              className="text-[#9a9a9a] font-satoshi text-base font-normal leading-[176%]"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </motion.p>
          </div>

          <motion.div
            className="mt-2"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="px-12 py-3 bg-[#d81100] text-white font-satoshi text-base leading-[176%] w-fit  border border-[#d81100] hover:bg-transparent hover:text-[#d81100] transition-all duration-300 "
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>

      <div className=" absolute -top-[20.5rem] left-0 max-w-[560px]  ">
        <video
          src="/Home/NewHome/3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full videos h-full- h-auto max-h-[350px]- object-cover- relative"
        />
      </div>
    </section>
  );
};

export default SectionThree;
