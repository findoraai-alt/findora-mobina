import Image from "next/image";
import React from "react";

const FirstAI = () => {
  return (
    <div className=" pt-20 md:pt-24">
      <div className="  bg-white dark:bg-black h-auto w-full place-content-center p-8">
        <div className=" flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className=" flex flex-col justify-between gap-8 lg:w-[40%] text-center lg:text-left">
            <h3 className=" text-4xl text-black dark:text-white">
              <span className=" text-[#ff0101]">{"Canada's"}</span> First AI
              Search Engine and Language Model
            </h3>
            <h6 className=" text-2xl text-black dark:text-white">
              Empowering Canadian Organizations to Thrive Worldwide
            </h6>
            <p className=" text-lg text-black dark:text-white">
              Built and hosted in Canada while remaining competitive on a world
              stage. Findora prioritizes data sovereignty, privacy, and
              compliance. Our fully bilingual AI ensures seamless adoption
              across all teams.
            </p>
          </div>

          <div className=" w-[60%] flex justify-end">
            <Image src="/images/leaf.png" alt="..." width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAI;
