'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const textVariants = {
    initial: { 
      y: 0,
      scale: 1
    },
    hover: { 
      y: -10,
      scale: 1.05,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="min-h-[120vh] pt-[120px] px-8 relative">
      <div className="w-full h-[calc(100vh-120px)] flex flex-col justify-between">
        <h1 className="text-[clamp(80px,12vw,180px)] leading-[0.9] tracking-[-0.02em] font-normal">
          <motion.div 
            className="block mb-4 flex items-center gap-4 cursor-pointer"
            initial="initial"
            whileHover="hover"
          >
            <motion.span variants={textVariants}>CRAFTING</motion.span>
            <motion.span variants={textVariants}>ELEGANT</motion.span>
            <Image 
              src="/images/sparkle.gif"
              alt="sparkle animation"
              width={250}
              height={250}
              className="object-cover"
              unoptimized
              priority
            />
          </motion.div>
          <motion.div 
            className="block mb-4 flex items-center gap-4 cursor-pointer"
            initial="initial"
            whileHover="hover"
          >
            <motion.span variants={textVariants}>PERSONALIZED</motion.span>
            <motion.span variants={textVariants}>SOLUTIONS</motion.span>
          </motion.div>
          <motion.div 
            className="block flex items-center gap-4 cursor-pointer"
            initial="initial"
            whileHover="hover"
          >
            <motion.span variants={textVariants}>TO</motion.span>
            <motion.span variants={textVariants}>BRING</motion.span>
            <Image 
              src="/images/idea.gif"
              alt="idea animation"
              width={250}
              height={250}
              className="object-cover"
              unoptimized
              priority
            />
            <motion.span variants={textVariants}>TO</motion.span>
            <motion.span variants={textVariants}>LIFE</motion.span>
          </motion.div>
        </h1>
        
        <p className="text-[18px] tracking-[-0.02em] mb-8">
          Roll to explore
        </p>
      </div>
    </section>
  );
}
