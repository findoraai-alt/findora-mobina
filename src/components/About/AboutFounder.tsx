"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";

const AboutFounder = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className=" pt-20 md:pt-24">
      <div className=" space-y-6">
        <h3 className="text-4xl lg:text-6xl font-medium text-center px-4 md:px-8">
          About the Founder
        </h3>
        <div className=" relative">
          <img
            src="/images/founder2.jpg"
            alt="img"
            className="w-full min-h-[200px] lg:min-h-[350px] 2xl:min-h-[550px] max-h-[200px] lg:max-h-[350px] 2xl:max-h-[550px] object-cover object-top"
          />
          <motion.img
            src="/images/founder1.jpg"
            alt="img"
            ref={ref}
            style={{ opacity }}
            className="w-full min-h-[200px] lg:min-h-[350px] 2xl:min-h-[550px] max-h-[200px] lg:max-h-[350px] 2xl:max-h-[550px] object-cover object-top absolute inset-0"
          />
        </div>
        <p className="px-4 md:px-8 text-lg">
          Dr. Naeem Komeilipoor is the founder of Findora, {"Canada’s"} first
          AI-powered search engine focused on delivering clear, trustworthy
          answers — free from ads and bias. With expertise in artificial
          intelligence, neuroscience, and biomedical engineering, he has led
          groundbreaking research and built technologies that bridge science and
          society.
          <br />
          <br />
          A serial entrepreneur, Dr. Komeilipoor has founded multiple ventures —
          including AAVAA, a pioneering neurotechnology company — and serves as
          an advisor to national funding and investment agencies.
          <br />
          <br />
          With Findora, he is reimagining the future of search as a platform
          rooted in truth, clarity, and real insight.
        </p>
      </div>
    </div>
  );
};

export default AboutFounder;
