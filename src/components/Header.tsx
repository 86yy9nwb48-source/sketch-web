"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, brand } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true); // true = section behind header is black -> show white header
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll<HTMLElement>("[data-bg]"));

    function update() {
      setScrolled(window.scrollY > 16);
      const probeY = 44;
      const current = sectionsRef.current.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probeY && r.bottom > probeY;
      });
      if (current) setDark(current.dataset.bg === "black");
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const showLight = dark && !menuOpen; // render header content in paper color

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b px-5 transition-colors duration-300 sm:h-[72px] sm:px-10 ${
          scrolled
            ? showLight
              ? "border-line-on-ink bg-ink/85 backdrop-blur-md"
              : "border-line-on-paper bg-paper/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className={`font-sans text-lg font-semibold tracking-tight transition-colors duration-300 ${
            showLight ? "text-paper" : "text-ink"
          }`}
        >
          {brand.name}
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative pb-1 font-sans text-[12px] font-medium tracking-[0.16em] uppercase transition-colors duration-300 ${
                showLight ? "text-paper" : "text-ink"
              }`}
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={`tap-target flex items-center gap-2.5 font-sans text-[12px] font-medium tracking-[0.16em] uppercase transition-colors duration-300 md:hidden ${
            showLight ? "text-paper" : "text-ink"
          }`}
        >
          {menuOpen ? "CLOSE" : "MENU"}
          <span className="relative flex h-4 w-5 flex-col justify-center">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              className="absolute h-px w-full bg-current"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              className="absolute h-px w-full bg-current"
            />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 0.84, 0.44, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-paper px-6 md:hidden"
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.16, 0.84, 0.44, 1] }}
                className="border-b border-line-on-paper py-4 font-sans text-4xl font-semibold tracking-tight text-ink"
              >
                {item.label}
              </motion.a>
            ))}
            <p className="absolute bottom-10 left-6 font-sans text-[11px] tracking-[0.14em] text-ink/40 uppercase">
              {brand.tagline}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
