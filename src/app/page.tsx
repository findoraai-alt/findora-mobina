"use client";
import BrowserSearch from "@/components/Home/BrowserSearch";
import Cards from "@/components/Home/Cards";
import MovingBoxes from "@/components/Home/MovingBoxes";
import FirstAI from "@/components/Home/FirstAI";
import { Stats } from "@/components/Home/Stats";
import TabsFeatures from "@/components/Home/TabFeatures";
import UseOnPhone from "@/components/Home/UseOnPhone";
import WhatIsFindora from "@/components/Home/WhatIsFindora";
import WhyFindora from "@/components/Home/WhyFindora";
import { useEffect } from "react";
import PreLoader from "@/components/Home/PreLoader";
import DanaArta from "@/components/Home/DanaArta";
import ChatbotWidget from "@/components/Global/ChatbotWidget";
import WorksAcross from "@/components/Home/worksAcross"
import Capabilities from "@/components/Home/Capabilities";
import Trust from "@/components/Home/Trust";
import Deployment from "@/components/Home/Deployment";
import Traction from "@/components/Home/Traction";
import Introduction from "@/components/Home/Introduction";
import Diagram from "@/components/Home/Diagram"
import Problem from "@/components/Home/Problem";
import Solution from "@/components/Home/Solution";
import Differentiation from "@/components/Home/Differentiation";
import VisionSection from "@/components/Home/VisionSection";
import FinalCTA from "@/components/Home/FinalCTA";
export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.removeItem("session_id")
  }, []);


  return (
    <div>
      <PreLoader />
      <div className=" bg-white dark:bg-[#111828]">
       
        <Introduction />
        <Diagram />
        <Problem />
        <Solution />
        <Deployment />
        <Differentiation />
        <VisionSection />
        <FinalCTA />
        {/* <WhatIsFindora /> */}
        {/* <DanaArta /> */}
        {/* <Capabilities /> */}
        {/* <WorksAcross /> */}
        {/* <Deployment />
        <Trust /> */}
        {/* <Traction />
        <TabsFeatures />
        <Stats />
        <MovingBoxes />
        <Cards />
        <FirstAI /> */}
      </div>
      {/* <WhyFindora />
      <BrowserSearch />
      <UseOnPhone />
      <ChatbotWidget/> */}
    </div>
  );
}
