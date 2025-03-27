import Link from "next/link";
import React from "react";

const EntTop = () => {
  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828]">
      <div className=" px-4 md:px-8 pt-20 md:pt-24">
        <div className=" text-center flex flex-col gap-8">
          <div className=" flex flex-col gap-4">
            <h3 className=" text-6xl font-medium max-w-3xl mx-auto">
              AI-Powered Enterprise Intelligence & Insights
            </h3>
            <p className="max-w-2xl mx-auto text-xl">
              Scalable, Transparent, and AI-Driven Solutions for Businesses
            </p>
          </div>
          <Link href="/demo">
            <button className=" bg-black dark:bg-white text-white dark:text-black font-medium rounded-full px-4 py-3 lg:hover:scale-105 transition-all duration-300 ease-in-out">
              Request a demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntTop;
