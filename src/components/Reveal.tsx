"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE_EDITORIAL = [0.16, 0.84, 0.44, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay }}
    >
      {children}
    </motion.div>
  );
}
