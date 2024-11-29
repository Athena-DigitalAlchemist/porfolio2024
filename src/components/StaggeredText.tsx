'use client';

import { motion } from "framer-motion";

interface StaggeredTextProps {
  text: string;
  className?: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

export default function StaggeredText({ text, className = "" }: StaggeredTextProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden ${className}`}
    >
      <div>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
} 