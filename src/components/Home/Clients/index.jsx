"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import gsap from "gsap";
const Clients = ({ clientsData }) => {
  const elements = [...clientsData, ...clientsData];
  let timeline = useRef();
  const movingContainer = useRef(null);

  useGSAP(() => {
    timeline.current?.kill();

    gsap.set(movingContainer.current, {
      xPercent: 0,
    });

    timeline.current = gsap.timeline({
      repeat: -2,
      defaults: { ease: "none" },
    });

    timeline.current.to(movingContainer.current, {
      xPercent: -50,
      duration: 50,
    });
  }, []);

  const list = useMemo(() => (
    <div className="flex w-fit ">
      {elements?.map((client, index) => {
        return (
          <div
            key={index}
            className={`     flex items-center justify-center py-7 min-w-[240px] shrink-0`}
          >
            <Image
              src={client?.image}
              alt={`${client?.title} || image-${index + 1}`}
              width={250}
              height={150}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              className="w-full h-auto object-cover max-w-[150px] md:max-w-[200px]"
            />
          </div>
        );
      })}
    </div>
  ));
  return (
    <div className="bg-white pt-16 pb-10">
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {/* {list} */}
      </div>
    </div>
  );
};

export default Clients;
