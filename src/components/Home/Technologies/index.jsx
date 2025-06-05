import React from "react";
import TechnoligiesSwiper from "./TechnoligiesSwiper";
import * as motion from "motion/react-client";

const Technologies = () => {
  return (
    <section className="pt-24 container-main bg-white">
      <div className="grid grid-cols-12 gap-x-12">
        <div className="col-span-4 space-y-4">
          <motion.h5
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="text-[#101763] font-satoshi text-[40px] font-medium leading-[120%]"
          >
            Latest Technologies
          </motion.h5>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className="text-[#80848d] font-satoshi text-base leading-[176%]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          className="col-span-8"
        >
          <TechnoligiesSwiper />
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
