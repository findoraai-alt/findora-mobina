"use client";

export default function WorksAcross() {
  const steps = [
    {
      label: "User Query",
      color: "#008f7a",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H10l-4.5 4v-4H5.5C4.67 15 4 14.33 4 13.5v-8z" />
          <path d="M8 8h8M8 11h5" />
        </svg>
      ),
    },
    {
      label: "LLM / AI Agent Processing",
      color: "#c31069",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3.5a3 3 0 0 0-3 3v1a2.5 2.5 0 0 0-2 2.5 2.5 2.5 0 0 0 2 2.5v1a3 3 0 0 0 3 3" />
          <path d="M15 3.5a3 3 0 0 1 3 3v1a2.5 2.5 0 0 1 2 2.5 2.5 2.5 0 0 1-2 2.5v1a3 3 0 0 1-3 3" />
          <path d="M9 7h6M9 12h6M12 7v10" />
        </svg>
      ),
    },
    {
      label: "Findora Verification Layer",
      color: "#0b87b6",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      label: "Trusted & Verifiable Output",
      color: "#7332a1",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3h6l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          <path d="M14 3v5h5" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      ),
    },
  ];

  const Arrow = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">

              <div
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white bg-white/10 text-sm font-medium backdrop-blur-sm"
                style={{ color: step.color }}
              >
                {step.icon}
                <span className="whitespace-nowrap">{step.label}</span>
              </div>

              {i !== steps.length - 1 && <Arrow />}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
