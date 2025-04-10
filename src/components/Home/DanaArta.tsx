import Link from "next/link";
import React from "react";

const DanaArta = () => {
  return (
    <div className=" pt-20 md:pt-24">
      <div className=" flex flex-col lg:flex-row">
        <div
          className=" relative h-[60vh] w-full lg:w-1/2 p-8 lg:hover:w-3/4 bg-cover bg-center lg:transition-all lg:duration-1000 lg:ease-in-out flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: "url(/images/danabg.jpg)" }}
        >
          <div className=" absolute inset-0 bg-black/20" />
          <div className=" flex flex-col gap-8 justify-center items-center relative z-10">
            <h6 className=" text-4xl font-medium text-white">Dana</h6>
            <p className=" text-white">
              Dana is an inclusive wellness platform designed to support
              cognitive and emotional health for people of all ages. With
              features like compassionate companionship, smart reminders, mental
              health tools, and medical guidance, Dana empowers users to live
              with clarity, connection, and care—every step of the way.
            </p>
            <Link href="/dana">
              <button className=" bg-white text-black px-4 py-2 rounded-md text-sm">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div
          className=" relative h-[60vh] w-full lg:w-1/2 p-8 lg:hover:w-3/4 bg-cover bg-center lg:transition-all lg:duration-1000 lg:ease-in-out flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: "url(/images/artabg.jpg)" }}
        >
          <div className=" absolute inset-0 bg-black/20" />
          <div className=" flex flex-col gap-8 justify-center items-center relative z-10">
            <h6 className=" text-4xl font-medium text-white">ARTA</h6>
            <p className=" text-white">
              Arta is a creative intelligence platform at the intersection of
              art, AI, and digital identity. Designed for the next wave of
              digital expression, Arta offers tools like real-time deepfake
              detection, generative visuals, and immersive media experiences.
              {"It’s"} where human creativity meets machine precision—bold,
              intuitive, and future-facing.
            </p>
            <Link href="/arta">
              <button className="bg-white text-black px-4 py-2 rounded-md text-sm">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanaArta;
