import React from "react";

const EntBoxes = () => {
  return (
    <div className=" pt-20 md:pt-24 px-4 md:px-8">
      <div className=" flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className=" flex flex-col lg:-space-y-8 gap-4 lg:gap-0 lg:w-1/2">
          <div className=" bg-[#2e2e2e] dark:bg-white h-[350px] rounded-2xl overflow-hidden lg:[clip-path:polygon(100%_0,0_0,0_100%,100%_75%)] p-8 space-y-5">
            <h6 className=" font-medium text-white dark:text-black text-xl lg:text-2xl">
              Intelligent Agentic Document Extraction
            </h6>
            <p className="text-sm lg:text-base text-white dark:text-black">
              {"Findora’s"} AI-driven document extraction system autonomously
              processes unstructured data from various file types, including
              images, audio, video, Excel, PDFs, and more. It intelligently
              identifies, organizes, and extracts key information with
              precision. Designed for efficiency and adaptability, it enhances
              data workflows across finance, healthcare, and legal sectors
            </p>
          </div>
          <div className=" h-[350px] rounded-2xl lg:-skew-y-[7deg] relative overflow-hidden">
            <video
              src="/videos/shapes.mp4"
              autoPlay
              muted
              playsInline
              loop
              className=" w-full h-full object-cover object-center"
            ></video>
          </div>
        </div>
        <div className=" bg-[#EFB6C8] rounded-2xl lg:w-1/2 overflow-hidden flex justify-center items-end px-8 pt-8">
          <div className=" bg-white/40 pt-4 px-4 rounded-t-2xl">
            <video
              src="/videos/search.mp4"
              autoPlay
              muted
              playsInline
              loop
              className="w-[500px] md:h-[500px] lg:h-[600px] object-cover object-center rounded-t-2xl"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntBoxes;
