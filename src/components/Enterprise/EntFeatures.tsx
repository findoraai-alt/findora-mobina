import React from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";

const features = [
  {
    id: 1,
    icon: IoMegaphoneOutline,
    title: "Context-Aware Conversational AI",
    description:
      "Engage users with intelligent, human-like interactions that understand context, intent, and nuance.",
  },
  {
    id: 2,
    icon: AiOutlineThunderbolt,
    title: "AI-Driven Business Automation",
    description:
      "Automate repetitive tasks, streamline workflows, and boost operational efficiency with AI-powered automation.",
  },
  {
    id: 3,
    icon: GrSecure,
    title: "Secure and Scalable AI Infrastructure",
    description:
      "Deploy AI solutions with enterprise-level security, compliance, and the ability to scale as your business grows.",
  },
];
const EntFeatures = () => {
  return (
    <div className=" pt-20 md:pt-24 px-4 md:px-8 ">
      <div className=" flex flex-col gap-24 justify-center items-center">
        <h1 className="text-5xl font-medium text-center max-w-3xl">
          {"Findora’s"} AI Features That Drive Business Innovation
        </h1>
        <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" flex flex-col gap-2 justify-between"
            >
              <feature.icon size={40} />
              <h6 className=" text-2xl font-medium">{feature.title}</h6>
              <p className=" text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntFeatures;
