/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LoadingAnimation = () => {
  return (
    <div className="flex items-center flex-col space-y-6 h-[100dvh] w-screen justify-center">
      <Image
        src={"/logo.svg"}
        width={160}
        height={160}
        sizes="100vw"
        className="w-40 object-contain"
        alt="logo"
        unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
      />

      <div className="flex space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-gray-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
