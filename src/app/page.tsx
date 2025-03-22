"use client";
import BrowserSearch from "@/components/Home/BrowserSearch";
import Cards from "@/components/Home/Cards";
import MovingBoxes from "@/components/Home/MovingBoxes";
import PreLoader from "@/components/Home/PreLoader";
import FirstAI from "@/components/Home/FirstAI";
import { Stats } from "@/components/Home/Stats";
import TabsFeatures from "@/components/Home/TabFeatures";
import UseOnPhone from "@/components/Home/UseOnPhone";
import WhatIsFindora from "@/components/Home/WhatIsFindora";
import WhyFindora from "@/components/Home/WhyFindora";

export default function Home() {
  return (
    <div>
      <PreLoader />
      <div className=" bg-[#f0f0fc] dark:bg-[#111828]">
        <WhatIsFindora />
        <TabsFeatures />
        <Stats />
        <MovingBoxes />
        <Cards />
        <FirstAI />
      </div>
      <WhyFindora />
      <BrowserSearch />
      <UseOnPhone />
    </div>
  );
}
