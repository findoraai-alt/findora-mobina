"use client";

export default function worksAcross() {
  const steps = [
    { label: "User Query", desc: "User submits a prompt or request." },
    { label: "LLM / AI Agent", desc: "Model or agent processes the query." },
    {
      label: "Findora Verification Layer",
      desc: "Findora verifies reasoning, sources, and execution.",
      highlight: true,
    },
    { label: "Trusted Output", desc: "Reliable and verifiable result delivered." },
  ];

  return (
    <section className="w-full py-24 bg-[#f0f0fc] dark:bg-[#111828]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          How it works
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Findora sits between AI systems and users, ensuring every output is
          verifiable and trustworthy.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex-1 rounded-xl border p-6 text-center transition
                ${
                  step.highlight
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f172a]"
                }
              `}
            >
              <h3 className="text-lg font-medium mb-2">
                {step.label}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.desc}
              </p>

              {/* Arrow (desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-gray-400">
                  →
                </div>
              )}

              {/* Arrow (mobile) */}
              {index !== steps.length - 1 && (
                <div className="md:hidden mt-4 text-gray-400">
                  ↓
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
