"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import oLogo from "@/../public/images/o.png";
import { PiArrowUpRightBold } from "react-icons/pi";
import Link from "next/link";

const WhatIsFindora = () => {
  const [textColor, setTextColor] = useState("#008f7a");
  return (
    <div className=" px-4 md:px-8 flex flex-col justify-center items-center gap-8 pt-20 md:pt-24 max-w-4xl mx-auto">
      <div
        className="text-4xl lg:text-5xl font-medium pb-12 md:pb-20"
        style={{ color: textColor }}
      >
        <TypeAnimation
          sequence={[
            "Accurate",
            1000,
            () => setTextColor("#008f7a"),
            "Transparent",
            1000,
            () => setTextColor("#eaba33"),
            "Intelligent",
            1000,
            () => setTextColor("#0b87b6"),
            "Trustworthy",
            1000,
            () => setTextColor("#7332a1"),
            "Reliable",
            1000,
            () => setTextColor("#c31069"),
            "Scientific",
            1000,
            () => setTextColor("#c67f48"),
            "Unbiased",
            1000,
            () => setTextColor("#3d6a7d"),
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={95}
          repeat={Infinity}
        />
      </div>
      <div className=" flex">
        <span className="text-4xl font-bold">What is find</span>
        <Image
          src={oLogo}
          alt="o"
          width={19}
          height={19}
          className=" object-contain pt-[6px] lg:pt-[12px]"
        />
        <span className="text-4xl font-bold"> ra?</span>
      </div>
      <span className="text-xl lg:text-2xl font-semibold text-center">
        <span className=" text-[#ff0101]"> {"Canada's"}</span> First Trusted AI Infrastructure
      </span>
      <p className=" text-center lg:text-lg font-medium">
       Findora verifies AI outputs with hallucination detection, fact‑checking, and governance controls,
        enabling reliable and secure AI for enterprise and government environments.
      </p>
      <Link href="https://search.findora.ai/" className="group">
        <button className=" bg-[#e0e0e0] dark:bg-gray-200 text-black rounded-full px-4 py-3">
          <div className=" flex items-center gap-1">
            <span className="font-medium text-sm lg:text-base">See Live Verification</span>
            <PiArrowUpRightBold className=" lg:group-hover:rotate-45 transition-all duration-300 ease-in-out" />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default WhatIsFindora;
