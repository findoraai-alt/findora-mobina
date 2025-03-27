import React from "react";

const Demo = () => {
  return (
    <div className=" px-4 md:px-8 py-20 md:py-24">
      <div className=" flex flex-col lg:flex-row items-start gap-8">
        <div className=" lg:w-1/2 flex flex-col gap-4">
          <div className=" flex flex-col gap-4">
            <h6 className=" text-5xl font-medium">
              Unlock AI-Powered Efficiency with Findora
            </h6>
            <span className=" text-lg">
              Request a demo and discover how {"Findora's"} secure and private
              AI solutions can drive productivity and innovation for your
              business.
            </span>
          </div>
          <ul className=" text-lg">
            <li>
              ✔ Explore how {"Findora’s"} AI models adapt to your unique
              enterprise needs
            </li>
            <li>
              ✔ Identify the optimal deployment options for your organization
            </li>
            <li>
              ✔ Learn how Findora seamlessly integrates AI into your workflow
            </li>
          </ul>
        </div>
        <div className=" lg:w-1/2">
          <form
            className=" flex flex-col gap-4 bg-white dark:bg-[#111828] h-auto p-8 rounded-2xl"
            action=""
          >
            <div className=" flex gap-4">
              <input
                type="text"
                placeholder="First Name*"
                required
                className=" w-full outline-none border-[1px] border-[#cfcfcf] dark:bg-[#202938] bg-[#f5f5ff] focus:border-[#cfcfcf] p-2 placeholder-[#777777] dark:placeholder-white "
              />
              <input
                type="text"
                placeholder="Last Name*"
                required
                className=" w-full outline-none border-[1px] border-[#cfcfcf] dark:bg-[#202938] bg-[#f5f5ff] focus:border-[#cfcfcf] p-2 placeholder-[#777777] dark:placeholder-white "
              />
            </div>
            <div className=" flex gap-4">
              <input
                type="email"
                placeholder="Business Email*"
                required
                className=" w-full outline-none border-[1px] border-[#cfcfcf] dark:bg-[#202938] bg-[#f5f5ff] focus:border-[#cfcfcf] p-2 placeholder-[#777777] dark:placeholder-white "
              />
              <input
                type="number"
                placeholder="Phone Number*"
                required
                className=" w-full outline-none border-[1px] border-[#cfcfcf] dark:bg-[#202938] bg-[#f5f5ff] focus:border-[#cfcfcf] p-2 placeholder-[#777777] dark:placeholder-white "
              />
            </div>

            <textarea
              cols={30}
              rows={7}
              placeholder="Tell Us More About Your Case*"
              className=" w-full outline-none border-[1px] border-[#cfcfcf] dark:bg-[#202938] bg-[#f5f5ff] focus:border-[#cfcfcf] p-2 placeholder-[#777777] dark:placeholder-white "
            ></textarea>
            <div className=" flex items-center gap-4">
              <input type="checkbox" name="" id="" />
              <span className=" text-sm">
                I agree to receiving email communications from Findora.
              </span>
            </div>
            <div>
              <button className=" text-xl bg-purple-500 lg:hover:bg-purple-600 transition-all duration-300 ease-in-out rounded-full px-4 py-2 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Demo;
