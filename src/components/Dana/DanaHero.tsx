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
            <span className=" uppercase font-bold text-base lg:text-xl ">
              Meet DANA - Your AI Companion
            </span>
            <hr className="rotate-90 border-black dark:border-white w-[100px]" />
            <span className=" uppercase font-medium text-base lg:text-lg">
              Connect. Support. <br /> Thrive.
            </span>
          </div>

          <div className="relative h-[115px] md:h-[170px] lg:h-[215px] w-full overflow-hidden">
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
              src="/images/danalogo.png"
              alt="overlay"
              className="absolute z-10 top-0 left-14 right-0 lg:left-24 bottom-0 h-[115px] md:h-[170px] lg:h-[215px] object-contain object-center"
            />
          </div>

          <span className=" font-semibold text-base lg:text-2xl">
            DANA is your trusted AI companion designed to support emotional
            well-being, mental clarity, and daily life. Whether {"you're"} a
            senior, a busy parent, or simply seeking guidance, DANA listens,
            understands, and empowers.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DanaHero;
