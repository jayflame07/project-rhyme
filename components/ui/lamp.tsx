"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Source pulled from 21st.dev: manuarora700/lamp.
export function LampContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const revealTransition = {
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  } as const;

  return (
    <div className={cn("rhyme-lamp-container", className)}>
      <div className="rhyme-lamp-beams">
        <motion.div
          className="rhyme-lamp-conic rhyme-lamp-conic-left"
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={revealTransition}
        >
          <div className="rhyme-lamp-mask-bottom" />
          <div className="rhyme-lamp-mask-left" />
        </motion.div>
        <motion.div
          className="rhyme-lamp-conic rhyme-lamp-conic-right"
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={revealTransition}
        >
          <div className="rhyme-lamp-mask-right" />
          <div className="rhyme-lamp-mask-bottom" />
        </motion.div>
        <div className="rhyme-lamp-shadow" />
        <div className="rhyme-lamp-blur" />
        <div className="rhyme-lamp-orb" />
        <motion.div
          className="rhyme-lamp-core"
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={revealTransition}
        />
        <motion.div
          className="rhyme-lamp-line"
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={revealTransition}
        />
        <div className="rhyme-lamp-cap" />
      </div>
      <div className="rhyme-lamp-content">{children}</div>
    </div>
  );
}
