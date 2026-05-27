"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#111828] py-28 md:py-36">
      
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#0b87b6]/10 blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-120px] h-[380px] w-[380px] rounded-full bg-[#7332a1]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        
        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-[2rem] sm:text-4xl md:text-5xl
            font-semibold tracking-[-0.03em]
            text-black dark:text-white
          "
        >
          Build{" "}
          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#438cd5]
              via-[#008f7a]
              
              
              bg-[length:300%_100%]
              drop-shadow-[0_0_8px_rgba(180,180,180,0.35)]
            "
            
          >
            Trusted AI {""}
          </span>
          Systems
        </motion.h2>

        {/* divider */}
        {/* <div className="mx-auto mt-8 h-[5px] w-20 bg-[#7332a1] dark:bg-white/10 " /> */}

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          
          {/* PRIMARY */}
           {/* <button
            className="
              relative overflow-hidden
              rounded-full px-10 py-4
              font-medium
              text-white dark:text-black/80
              transition-all duration-300
              hover:scale-[1.03]
              bg-black/90
              dark:bg-white
              text-[1.2rem]
              
              
            "
            
          ><a href="https://www.findora.ai/demo">Book Demo</a>
            

          </button> */}
           <button
            
            className="
              -mt-5
              md:mt-0
              relative overflow-hidden
              rounded-[0.8rem] px-10 py-4
              font-medium
              text-white/100 dark:text-[#438cd5/80]
              bg-black/100
              transition-all duration-300
              hover:scale-[1.03]
              border-[1.5px]
              border-[#438cd5]/50
              dark:border-white/20
              dark:bg-[#111828]
              
              text-[1.2rem]
              
              
            "
            
          > <a href="https://www.findora.ai/demo">Book Demo</a>
            
          </button>

          {/* <button
            
            className="
              mt-0
              md:mt-0
              relative overflow-hidden
              rounded-[0.8rem] px-10 py-4
              font-medium
              text-black/100 dark:text-[#438cd5/80]
              
              transition-all duration-300
              hover:scale-[1.03]
              border-[1.5px]
              border-black/50
              dark:border-[#438cd5]
              
              text-[1.2rem]
              
              
            "
            
          > <a href="https://www.findora.ai/contact">Contact Us</a>
            
          </button> */}

          
          
        </motion.div>

        
        

        {/* FOOTNOTE
        <div className="mt-16 text-sm text-black/40 dark:text-white/40">
          Enterprise-grade AI verification infrastructure
        </div> */}
      </div>
    </section>
  );
}