"use client";
import React from "react";
import { motion } from "framer-motion";

const artaFeaturesData = [
  {
    id: 1,
    img: "/images/arta1.jpg",
    title: "Analyze Videos in Less Than 2 Seconds",
    description:
      "Real-time threat detection for video calls and content, ensuring your business stays secure and runs smoothly.",
  },
  {
    id: 2,
    img: "/images/arta2.jpg",
    title: "Cross-Format Detection",
    description:
      "Complete protection for video, audio, and text, ensuring no manipulation is missed, no matter the format.",
  },
  {
    id: 3,
    img: "/images/arta3.jpg",
    title: "Effortless Integration",
    description:
      "Set up in minutes with APIs or SDKs. Integrates seamlessly with your current security system, video tools, and workflows.",
  },
  {
    id: 4,
    img: "/images/arta4.jpg",
    title: "Privacy-Centric Design",
    description:
      "Your data remains private. With on-premise deployment and end-to-end encryption, we guarantee top-tier security and compliance.",
  },
];

const ArtaFeatures = () => {
  return (
    <div className=" px-4 md:px-8 pt-20 md:pt-24 max-w-7xl mx-auto">
      <div className=" flex items-start gap-4">
        <h1 className=" hidden lg:block lg:text-5xl font-medium sticky top-5 w-1/2">
          Powerful Protection, Seamless Integration
        </h1>
        <div className=" grid grid-cols-1 place-items-center gap-4 lg:w-1/2 w-full">
          {artaFeaturesData.map((data) => (
            <Card card={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface cardPrompt {
  id: number;
  img: string;
  title: string;
  description: string;
}

const Card = ({ card }: { card: cardPrompt }) => {
  return (
    <div className=" relative">
      <img
        src={card.img}
        alt={card.title}
        className=" w-[560px] h-[560px] object-cover object-center rounded-2xl"
      />
      <div className=" absolute inset-0 bg-black/30 rounded-2xl" />
      <div className=" absolute lg:top-20 top-10 left-0 text-white p-8 text-center space-y-4">
        <h6 className=" text-xl font-medium">{card.title}</h6>
        <p className="font-medium">{card.description}</p>
      </div>
      <motion.div
        className=" absolute inset-0 backdrop-blur-xl rounded-2xl"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ArtaFeatures;
