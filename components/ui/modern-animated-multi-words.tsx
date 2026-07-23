"use client";

import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Source pulled from 21st.dev: uniquesonu/modern-animated-multi-words.
function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
  variant?: "primary" | "gradient" | "neon" | "glass";
}

export function ContainerTextFlip({
  words = ["revolutionary", "extraordinary", "phenomenal", "incredible"],
  interval = 3500,
  className,
  textClassName,
  animationDuration = 800,
  variant = "gradient",
}: ContainerTextFlipProps) {
  useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, animationDuration / 2);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval, animationDuration]);

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return {
          container: "rhyme-21st-flip-primary",
          glow: "rhyme-21st-flip-primary-glow",
        };
      case "neon":
        return {
          container: "rhyme-21st-flip-neon",
          glow: "rhyme-21st-flip-neon-glow",
        };
      case "glass":
        return {
          container: "rhyme-21st-flip-glass",
          glow: "rhyme-21st-flip-glass-glow",
        };
      default:
        return {
          container: "rhyme-21st-flip-gradient",
          glow: "rhyme-21st-flip-gradient-glow",
        };
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <div className="rhyme-21st-flip-shell">
      <motion.div
        animate={{
          scale: isAnimating ? [1, 1.05, 1] : 1,
          opacity: isAnimating ? [0.8, 1, 0.8] : 0.8,
        }}
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("rhyme-21st-flip-glow", variantClasses.glow)}
      />

      <motion.div
        layout
        animate={{
          scale: isAnimating ? [1, 0.98, 1] : 1,
        }}
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
          layout: { duration: 0.3 },
        }}
        className={cn("rhyme-21st-flip", variantClasses.container, className)}
      >
        <div className="rhyme-21st-flip-shimmer">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </div>

        <div className="rhyme-21st-flip-text-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[currentWordIndex]}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                filter: "blur(8px)",
                scale: 1.1,
              }}
              transition={{
                duration: animationDuration / 1000,
                ease: [0.25, 0.25, 0, 1],
              }}
              className={cn("rhyme-21st-flip-text", textClassName)}
            >
              {words[currentWordIndex].split("").map((letter, index) => (
                <motion.span
                  key={`${words[currentWordIndex]}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 10,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="rhyme-21st-corner rhyme-21st-corner-tl" />
        <div className="rhyme-21st-corner rhyme-21st-corner-tr" />
        <div className="rhyme-21st-corner rhyme-21st-corner-bl" />
        <div className="rhyme-21st-corner rhyme-21st-corner-br" />
      </motion.div>
    </div>
  );
}
