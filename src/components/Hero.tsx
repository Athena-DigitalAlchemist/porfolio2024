'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen pt-[120px] px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h1 className="text-[clamp(80px,8vw,120px)] leading-[0.9] tracking-[-0.02em] font-normal">
          A one-person creative studio specializing in web design and branding. Crafting elegant, personalized solutions to bring ideas to life with care and creativity.
        </h1>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[18px] mt-5 tracking-[-0.02em]"
      >
        Scroll to explore
      </motion.p>
    </section>
  );
}
