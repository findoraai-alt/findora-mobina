"use client";
import React, { useEffect, useState } from "react";
import { TopData } from "./Data";
import { AnimatePresence, motion } from "framer-motion";

const DanaTop = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCard]);

  interface Card {
    id: number;
    title: string;
    subTitle: string;
    img: string;
    desc: React.ReactNode;
  }

  const handleModalOpen = (data: Card) => {
    setSelectedCard(data);
  };

  const handleModalClose = () => {
    setSelectedCard(null);
  };
  return (
    <div className=" pt-20 md:pt-24 px-4 md:px-8">
      <div className=" flex flex-col gap-28">
        {TopData.map((data) => (
          <div key={data.id} className=" flex row_reverse items-start gap-8">
            <div className=" w-1/2 flex flex-col gap-4 items-start sticky top-2">
              <h6 className=" text-2xl lg:text-4xl font-medium">
                {data.title}
              </h6>
              <span className=" text-sm font-light">{data.subTitle}</span>
              <button
                onClick={() => handleModalOpen(data)}
                className=" bg-black text-white dark:bg-white dark:text-black px-12 py-1"
              >
                View
              </button>
            </div>
            <div className=" w-1/2">
              <img
                src={data.img}
                alt="image"
                className=" w-[360px] h-[360px] lg:w-[560px] lg:h-[650px] object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedCard && (
          <Modal card={selectedCard} onClose={handleModalClose} />
        )}
      </AnimatePresence>
    </div>
  );
};

interface Card {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  desc: React.ReactNode;
}

interface ModalProps {
  card: Card;
  onClose: () => void;
}

const Modal = ({ card, onClose }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(50% 50% 50% 50%)" }}
      animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{ opacity: 0, clipPath: "inset(50% 50% 50% 50%)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      data-lenis-prevent="true"
      style={{
        backgroundImage: `url(${card.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="fixed overflow-y-auto top-0 left-0 w-full h-screen backdrop-blur-xl z-[100] flex flex-col justify-center items-center text-white p-8"
    >
      <div className=" bg-black/50 absolute inset-0 " />
      <h2 className=" text-lg lg:text-3xl font-bold mb-1 lg:mb-2 text-center relative z-10">
        {card.title}
      </h2>
      <span className="relative z-10 mb-4">{card.subTitle}</span>
      <div className=" text-sm lg:text-lg max-w-7xl relative z-10 text-center">
        {card.desc}
      </div>
      <button
        className="absolute top-5 right-5 p-2 text-sm text-white font-semibold"
        onClick={onClose}
      >
        Close
      </button>
    </motion.div>
  );
};

export default DanaTop;
