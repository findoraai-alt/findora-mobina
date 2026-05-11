"use client";

import Image from "next/image";

interface PilotItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const pilotData: PilotItem[] = [
  {
    id: 1,
    title: "Government",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/pilots/government.png",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/pilots/healthcare.png",
  },
  {
    id: 3,
    title: "Enterprise Pilots",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/pilots/enterprise.png",
  },
];

const Pilots = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="grid md:grid-cols-3 gap-6">
          {pilotData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

const Card = ({ item }: { item: PilotItem }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 transition hover:shadow-lg">

      <div className="mb-6">
        <Image
          src={item.image}
          alt={item.title}
          width={60}
          height={60}
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {item.description}
      </p>

    </div>
  );
};

export default Pilots;
