import Image from "next/image";
import React from "react";
import FuturisticImg from "@/../public/images/futuristic.jpg";

const EntText = () => {
  return (
    <div className=" pt-20 md:pt-24 px-4 md:px-8">
      <div className=" flex flex-col lg:flex-row gap-8 items-center">
        <div className=" lg:w-1/2">
          <p>
            Seamless integration: Add AI capabilities effortlessly to your
            workflows with our intuitive low-code solutions—no technical
            expertise required.
            <br />
            <br />
            Advanced fine-tuning: Train our models on your proprietary data to
            enhance accuracy and deliver personalized responses.
            <br />
            <br />
            Collaborative development: Partner with our experts to create AI
            solutions tailored to your specific use cases.
            <br />
            <br />
            Secure customization: Build AI-powered experiences within a
            framework that prioritizes privacy, security, and compliance.
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
