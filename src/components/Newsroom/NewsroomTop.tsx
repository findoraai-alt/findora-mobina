"use client";
import React, { useState } from "react";
import { newsData } from "./Data";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NewsroomTop = () => {
  const [displayedCards, setDisplayedCards] = useState(6);

  const showMoreCards = () => {
    if (displayedCards < newsData.length) {
      setDisplayedCards(displayedCards + 3);
    }
  };

  const showLessCards = () => {
    if (displayedCards > 3) {
      setDisplayedCards(displayedCards - 3);
    }
  };
  return (
    <div className=" px-4 md:px-8 py-20 md:py-24 max-w-7xl mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center place-items-center">
        {newsData.slice(0, displayedCards).map((news) => (
          <Link
            href={`newsroom/${news.slug}`}
            key={news.id}
            className=" shadow-md bg-white dark:bg-[#111828] rounded-2xl w-full h-auto group"
          >
            <img
              src={news.img}
              alt="img"
              className=" w-full max-h-auto min-h-auto object-center object-cover rounded-t-2xl"
            />

            <div className="p-8 space-y-4">
              <span className=" text-xs">{news.date}</span>
              <h6 className=" text-[#994d7e] font-medium">{news.title.toUpperCase()}</h6>
              <div className=" line-clamp-4 text-[#5e656f] dark:text-[#ADBDCC] text-sm">
                {news.description}
              </div>
              <div className=" flex justify-end">
                <button className=" flex items-center">
                  <span className=" font-medium text-xs">Read more</span>

                  <MdOutlineKeyboardArrowRight
                    size={15}
                    className=" lg:group-hover:translate-x-1 lg:transition-all lg:duration-300 lg:ease-in-out"
                  />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className=" flex justify-center items-center gap-4 mt-8">
        {displayedCards > 6 && (
          <button
            onClick={showLessCards}
            className=" bg-[radial-gradient(100%_100%_at_100%_0%,_#af8bee_0%,_#6903f6_100%)] text-white text-sm p-2 font-medium rounded-md"
          >
            Show Less
          </button>
        )}
        {displayedCards < newsData.length && (
          <button
            onClick={showMoreCards}
            className="text-white bg-[radial-gradient(100%_100%_at_100%_0%,_#af8bee_0%,_#6903f6_100%)] text-sm p-2 font-medium rounded-md"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsroomTop;

