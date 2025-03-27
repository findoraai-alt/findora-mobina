"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";
import { carouselData } from "./Data";

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024 };

const EntCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [cardSize, setCardSize] = useState(300);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    if (width > BREAKPOINTS.lg) setCardSize(420);
    else if (width > BREAKPOINTS.md) setCardSize(350);
    else setCardSize(280);
  }, [width]);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCard]);

  const visibleCards =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.md ? 2 : 1;
  const totalScrollableWidth = cardSize * (carouselData.length - visibleCards);

  const shiftLeft = () => {
    if (offset < 0) setOffset((prev) => Math.min(prev + cardSize, 0));
  };

  const shiftRight = () => {
    if (Math.abs(offset) < totalScrollableWidth)
      setOffset((prev) => Math.max(prev - cardSize, -totalScrollableWidth));
  };

  const progress = (Math.abs(offset) / totalScrollableWidth) * 100;

  interface Card {
    id: number;
    title: string;
    img: string;
    content: React.ReactNode;
  }

  const handleModalOpen = (card: Card) => {
    setSelectedCard(card);
  };

  const handleModalClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="py-20 md:py-24" ref={ref}>
      <div className="flex flex-col gap-8">
        {/* Header & Controls */}
        <div className="flex items-center justify-between px-4 md:px-8">
          <h6 className="text-2xl font-medium w-1/2">
            AI Solutions for Industry
          </h6>
          <div className="flex gap-4 w-1/2 justify-end">
            <button
              className={`${offset < 0 ? "" : "opacity-30 cursor-not-allowed"}`}
              disabled={offset >= 0}
              onClick={shiftLeft}
            >
              <FaArrowLeft size={30} />
            </button>
            <button
              className={`${
                Math.abs(offset) < totalScrollableWidth
                  ? ""
                  : "opacity-30 cursor-not-allowed"
              }`}
              disabled={Math.abs(offset) >= totalScrollableWidth}
              onClick={shiftRight}
            >
              <FaArrowRight size={30} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex pl-4 md:pl-8 gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {carouselData.map((card) => (
              <button
                key={card.id}
                className="group relative shrink-0 overflow-hidden rounded-2xl"
                style={{ width: cardSize }}
                onClick={() => handleModalOpen(card)}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="lg:group-hover:scale-125 h-full w-full transition-all duration-500 ease-in-out object-cover object-center"
                />
                <div className=" absolute inset-0 bg-black/20" />
                <h6
                  className="absolute z-10 top-5 left-5 text-sm md:text-base lg:text-lg font-medium"
                  style={{ color: card.textColor }}
                >
                  {card.title}
                </h6>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative w-[30%] h-[3px] bg-gray-300 mt-4 max-w-7xl mx-auto">
          <div
            className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#db7578] via-[#db7578] to-[#526fe1] transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Modal */}
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
  img: string;
  content: React.ReactNode;
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
      className="fixed overflow-y-auto top-0 left-0 w-full h-screen backdrop-blur-xl bg-black/50 z-[100] flex flex-col justify-center items-center text-white p-8"
    >
      <h2 className=" text-xl lg:text-3xl font-bold mb-4 text-center">
        {card.title}
      </h2>
      <p className=" text-sm lg:text-lg max-w-7xl text-justify">
        {card.content}
      </p>
      <button
        className="absolute top-5 right-5 p-2 text-sm bg-white text-black font-semibold"
        onClick={onClose}
      >
        Close
      </button>
    </motion.div>
  );
};

export default EntCarousel;
