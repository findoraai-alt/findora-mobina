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
      `radial-gradient(500px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 40%)`
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full bg-black text-white py-24 overflow-hidden"
    >

      {/* cinematic gradient glows */}
      <div className="absolute inset-0 pointer-events-none blur-[140px] opacity-40">

        <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-[#008f7a] rounded-full" />

        <div className="absolute bottom-24 right-1/4 w-[380px] h-[380px] bg-[#eaba33] rounded-full" />

        <div className="absolute top-1/3 right-12 w-[360px] h-[360px] bg-[#0b87b6] rounded-full" />

        <div className="absolute bottom-12 left-12 w-[320px] h-[320px] bg-[#7332a1] rounded-full" />

        <div className="absolute top-12 right-1/3 w-[260px] h-[260px] bg-[#c31069] rounded-full" />

        <div className="absolute bottom-1/3 left-1/3 w-[260px] h-[260px] bg-[#c67f48] rounded-full" />

      </div>

      {/* interactive spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 transition duration-150"
      />

      {/* content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
          Foundational Infrastructure
          <br />
          for the Age of Autonomous AI
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed mb-8">
          AI systems must become verifiable, governed, and trustworthy before
          they can scale safely across enterprise and society.
        </p>

        <button className="px-7 py-3 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300">
          Request Investor Brief
        </button>

      </div>

      {/* bottom cinematic fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />

    </section>
  )
}
