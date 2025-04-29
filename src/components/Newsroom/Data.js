import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
export const newsData = [
  {
    id: 0,
    slug: "launch",
    date: "May 1st, 2025",
    img: "/images/launch.png",
    title:
      "FINDORA LAUNCHES CANADA’S FIRST AI SEARCH ENGINE - BUILT FOR TRUST.",
    description: (
      <>
        <span className=" font-bold">Montreal, QC,</span>{" "}
        <span>May 1st 2025</span>
        <br />
        <br />
        <span>
          In a digital world increasingly flooded with misinformation, AI
          hallucinations, and paid search manipulation, a new Canadian venture
          is flipping the script.{" "}
          <span className=" font-bold">
            Findora, {"Canada’s"} first AI-powered search engine,
          </span>{" "}
          launches today - engineered to deliver knowledge with transparency,
          verified answers, and trust at its core.
        </span>
        <br />
        <br />
        Accessible now at{" "}
        <a href="https://www.findora.ai/" className=" text-blue-600">
          www.findora.ai
        </a>
        , Findora offers a bold alternative to traditional search engines by
        combining{" "}
        <span className=" font-bold">
          {" "}
          real-time fact-checking,multimodal intelligence, and privacy-first
          infrastructure.
        </span>{" "}
        From medical questions to academic research, from checking the
        authenticity of online content to shopping with data-driven insights,
        Findora is designed to surface truth in every search.
        <br />
        <br />
        <iframe
          width="100%"
          className=" h-[250px] sm:h-[350px] md:h-[400px] 2xl:h-[600px]"
          src="https://www.youtube.com/embed/FkSDkjWQplI?si=0Bv-Xx8o-XRAt8yF"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
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
        Findora integrates a{" "}
        <span className=" font-bold">growing ecosystem</span> of intelligent
        modules that span web search, fact-check validation, URL and document
        analysis, academic and medical insights, video and multimedia search,
        and soon, shopping intelligence. In addition, it introduces: <br />
        <span className=" font-bold">• ARTA,</span> a real-time deepfake
        detection system for verifying the authenticity of audio and video
        content. <br />
        <span className=" font-bold">• DANA,</span> an AI companion focused on
        cognitive support, emotional well-being, and life organization.
        <br />
        <br />
        According to Statistic Canada, in 2023{" "}
        <span className=" font-bold">59% of Canadians</span> reported being{" "}
        <span className=" font-bold">very concerned</span> about misinformation
        on the internet. Moreover, 43% felt that it had become harder to discern
        truth from falsehood compared to{" "}
        <span className=" font-bold">just three years</span> prior.
        <br />
        <br />
        “We created Findora to help people rise above the noise and find answers
        they can actually trust,” says Dr. Naeem Komeilipoor, Founder and CEO of
        Findora. “{"It’s"} more than a search engine. {"It’s"} a movement toward
        verified knowledge, privacy, and digital dignity.”
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
        <span className=" font-bold"> proprietary language model</span> to
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
        <a href="mailto:info@findora.ai" className=" text-blue-600">
          info@findora.ai
        </a>
      </>
    ),
  },
];
