
export default function WorkeAcross() {
  const items = [
    {
      title: "LLMs",
      desc: "Large language models for text reasoning and generation."
    },
    {
      title: "VLMs",
      desc: "Vision-language models that understand images and text together."
    },
    {
      title: "Agentic AI",
      desc: "Autonomous agents capable of planning and executing tasks."
    }
  ];

  return (
    <section className="w-full py-24 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Multimodal. Model‑Agnostic.
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          Findora works across <strong>LLMs</strong>, <strong>VLMs</strong>, and 
          <strong> agentic AI systems</strong>, showing that the platform is 
          truly multimodal and compatible with any model architecture.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
