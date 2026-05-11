"use client";

import Image from "next/image";

interface DeploymentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

const deploymentData: DeploymentItem[] = [
  {
    id: 1,
    title: "Policy Enforcement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/policy.png",
    color: "bg-[#7C3AED]",
  },
  {
    id: 2,
    title: "Auditability",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/audit.png",
    color: "bg-[#06B6D4]",
  },
  {
    id: 3,
    title: "Human Oversight",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/human.png",
    color: "bg-[#22C55E]",
  },
  {
    id: 4,
    title: "Context‑Aware Verification",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/context.png",
    color: "bg-[#F59E0B]",
  },
];

const Deployment = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-24">
      
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
        Deployment
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {deploymentData.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>

    </section>
  );
};

const Item = ({ item }: { item: DeploymentItem }) => {
  return (
    <div className="relative flex gap-5 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">

      <div className={`w-1 rounded-full ${item.color}`} />

      <div className="flex gap-4 items-start">
        <Image
          src={item.image}
          alt={item.title}
          width={40}
          height={40}
        />

        <div>
          <h3 className="font-medium mb-1">{item.title}</h3>
          <p className="text-sm text-white/60">
            {item.description}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Deployment;
