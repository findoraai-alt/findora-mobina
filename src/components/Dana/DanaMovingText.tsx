"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";

const DanaMovingText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828]">
      <div className=" py-20 md:py-24">
        <div className=" overflow-hidden">
          <motion.p
            ref={ref}
            style={{ translateX: x }}
            className=" text-5xl lg:text-8xl font-medium whitespace-nowrap flex justify-end uppercase"
          >
            Dana empowers you to take control of your well-being, offering
            personalized tools to support emotional health, cognitive function,
            and daily routines. With a focus on connection, care, and growth,
            Dana is here to guide you every step of the way, helping you live
            life with clarity, confidence, and peace of mind.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default DanaMovingText;
