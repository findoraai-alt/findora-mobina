"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useMeasure from "react-use-measure";

const cardsData = [
  {
    id: 1,
    title: "Conversational AI Excellence",
    img: "/images/card1.jpg",
  },
  {
    id: 2,
    title: "AI-Powered Workflow Automation",
    img: "/images/card2.jpg",
  },
  {
    id: 3,
    title: "Scalable and Adaptive Learning",
    img: "/images/card3.jpg",
  },
  {
    id: 4,
    title: "Enterprise-Grade Security & Compliance",
    img: "/images/card4.jpg",
  },
  {
    id: 5,
    title: "Agentic Document Extraction",
    img: "/images/card5.jpg",
  },
];

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024 };

const EntCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [cardSize, setCardSize] = useState(300); // Default size for smaller screens

  useEffect(() => {
    if (width > BREAKPOINTS.lg) {
      setCardSize(420);
    } else if (width > BREAKPOINTS.md) {
      setCardSize(350);
    } else {
      setCardSize(280);
    }
  }, [width]);

  const visibleCards =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.md ? 2 : 1;
  const totalScrollableWidth = cardSize * (cardsData.length - visibleCards);

  const shiftLeft = () => {
    if (offset < 0) {
      setOffset((prev) => Math.min(prev + cardSize, 0));
    }
  };

  const shiftRight = () => {
    if (Math.abs(offset) < totalScrollableWidth) {
      setOffset((prev) => Math.max(prev - cardSize, -totalScrollableWidth));
    }
  };

  // Progress Bar Calculation
  const progress = (Math.abs(offset) / totalScrollableWidth) * 100;

  return (
    <div className="py-20 md:py-24" ref={ref}>
      <div className="flex flex-col gap-8">
        {/* Header & Controls */}
        <div className="flex items-center justify-between px-4 md:px-8">
          <h6 className="text-2xl font-medium w-1/2">
            {"Findora's"} Key Features
          </h6>
          <div className="flex gap-4 w-1/2 justify-end">
            <button
              className={` ${
                offset < 0 ? "" : "opacity-30 cursor-not-allowed"
              }`}
              disabled={offset >= 0}
              onClick={shiftLeft}
            >
              <FaArrowLeft size={30} />
            </button>
            <button
              className={` ${
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

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex pl-4 md:pl-8 gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {cardsData.map((card) => (
              <div
                key={card.id}
                className=" group relative shrink-0 group overflow-hidden rounded-2xl"
                style={{ width: cardSize }}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={cardSize}
                  height={cardSize}
                  className="lg:group-hover:scale-125 h-full transition-all duration-500 ease-in-out object-cover object-center"
                />
                <h6 className="absolute top-5 left-5 text-sm md:text-base lg:text-lg mix-blend-difference text-white ">
                  {card.title}
                </h6>
              </div>
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
    </div>
  );
};

export default EntCarousel;
