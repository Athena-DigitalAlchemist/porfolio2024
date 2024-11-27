'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const textVariants = {
    initial: { 
      y: 0,
      scale: 1
    },
    hover: { 
      y: -5,
      scale: 1.02,
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
            className="block mb-4 flex items-center gap-4 cursor-pointer overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.span variants={textVariants} className="inline-block">CRAFTING</motion.span>
            <motion.span variants={textVariants} className="inline-block">ELEGANT</motion.span>
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
            className="block mb-4 flex items-center gap-4 cursor-pointer overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.span variants={textVariants} className="inline-block">PERSONALIZED</motion.span>
            <motion.span variants={textVariants} className="inline-block">SOLUTIONS</motion.span>
          </motion.div>
          <motion.div 
            className="block flex items-center gap-4 cursor-pointer overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.span variants={textVariants} className="inline-block">TO</motion.span>
            <motion.span variants={textVariants} className="inline-block">BRING</motion.span>
            <Image 
              src="/images/idea.gif"
              alt="idea animation"
              width={250}
              height={250}
              className="object-cover"
              unoptimized
              priority
            />
            <motion.span variants={textVariants} className="inline-block">TO</motion.span>
            <motion.span variants={textVariants} className="inline-block">LIFE</motion.span>
          </motion.div>
        </h1>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mb-8 text-lg tracking-wider"
        >
          <TypewriterText text="> SCROLL TO EXPLORE" delay={100} />
        </motion.h3>
      </div>
    </section>
  );
}
