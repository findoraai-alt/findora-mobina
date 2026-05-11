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
    title: "Enterprise",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/enterprise.png",
    color: "bg-[#7C3AED]",
  },
  {
    id: 2,
    title: "Government",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/government.png",
    color: "bg-[#06B6D4]",
  },
  {
    id: 3,
    title: "Healthcare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/healthcare.png",
    color: "bg-[#22C55E]",
  },
  {
    id: 4,
    title: "On-Premise",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/onpremise.png",
    color: "bg-[#F59E0B]",
  },
  {
    id: 5,
    title: "Edge AI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/edge.png",
    color: "bg-[#EC4899]",
  },
  {
    id: 6,
    title: "Air-Gapped Systems",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/deployment/airgapped.png",
    color: "bg-[#3B82F6]",
  },
];

const Deployment = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {deploymentData.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

const Item = ({ item }: { item: DeploymentItem }) => {
  return (
    <div className="relative flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md">

      <div className={`absolute left-0 top-0 h-full w-[3px] ${item.color}`} />

      <Image
        src={item.image}
        alt={item.title}
        width={40}
        height={40}
      />

      <div>
        <h3 className="text-gray-900 text-base font-semibold mb-2">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

    </div>
  );
};

export default Deployment;
