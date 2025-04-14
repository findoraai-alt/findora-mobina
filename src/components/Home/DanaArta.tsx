import Link from "next/link";
import React from "react";

const DanaArta = () => {
  return (
    <div className=" pt-20 md:pt-24">
      <div className=" space-y-8">
        <h3 className=" text-center text-3xl lg:text-4xl font-medium">
          Smart Tools by Findora
        </h3>
        <div className=" flex flex-col lg:flex-row">
          <div
            className=" relative h-[50vh] md:h-[80vh] lg:h-[60vh] w-full lg:w-1/2 p-8 lg:hover:w-3/4 bg-cover bg-center lg:transition-all lg:duration-1000 lg:ease-in-out flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: "url(/images/danabg.jpg)" }}
          >
            <div className=" absolute inset-0 bg-black/20" />
            <div className=" flex flex-col gap-8 justify-center items-center relative z-10">
              <h6 className=" text-2xl lg:text-3xl font-medium text-black tracking-widest text-center">
                DANA - Your AI Companion
              </h6>
              <p className=" text-black text-center">
                A compassionate AI built to support your mental, emotional, and
                practical well-being — from therapy to life coaching and
                reminders
              </p>
              <Link href="/dana">
                <button className=" bg-black text-white px-4 py-2 rounded-md text-sm">
                  Explore
                </button>
              </Link>
            </div>
          </div>
          <div
            className=" relative h-[50vh] md:h-[80vh] lg:h-[60vh] w-full lg:w-1/2 p-8 lg:hover:w-3/4 bg-cover bg-center lg:transition-all lg:duration-1000 lg:ease-in-out flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: "url(/images/artabg.jpg)" }}
          >
            <div className=" absolute inset-0 bg-black/20" />
            <div className=" flex flex-col gap-8 justify-center items-center relative z-10">
              <h6 className="text-2xl lg:text-3xl  font-medium text-white tracking-widest text-center">
                ARTA - Deepfake Detection
              </h6>
              <p className=" text-white text-center">
                Real-time multimedia verification and content authenticity for
                journalists, legal teams, and the public.
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
    </div>
  );
};

export default DanaArta;
