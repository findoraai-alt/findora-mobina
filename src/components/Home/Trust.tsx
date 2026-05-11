"use client";

import Image from "next/image";

interface TrustItem {
  id: number;
  title: string;
  image: string;
}

const TrustData: TrustItem[] = [
  {
    id: 1,
    title: "Policy Enforcement",
    image: "/trust/policy.png",
  },
  {
    id: 2,
    title: "Auditability",
    image: "/trust/audit.png",
  },
  {
    id: 3,
    title: "Human Oversight",
    image: "/trust/human.png",
  },
  {
    id: 4,
    title: "Context‑Aware Verification",
    image: "/trust/context.png",
  },
];

const Trust = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-20 md:pt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TrustData.map((item) => (
          <Card key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </section>
  );
};

interface CardProps {
  title: string;
  image: string;
}

const Card = ({ title, image }: CardProps) => {
  return (
    <div className="aspect-square bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-4 p-6 text-center transition-all duration-300 hover:scale-[1.04]">
      
      <Image
        src={image}
        alt={title}
        width={56}
        height={56}
        className="opacity-80"
      />

      <h6 className="text-sm md:text-base font-medium leading-snug">
        {title}
      </h6>

    </div>
  );
};

export default Trust;
