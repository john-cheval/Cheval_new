import React from "react";
import * as motion from "motion/react-client";
import SwiperCards from "./SwiperCards";

const SectionFour = () => {
  return (
    <section className="container-main pt-14 md:pt-20 lg:pt-28 xl:pt-36 pb-14  md:pb-16 lg:pb-20    xl:pb-24 bg-black text-white font-satoshi  relative">
      <motion.h4
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="main-heading-2 !text-white text-center md:text-left"
      >
        How AI will help you grows
      </motion.h4>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="text-[#c2c2c2] text-base leading-[176%] md:max-w-[80%] mt-3 text-center md:text-left"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </motion.p>

      <div className="pt-12">
        <SwiperCards />
      </div>

      <div className="absolute top-0 bg-section-3 left-0 w-full h-full max-h-[150px]" />
    </section>
  );
};

export default SectionFour;
