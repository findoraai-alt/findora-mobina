import Image from "next/image";
import React from "react";

const ReadyBox = () => {
  return (
    <div className=" pt-20 md:pt-24 bg-purple-400 h-[80vh] w-full place-content-center">
      <div className=" flex flex-col md:flex-row justify-between items-start">
        <div className=" pl-8 text-white flex flex-col gap-4">
          <h3 className=" text-6xl lg:text-6xl">Ready to put AI to work?</h3>

          <button className=" bg-white rounded-full px-4 py-1 text-black text-lg w-fit">
            Try me
          </button>
        </div>
        <div>
          <Image src="/images/ready.webp" alt="..." width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default ReadyBox;
