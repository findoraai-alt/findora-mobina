"use client"
import { useRef } from "react"

export default function VisionSection() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!spotlightRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    spotlightRef.current.style.background =
      `radial-gradient(500px circle at ${x}px ${y}px, rgba(255,255,255,0.05), transparent 55%)`
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full bg-black text-white py-20 overflow-hidden"
    >

      {/* softer cinematic glow layer */}
      <div className="absolute inset-0 pointer-events-none blur-[160px] opacity-25">

        <div className="absolute top-24 left-1/4 w-[380px] h-[380px] bg-[#008f7a]/60 rounded-full" />
        <div className="absolute bottom-28 right-1/4 w-[340px] h-[340px] bg-[#eaba33]/50 rounded-full" />
        <div className="absolute top-1/3 right-16 w-[320px] h-[320px] bg-[#0b87b6]/50 rounded-full" />
        <div className="absolute bottom-16 left-16 w-[300px] h-[300px] bg-[#7332a1]/45 rounded-full" />
        <div className="absolute top-16 right-1/3 w-[220px] h-[220px] bg-[#c31069]/40 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-[220px] h-[220px] bg-[#c67f48]/40 rounded-full" />

      </div>

      {/* interactive spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 transition duration-300"
      />

      {/* content */}
      <div className="relative max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-[2rem] md:text-5xl font-semibold tracking-tight leading-tight mb-6">
          Foundational Infrastructur for the Age of Autonomous AI
        </h2>

        <p
          className="
            mx-auto
            max-w-xl
            text-[1.3rem]
            md:text-[1.7rem]
            text-white/70
            leading-relaxed
            mb-10
            font-medium
          "
        >
          AI systems must become verifiable, governed, and trustworthy before
          they can scale safely across enterprise and society.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button  className="px-7 py-3 text-[1.3rem] font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300">
            
            <a href="https://www.findora.ai/demo">Request Investor Brief</a>
          </button>

          <button className="px-7 py-3 text-[1.3rem] font-medium border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
            
            <a href="https://www.findora.ai/contact">Contact Enterprise Team</a>
          </button>
        </div>

      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent" />

    </section>
  )
}