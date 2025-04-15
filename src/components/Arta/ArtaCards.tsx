"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { IconType } from "react-icons";
import { RiGovernmentLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";

const cardData = [
  {
    id: 1,
    icon: RiGovernmentLine,
    title: "Public Sector Organizations",
    desc: "Protect confidential communications and authenticate identities.",
  },
  {
    id: 2,
    icon: FaRegMoneyBillAlt,
    title: "Financial Institutions",
    desc: "Stop fraud in real-time transactions across all media formats.",
  },
  {
    id: 3,
    icon: FiTv,
    title: "Media Organizations",
    desc: "Instantly validate content authenticity.",
  },
  {
    id: 4,
    icon: FaPeopleGroup,
    title: "Enterprises",
    desc: "Integrate deepfake detection into your workflow.",
  },
];

export default function PlayingCards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-20 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="space-y-8 lg:space-y-16">
        <h3 className="text-center text-4xl lg:text-5xl font-medium">
          Industry-Leading Protection for All Sectors
        </h3>

        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-items-center items-center"
          style={{ perspective: 1000 }}
        >
          {cardData.map((card, index) => (
            <Card key={card.id} card={card} index={index} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CardDataType {
  id: number;
  icon: IconType;
  title: string;
  desc: string;
}

interface CardProps {
  card: CardDataType;
  index: number;
  isMobile: boolean;
}

function Card({ card, index, isMobile }: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -10% 0px" }); // detects entry & exit
  const controls = useAnimation();
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    if (isInView && !rotated) {
      controls.start({
        rotateY: 180,
        transition: { duration: 1, delay: isMobile ? 0 : index * 0.3 },
      });
      setRotated(true);
    } else if (!isInView && rotated) {
      controls.start({ rotateY: 0 });
      setRotated(false);
    }
  }, [isInView, rotated, controls, index, isMobile]);

  return (
    <motion.div
      ref={ref}
      className="w-[300px] h-[420px] rounded-2xl shadow-lg relative"
      animate={controls}
      initial={{ rotateY: 0 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute w-full h-full flex items-center justify-center rounded-2xl bg-black dark:bg-white dark:text-black"
        style={{ backfaceVisibility: "hidden" }}
      >
        <card.icon size={70} className="text-white dark:text-black" />
      </div>
      <div
        className="absolute w-full h-full p-8 flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-black text-black dark:text-white text-center"
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="text-2xl font-medium mb-3">{card.title}</div>
        <div className="text-sm">{card.desc}</div>
      </div>
    </motion.div>
  );
}
