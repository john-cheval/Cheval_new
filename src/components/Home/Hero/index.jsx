import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero-bg h-screen bg-white relative overflow-hidden">
      {/* Craft */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <Image
          src={"./Home/NewHome/craft_code_convert.svg"}
          alt="Craft"
          width={1000}
          height={100}
          sizes="100vw"
          className="w-full h-auto object-cover"
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </div>

      {/* AI */}
      <div className="absolute top-[13%] left-1/2 max-w-[548px]  -translate-x-1/2 z-10">
        <Image
          src={"./Home/NewHome/ai.png"}
          width={1000}
          height={100}
          alt="AI"
          sizes="100vw"
          className="w-full h-auto object-cover"
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </div>

      {/* Start */}
      <div className="absolute top-[32%] -translate-y-1/2- right-[12%] max-w-[548px]  -translate-x-1/2">
        <Image
          src={"./Home/NewHome/start.svg"}
          width={1000}
          height={100}
          alt="Star"
          sizes="100vw"
          className="w-full h-auto object-cover"
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </div>

      {/* Achievements */}
      <div className="bg-white py-4 pl-3 pr-7 shadow-hero-sm w-fit flex gap-x-3  rounded-[8px] absolute top-[25%] left-[25%]">
        <div className="bg-hero-achieve py-4 px-3 rounded-[8px] flex items-center justify-center ">
          <Image
            src={"./Home/NewHome/achievement.svg"}
            width={32}
            height={32}
            sizes="100vw"
            alt="Achievements"
            className="w-full h-auto object-cover "
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </div>

        <p className="self-center">
          <span className="text-base text-[#101763] font-sora font-bold leading-[123%] tracking-[-0.16px]">
            800+
          </span>
          <br />
          <span className="text-sm text-[#101763] font-sora font-normal leading-[123%] tracking-[-0.41px]">
            Completed <br /> Projects
          </span>
        </p>
      </div>

      {/* Happy Clients */}
      <div className="bg-white py-4 px-3 shadow-hero-sm w-fit flex gap-x-3  rounded-[8px] absolute bottom-[10%] right-[25%] ju">
        <div className="relative">
          <div className="bg-[#101763] py-4 px-3 rounded-[8px] flex items-center justify-center  h-14 w-14 mx-auto ">
            <Image
              src={"./Home/NewHome/smile.svg"}
              width={32}
              height={32}
              sizes="100vw"
              alt="smile"
              className="w-full h-auto object-cover h-8-  "
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </div>

          <p className="self-center text-center mt-1">
            <span className="text-base text-[#101763] font-sora font-bold leading-[123%] tracking-[-0.16px]">
              600+
            </span>
            <br />
            <span className="text-sm text-[#101763] font-sora font-normal leading-[123%] tracking-[-0.41px]">
              Happy Clients
            </span>
          </p>

          <Image
            src={"./Home/NewHome/verify.svg"}
            width={32}
            height={32}
            sizes="100vw"
            className="w-full h-auto object-cover h-8-  absolute -bottom-9 "
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </div>
      </div>

      {/* Text */}
      <div className="space-y-6 absolute bottom-3 left-14">
        <h1 className="text-black font-satoshi text-5xl leading-[120%] font-medium max-w-[420px]">
          Transforming Tomorrow with{" "}
          <span className="hero-text inline-block   text-transparent ">AI</span>{" "}
          Today
        </h1>
        <p className="max-w-[360px] text-[#9a9a9a] text-base leading-[143%]">
          delivering smarter, faster, and future-ready digital transformation
          solutions that create lasting impact today and beyond.
        </p>
      </div>

      {/* Play button */}
      <div className="absolute bottom-3  right-14 bg-white shadow-hero-btn px-10 py-8 z-50">
        <button className="flex gap-x-7">
          <Image
            src={"./Home/NewHome/play.svg"}
            width={1000}
            height={100}
            sizes="100vw"
            alt="play"
            className="w-full h-auto object-cover max-w-6"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />

          <span className="font-satoshi text-base leading-[143%] text-black">
            Play Show Reel
          </span>
        </button>
      </div>

      {/* Get in Touch */}
      <div className="absolute top-[62%] right-14 -translate-y-1/2 z-50">
        <Link
          href={"/contact-us"}
          className="font-satoshi text-base leading-[143%] text-black flex items-center gap-x-1"
        >
          <span className="border-b pb-2 border-b-black hover:border-b-0 transition-all duration-300 ">
            Get in Touch
          </span>{" "}
          <Image
            src={"./Home/NewHome/arrow.gif"}
            width={1000}
            alt="arrow"
            height={100}
            sizes="100vw"
            className="w-full h-auto object-cover max-w-5 rotate-180 -mt-1"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </Link>
      </div>

      {/* Overlay */}
      <div className="absolute bottom-0 left-[45%] -translate-x-1/2 z-[60]">
        <Image
          src={"./Home/NewHome/grad.svg"}
          width={1000}
          alt="gradient"
          height={100}
          sizes="100vw"
          className="w-full h-auto object-cover max-w-[600px] "
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </div>
    </section>
  );
};

export default Hero;
