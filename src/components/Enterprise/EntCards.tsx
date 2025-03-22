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
        className=" w-full h-auto bg-cover bg-center flex flex-col lg:flex-row justify-center items-center p-8 gap-8"
      >
        {CardsData.map((card) => (
          <Link
            href={`/enterprise/${card.id}`}
            key={card.id}
            className=" bg-white gap-8 dark:bg-[#111828] p-8 rounded-2xl flex flex-col lg:rounded-br-[200px] lg:hover:rounded-br-2xl transition-all duration-300 ease-in-out group"
          >
            <div className=" space-y-4">
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={500}
                className=" object-cover object-center h-full"
              />
              <h6 className=" font-semibold text-xl">{card.title}</h6>
              <p className=" text-lg line-clamp-2">{card.subtitle}</p>
            </div>
            <button className=" flex justify-between items-center">
              <span className=" text-lg">Learn more</span>
              <div className=" lg:group-hover:translate-x-5 transition-all duration-300 ease-in-out text-white group-hover:text-black dark:group-hover:text-white">
                <FaArrowRight size={20} />
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EntCards;
