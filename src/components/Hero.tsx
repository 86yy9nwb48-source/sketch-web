"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/content";
import { EditorialButton } from "./EditorialButton";

const EASE = [0.16, 0.84, 0.44, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

export function Hero() {
  return (
    <section id="top" data-bg="black" className="relative flex min-h-[100svh] flex-col bg-ink text-paper">
      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-10 sm:px-10 sm:justify-end sm:pb-16 md:justify-center md:pt-24 md:pb-24">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 flex items-center gap-3 font-sans text-sm font-semibold tracking-tight text-paper sm:text-base"
        >
          {hero.wordmark}
          <span className="h-1 w-1 rounded-full bg-paper/50" />
          <span className="font-sans text-[11px] font-medium tracking-[0.22em] text-paper/60 uppercase">
            {hero.descriptor}
          </span>
        </motion.p>

        <h1 className="text-balance font-kr text-[clamp(32px,5.6vw,68px)] leading-[1.18] font-bold tracking-[-0.02em] [word-break:keep-all]">
          {hero.headline.map((line, i) => (
            <motion.span key={line} custom={0.1 + i * 0.1} variants={fadeUp} initial="hidden" animate="visible" className="block">
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div custom={0.42} variants={fadeUp} initial="hidden" animate="visible" className="mt-9 flex flex-wrap items-center gap-7">
          <EditorialButton href="#contact" tone="on-dark">
            {hero.ctaPrimary} →
          </EditorialButton>
          <a href="#method" className="border-b border-paper/35 pb-1 font-sans text-[12.5px] text-paper/80 transition-colors duration-300 hover:border-paper hover:text-paper">
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 flex items-center gap-2.5 px-5 pb-6 font-sans text-[10px] tracking-[0.2em] text-paper/40 uppercase sm:px-10 md:absolute md:right-10 md:bottom-8 md:pb-0">
        <span className="relative h-8 w-px overflow-hidden bg-paper/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-full bg-paper"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        Scroll
      </div>
    </section>
  );
}
