import Image from "next/image";
import React from "react";
import FuturisticImg from "@/../public/images/futuristic.jpg";

const EntText = () => {
  return (
    <div className=" pt-20 md:pt-24 px-4 md:px-8">
      <div className=" flex flex-col lg:flex-row gap-8 items-center">
        <div className=" lg:w-1/2">
          <p className=" text-lg font-medium">
            • Seamless AI: Effortlessly integrate AI with low-code solutions—no
            expertise needed.
            <br />
            <br />
            • Fine-Tuned Accuracy: Train models on your data for personalized
            results.
            <br />
            <br />
            • Expert Collaboration: Co-create AI solutions with our specialists.
            <br />
            <br />• Secure & Compliant: Customize AI within a privacy-first
            framework.
          </p>
        </div>
        <div className=" lg:w-1/2">
          <Image
            src={FuturisticImg}
            alt="futuristic"
            className=" object-cover object-center rounded-lg max-h-[180px] md:max-h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EntText;
