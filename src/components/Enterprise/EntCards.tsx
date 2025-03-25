import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardsData } from "./Data";
import { FaArrowRight } from "react-icons/fa6";

const EntCards = () => {
  return (
    <div className=" pt-20 md:pt-24">
      <div
        style={{ backgroundImage: "url(/images/entbg.jpg)" }}
        className=" flex justify-center items-center p-8 bg-cover bg-center h-auto w-full"
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 w-fit h-full">
          {CardsData.map((card) => (
            <Link
              href={`/enterprise/${card.id}`}
              key={card.id}
              className=" bg-white h-auto w-full gap-8 dark:bg-[#111828] p-4 lg:p-8 rounded-2xl flex flex-col justify-between lg:rounded-br-[200px] lg:hover:rounded-br-2xl transition-all duration-300 ease-in-out group"
            >
              <div className=" space-y-4">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={500}
                  height={500}
                  className=" object-cover object-center"
                />
                <h6 className=" font-semibold text-lg lg:text-xl">
                  {card.title}
                </h6>
                <div className=" text-base lg:text-lg line-clamp-2">
                  {card.subtitle}
                </div>
              </div>
              <button className=" flex justify-between items-center">
                <span className=" lg:text-lg">Learn more</span>
                <div className=" lg:group-hover:translate-x-5 transition-all duration-300 ease-in-out text-black dark:text-white lg:text-white lg:group-hover:text-black lg:dark:group-hover:text-white">
                  <FaArrowRight size={20} />
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntCards;
