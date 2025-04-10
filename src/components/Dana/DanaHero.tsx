"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DanaHero = () => {
  const images = [
    { url: "/images/life1.jpg" },
    { url: "/images/life2.jpg" },
    { url: "/images/life3.jpg" },
    { url: "/images/life4.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // Change every 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828]">
      <div className="px-4 md:px-8 pt-20 md:pt-24">
        <div className="flex flex-col gap-16">
          <div className=" flex justify-between items-center gap-4">
            <span className=" uppercase font-bold text-2xl">Dana</span>
            <hr className="rotate-90 border-black dark:border-white w-[100px]" />
            <span className=" uppercase font-medium text-base lg:text-lg">
              Connect. Support. <br /> Thrive.
            </span>
          </div>

          <div className="relative h-[115px] lg:h-[215px] w-full overflow-hidden">
            {images.map((image, index) => (
              <motion.img
                key={image.url}
                src={image.url}
                alt={`slide-${index}`}
                initial={false}
                animate={{ opacity: index === current ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
                style={{ zIndex: index === current ? 2 : 1 }}
              />
            ))}

            <img
              src="/images/lifeLogo.png"
              alt="overlay"
              className="absolute z-10 top-0 left-14 right-0 lg:left-24 bottom-0 h-[115px] lg:h-[215px] object-contain object-center"
            />
          </div>

          <div className="flex justify-between items-center gap-4">
            <span className=" text-xl lg:text-4xl font-medium uppercase">
              Care + <br />
              Support
            </span>
            <span className=" font-semibold text-[6px] lg:text-[10px] uppercase lg:w-[20%]">
              Dana is a wellness platform offering emotional support, reminders,
              therapy, and health insights for all ages, with a focus on older
              adults.
              <br />
              <br />
              Dana helps users stay connected and manage their well-being with
              personalized tools for daily life and mental health.
            </span>
            <span className=" text-base lg:text-lg font-medium uppercase">
              Mind <br />
              Wellness
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanaHero;
