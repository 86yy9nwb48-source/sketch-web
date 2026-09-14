"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "@/data/content";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" data-bg="white" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        <Reveal className="mb-12 sm:mb-20">
          <p className="mb-4 font-sans text-[11px] font-medium tracking-[0.22em] text-ink/50 uppercase">{faq.eyebrow}</p>
          <h2 className="font-kr text-[clamp(30px,5vw,48px)] leading-[1.2] font-bold tracking-[-0.02em] [word-break:keep-all]">{faq.headline}</h2>
        </Reveal>

        <Reveal delay={0.1} className="border-t border-line-on-paper">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-line-on-paper">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="tap-target flex w-full items-center justify-between gap-5 py-6 text-left font-kr text-[16px] font-semibold sm:py-7 sm:text-[19px]"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
                    className="shrink-0 font-sans text-2xl font-light"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[60ch] pb-7 text-[14.5px] leading-[1.85] text-ink/65">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
