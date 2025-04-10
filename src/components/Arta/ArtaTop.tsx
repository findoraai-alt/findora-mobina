import React from "react";

const ArtaTop = () => {
  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828]">
      <div className=" px-4 md:px-8 pt-20 md:pt-24 max-w-7xl mx-auto">
        <div className=" flex flex-col gap-8">
          <div>
            <h3 className=" text-6xl lg:text-8xl font-medium">
              Most {"Can't"}
            </h3>
            <h3 className=" text-6xl lg:text-8xl font-medium lg:flex lg:justify-center">
              Spot Deepfakes
            </h3>
          </div>
          <p className=" self-end lg:w-[40%] font-medium text-lg">
            With 80% of people unable to tell real from fake, every video call
            poses a security risk, and every digital interaction requires
            verification. For businesses, the consequences are huge, and the
            figures are alarming.
          </p>
          <img
            src="/images/deepfake.webp"
            alt="img"
            className=" w-full lg:w-[520px] h-[291px] rounded-2xl object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtaTop;
