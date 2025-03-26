import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const AboutJoinUs = () => {
  return (
    <div className="py-20 md:py-24">
      <div className=" w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-8 bg-purple-500 p-8">
        <div className=" lg:w-[60%]">
          <img
            src="/images/team.jpg"
            alt="team"
            className=" rounded-tl-full rounded-br-full object-cover object-center"
          />
        </div>
        <div className=" lg:w-[40%] flex flex-col gap-4">
          <div className=" flex flex-col gap-4 text-black">
            <h6 className=" text-xl font-bold">Join Us at Findora</h6>
            <p>
              Be part of a groundbreaking journey where privacy meets
              transparency. At Findora, {"we’re"} building the future of
              decentralized finance with cutting-edge technology that empowers
              users and businesses alike. Whether {"you're"} a developer,
              researcher, or innovator, {"there’s"} a place for you in our
              community.
            </p>
          </div>

          <button className=" flex gap-2 max-w-[20rem] group">
            <span className=" bg-[#212121] text-white w-full py-1 px-2 rounded-lg uppercase">
              join us
            </span>
            <div className=" bg-[#212121] rounded-lg text-white w-[40px] py-1 px-2 flex items-center justify-center group-hover:w-[70px] transition-all duration-300 ease-in-out">
              <RiArrowRightLine />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutJoinUs;
