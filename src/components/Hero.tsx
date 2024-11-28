'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const splitTextRef = useRef<any>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    splitTextRef.current = new SplitType(titleRef.current, {
      types: 'words,chars',
      tagName: 'span'
    });

    const animation = gsap.from(splitTextRef.current.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 1.5,
      ease: "power4.out",
      delay: 1.5
    });

    return () => {
      animation.kill();
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);

  return (
    <section className="min-h-screen pt-32">
      <div className="w-full">
        <h1 
          ref={titleRef}
          className="font-bebas text-[clamp(80px,12vw,180px)] leading-[0.9] tracking-[-0.02em] px-8"
        >
          <div className="flex flex-wrap mb-4">
            <span className="mr-[0.2em]">CRAFTING</span>
            <span>ELEGANT</span>
          </div>
          <div className="flex flex-wrap mb-4">
            <span className="mr-[0.2em]">PERSONALIZED</span>
            <span>SOLUTIONS</span>
          </div>
          <div className="flex flex-wrap">
            <span className="mr-[0.2em]">TO</span>
            <span className="mr-[0.2em]">BRING</span>
            <span className="mr-[0.2em]">IDEAS</span>
            <span className="mr-[0.2em]">TO</span>
            <span>LIFE</span>
          </div>
        </h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-8 text-lg tracking-wider px-8"
        >
          <TypewriterText text="> SCROLL TO EXPLORE" delay={150} />
        </motion.div>
      </div>
    </section>
  );
}
