import Link from "next/link";
import React from "react";

const ArtaHero = () => {
  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828]">
      <div className=" px-4 md:px-8 pt-20 md:pt-24 max-w-7xl mx-auto">
        <div className=" flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
            <h6 className="lg:w-1/3 flex justify-start text-2xl font-bold uppercase">
              Arta
            </h6>
            <p className=" lg:w-1/3 flex justify-center text-2xl font-medium">
              Detects deepfakes in real time with over 90% accuracy — no matter
              the media format
            </p>
            <a href="https://arta.findora.ai" className=" lg:w-1/3 flex justify-end">
              <button className=" bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full px-4 py-3 lg:hover:bg-blue-700 lg:dark:hover:text-white transition-all duration-300 ease-in-out">
                Try Now
              </button>
            </a >
          </div>

          <video
            src="/videos/arta.mp4"
            autoPlay
            muted
            loop
            playsInline
            className=" w-full h-[60vh] rounded-2xl object-cover object-center"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ArtaHero;
