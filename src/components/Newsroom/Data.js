import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
export const newsData = [
  {
    id: 0,
    date: "May 1st, 2025",
    img: "/images/launch.png",
    title: "Findora Launches Today: A Search Engine You Can Trust",
    description: (
      <>
        <span className=" font-bold">Montreal, QC — </span>In a digital world
        increasingly flooded with misinformation, AI hallucinations, and paid
        search manipulation, <span className=" font-bold">Findora</span>{" "}
        officially launches today as{" "}
        <span className=" font-bold">
          {" "}
          {"Canada’s"} first AI-powered search engine —{" "}
        </span>
        a platform built for trust, transparency, and verified answers.
        <br />
        <br />
        Accessible now at www.findora.ai, Findora offers a bold alternative to
        traditional search engines by combining{" "}
        <span className=" font-bold">
          real-time fact-checking, multimodal intelligence, and privacy-first
          infrastructure.
        </span>{" "}
        From medical questions to academic research, from checking the
        authenticity of online content to shopping with data-driven insights —
        Findora is designed to elevate truth in every search.
        <br />
        <br />
        <FaQuoteLeft color="#e5eaf0" size={60} />
        <br />
        <br />
        <div className=" flex justify-center">
          <div className=" w-[60%] lg:w-[50%]">
            <span className=" italic font-bold text-xl lg:text-2xl">
              {"It’s"} more than a search engine — {"it’s"} a movement toward
              verified knowledge, privacy, and digital dignity.
            </span>
            <br />
            <br />
            <div className=" flex flex-col items-end font-bold">
              <span>— Naeem Komeilipoor</span>
              <br />

              <span>Founder and CEO of Findora</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className=" flex justify-end">
          <FaQuoteRight color="#e5eaf0" size={60} />
        </div>
        <br />
        <br />
        “We created Findora to help people rise above the noise and find answers
        they can actually trust,” says{" "}
        <span className=" font-bold">
          Dr. Naeem Komeilipoor, Founder and CEO of Findora.
        </span>{" "}
        {"“It’s"} more than a search engine — {"it’s"} a movement toward
        verified knowledge, privacy, and digital dignity.” <br /> <br /> Findora
        integrates a growing ecosystem of intelligent modules that span web
        search, fact-check validation, URL and document analysis, academic and
        medical insights, video and multimedia search, and soon, shopping
        intelligence. In addition, it introduces: <br />{" "}
        <span className=" font-bold">• DANA,</span> an AI companion focused on
        cognitive support, emotional well-being, and life organization.
        <br />
        <span className=" font-bold"> • ARTA,</span> a real-time deepfake
        detection system for verifying the authenticity of audio and video
        content.
        <br />
        <br />
        Built and hosted entirely in Canada, Findora reflects Canadian values of
        <span className=" font-bold"> privacy, scientific integrity,</span> and
        <span className=" font-bold"> bilingual inclusivity,</span> supporting
        both English and French users.
        <br />
        <br />
        While the platform is freely available to the public, Findora also
        operates a <span className=" font-bold">
          hybrid business model,
        </span>{" "}
        offering <span className=" font-bold">enterprise solutions</span> for
        organizations such as media outlets, research institutions, legal firms,
        and healthcare providers. These clients can integrate {"Findora’s"}{" "}
        modules directly into their workflows, elevating the accuracy and
        transparency of their operations.
        <br />
        <br />
        As part of its long-term vision, Findora is currently training its own
        proprietary <span className=" font-bold">language model</span> to
        enhance contextual understanding, reduce hallucinations, and deliver
        even deeper domain-specific knowledge.
        <br />
        <br />
        ⸻
        <br />
        <br />
        Media Contact: <br />{" "}
        <span className=" font-bold">
          Naeem Komeilipoor <br /> Founder & CEO, Findora
        </span>{" "}
        <br />
        info@findora.ai
      </>
    ),
  },
];
