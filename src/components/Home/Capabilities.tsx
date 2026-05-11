import React from "react";
import { IconType } from "react-icons";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdFactCheck } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { AiOutlineCloudServer } from "react-icons/ai";
import { HiOutlineDocumentSearch } from "react-icons/hi";

const WhyFindoraData = [
  {
    id: 1,
    title: "What Findora Does?",
  },
  {
    id: 2,
    icon: GiArtificialIntelligence,
    title: "Hallucination Detection",
    color: "#008f7a",
  },
  {
    id: 3,
    icon: MdFactCheck,
    title: "Fact-checking & Verification",
    color: "#7332a1",
  },
  {
    id: 4,
    icon: TbTargetArrow,
    title: "Reliability Scoring",
    color: "#0b87b6",
  },
  {
    id: 5,
    icon: GrSecure,
    title: "AI Governance",
    color: "#c31069",
  },
  {
    id: 6,
    icon: RiShieldKeyholeLine,
    title: "Secure & Private AI",
    color: "#c67f48",
  },
  {
    id: 7,
    icon: AiOutlineCloudServer,
    title: "Local / Air‑Gapped Deployment",
    color: "#2d9cdb",
  },
  {
    id: 8,
    icon: HiOutlineDocumentSearch,
    title: "Agentic Document Intelligence",
    color: "#9b51e0",
  },
];

const Capabilities = () => {
  return (
    <div className="px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20 md:pt-24 max-w-7xl mx-auto">
      {WhyFindoraData.map((data) => {
        return (
          <Card
            key={data.id}
            title={data.title}
            Icon={data.icon}
            color={data.color}
          />
        );
      })}
    </div>
  );
};

interface CardProps {
  Icon?: IconType;
  title: string;
  color?: string;
}

const Card = ({ Icon, title, color }: CardProps) => {
  return (
    <div className="aspect-square text-center bg-white dark:bg-[#111828] first:bg-transparent dark:first:bg-transparent flex flex-col justify-center items-center gap-4 p-6 rounded-2xl">
      
      {Icon && <Icon size={42} color={color} />}

      <h6 className="text-base md:text-lg font-medium leading-snug">
        {title}
      </h6>

    </div>
  );
};

export default Capabilities;
