"use client";

import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  GoArrowLeft,
  GoArrowRight,
  GoVideo,
} from "react-icons/go";
import {
  MdMultipleStop,
  MdOutlinePrivacyTip,
  MdOutlineVerified,
  MdPeopleOutline,
} from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { CiMedicalCross } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

/* ----------------------------- MAIN COMPONENT ----------------------------- */
const TabsFeatures = () => {
  const [selected, setSelected] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect if tab is visible in viewport
  const isTabInView = (index: number) => {
    const rect = tabRefs.current[index]?.getBoundingClientRect();
    return rect ? rect.top >= 0 && rect.bottom <= window.innerHeight : false;
  };

  // Auto-switch tabs every 5s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (isTabInView(selected)) {
        setSelected((prev) => (prev + 1) % FEATURES.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [selected, isHovered]);

  return (
    <section className="relative px-4 md:px-8 max-w-7xl mx-auto pt-20 md:pt-24">
      {/* Left Arrow */}
      {selected > 0 && (
        <ArrowButton direction="left" onClick={() => setSelected((p) => p - 1)} />
      )}

      {/* Tabs */}
      <Tabs selected={selected} setSelected={setSelected} />

      {/* Features */}
      <AnimatePresence mode="wait">
        {FEATURES.map(
          (tab, index) =>
            selected === index && (
              <motion.div
                ref={(el : any) => (tabRefs.current[index] = el)}
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <tab.Feature setIsHovered={setIsHovered} />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Right Arrow */}
      {selected < FEATURES.length - 1 && (
        <ArrowButton direction="right" onClick={() => setSelected((p) => p + 1)} />
      )}
    </section>
  );
};

/* ------------------------------- TAB SYSTEM ------------------------------- */
interface TabsProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const Tabs = ({ selected, setSelected }: TabsProps) => {
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll active tab into view
  useEffect(() => {
    tabsRef.current[selected]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selected]);

  return (
    <div className="overflow-x-auto flex tabScroll">
      {FEATURES.map((tab, i) => (
        <div key={i} ref={(el : any) => (tabsRef.current[i] = el)} className="flex-shrink-0">
          <Tab
            selected={selected === i}
            setSelected={setSelected}
            Icon={tab.Icon}
            title={tab.title}
            tabNum={i}
            bgColor={tab.bgColor}
          />
        </div>
      ))}
    </div>
  );
};

interface TabProps {
  selected: boolean;
  Icon: React.ComponentType<{ size?: number }>;
  title: string;
  setSelected: Dispatch<SetStateAction<number>>;
  tabNum: number;
  bgColor: string;
}

const Tab = ({ selected, Icon, title, setSelected, tabNum, bgColor }: TabProps) => (
  <div className="relative w-full">
    <button
      onClick={() => setSelected(tabNum)}
      className="relative z-0 flex w-full flex-row items-center justify-center gap-4 border-b-4 p-6 md:flex-col"
    >
      <span
        style={{ backgroundColor: bgColor }}
        className={`rounded-lg p-1 lg:p-3 text-2xl text-white transition-all duration-300 ${
          selected ? "scale-100 opacity-100 shadow-md" : "scale-90 opacity-50"
        }`}
      >
        <Icon />
      </span>
      <span
        className={`lg:min-w-[150px] lg:max-w-[200px] text-xs md:text-center text-black dark:text-white transition-opacity ${
          selected ? "opacity-100" : "opacity-50"
        }`}
      >
        {title}
      </span>
    </button>
    {selected && (
      <motion.span
        layoutId="tabs-underline"
        className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500 rounded-t-full"
      />
    )}
  </div>
);

/* ------------------------------- MODAL PART ------------------------------- */
const modalAnimation: Variants = {
  hidden: { y: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
  visible: { y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { y: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

const overlayAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

interface ExampleFeatureProps {
  image: string;
  text: string;
  desc: string;
  longDesc: string;
  buttonText: string;
  textColor: string;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
}

const ExampleFeature = ({
  image,
  text,
  desc,
  longDesc,
  buttonText,
  textColor,
  setIsHovered,
}: ExampleFeatureProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
  }, [isModalOpen]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className="px-4 md:px-8 w-full pt-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Feature Card */}
      <div className="bg-white dark:bg-[#202938] shadow-md rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <Image
            src={image}
            alt={text}
            width={430}
            height={430}
            className="rounded-xl object-cover object-center"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <h6 className="text-2xl font-semibold" style={{ color: textColor }}>
            {text}
          </h6>
          <p className="lg:text-lg text-gray-700 dark:text-gray-300">{desc}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: textColor }}
            className="flex items-center gap-1 rounded-full py-2 px-4 text-sm font-medium text-white group transition"
          >
            {buttonText}
            <GoArrowRight className="transition-transform lg:group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            variants={overlayAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[200] flex items-end justify-end bg-black/50"
            onClick={handleClickOutside}
          >
            <motion.div
              ref={modalRef}
              variants={modalAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative h-[70vh] w-full bg-white dark:bg-[#202938] rounded-t-2xl shadow-lg overflow-y-auto"
            >
              <div className="space-y-8 lg:space-y-16 py-16 px-8 md:px-16 lg:px-28">
                <h6 className="text-center text-3xl lg:text-4xl font-semibold">{text}</h6>
                <p className="pb-10 lg:text-xl text-gray-700 dark:text-gray-300">{longDesc}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 opacity-70 hover:opacity-100 transition"
              >
                <RxCross2 size={30} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ----------------------------- SMALL COMPONENTS ---------------------------- */
const ArrowButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-5" : "right-5"
    } top-[60%] z-10 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-[#202938] shadow-md`}
  >
    {direction === "left" ? <GoArrowLeft size={24} /> : <GoArrowRight size={24} />}
  </button>
);

export default TabsFeatures;

/* ----------------------------- FEATURE DEFINITIONS ----------------------------- */
const FEATURES = [
  {
    title: "Verified Answers",
    bgColor: "#008f7a",
    Icon: MdOutlineVerified,
    Feature: ({ setIsHovered }: { setIsHovered: Dispatch<SetStateAction<boolean>> }) => (
      <ExampleFeature
        image="/images/feature1.jpg"
        text="Verified Answers"
        desc="Get results backed by fact-checking and credible sources."
        longDesc="Findora’s Verified Answers ensure accuracy through fact-checking and credible sourcing. Every response is vetted for reliability, giving you evidence-based knowledge you can trust."
        buttonText="Learn More"
        textColor="#008f7a"
        setIsHovered={setIsHovered}
      />
    ),
  },
  {
    title: "Scientific Search",
    bgColor: "#eaba33",
    Icon: GiMaterialsScience,
    Feature: ({ setIsHovered }: { setIsHovered: Dispatch<SetStateAction<boolean>> }) => (
      <ExampleFeature
        image="/images/feature2.jpg"
        text="Scientific Search"
        desc="Access peer-reviewed research and academic insights."
        longDesc="Unlock peer-reviewed research and academic insights from authoritative sources with Findora’s Scientific Search. Stay informed with data you can rely on."
        buttonText="Learn More"
        textColor="#eaba33"
        setIsHovered={setIsHovered}
      />
    ),
  },
  {
    title: "Multi-Format Search",
    bgColor: "#0b87b6",
    Icon: MdMultipleStop,
    Feature: ({ setIsHovered }: { setIsHovered: Dispatch<SetStateAction<boolean>> }) => (
      <ExampleFeature
        image="/images/feature3.jpg"
        text="Multi-Format Search"
        desc="Analyze URLs, text, and files together for deep insights."
        longDesc="Analyze URLs, text, and files simultaneously for deeper, more holistic insights. Findora streamlines your workflow and brings structure to unstructured data."
        buttonText="Learn More"
        textColor="#0b87b6"
        setIsHovered={setIsHovered}
      />
    ),
  },
  {
    title: "Video Intelligence",
    bgColor: "#7332a1",
    Icon: GoVideo,
    Feature: ({ setIsHovered }: { setIsHovered: Dispatch<SetStateAction<boolean>> }) => (
      <ExampleFeature
        image="/images/feature4.jpg"
        text="Video Intelligence"
        desc="Find accurate, fact-based answers from videos."
        longDesc="Findora’s Video Intelligence extracts fact-based insights directly from video content using advanced AI analysis — turning visuals into verified knowledge."
        buttonText="Learn More"
        textColor="#7332a1"
        setIsHovered={setIsHovered}
      />
    ),
  },
  {
    title: "Medical",
    bgColor: "#c31069",
    Icon: CiMedicalCross,
    Feature: ({ setIsHovered }: { setIsHovered: Dispatch<SetStateAction<boolean>> }) => (
      <ExampleFeature
        image="/images/feature5.jpg"
        text="Medical"
        desc="Accurate, up-to-date medical information from reliable sources."
        longDesc="Access verified medical research and clinical data through Findora’s AI-driven search — your trusted source for evidence-based healthcare insights."
        buttonText="Learn More"
        textColor="#c31069"
        setIsHovered={setIsHovered}
      />
    ),
  },
  {
    title: "Enterprise Solutions",
    bgColor: "#c67f48",
    Icon: MdPeopleOutline,
    Feature: ({ setIsHovered }: { setIsHovered: Dispatch<SetStateAction<boolean>> }) => (
      <ExampleFeature
        image="/images/feature6.jpg"
        text="Enterprise Solutions"
        desc="Integrate Findora’s AI into your business workflow."
        longDesc="Findora’s Enterprise Solutions provide AI-driven verification tools to strengthen organizational decision-making and ensure data credibility in real time."
        buttonText="Learn More"
        textColor="#c67f48"
        setIsHovered={setIsHovered}
      />
    ),
  },
  {
    title: "Privacy & Trust",
    bgColor: "#3d6a7d",
    Icon: MdOutlinePrivacyTip,
    Feature: ({ setIsHovered }: { setIsHovered: Dispatch<SetStateAction<boolean>> }) => (
      <ExampleFeature
        image="/images/feature7.jpg"
        text="Privacy & Trust"
        desc="Protect your data. Stay anonymous. Verify website credibility."
        longDesc="Your privacy is our priority. Findora ensures encrypted searches and transparency while keeping your identity secure and data protected."
        buttonText="Learn More"
        textColor="#3d6a7d"
        setIsHovered={setIsHovered}
      />
    ),
  },
];
