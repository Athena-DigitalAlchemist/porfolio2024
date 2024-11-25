'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedLogo = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 1 }}
      animate={{ 
        scale: 1,
        opacity: 1,
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className="relative"
    >
      <Image
        src="/logo/animated-face.svg"  // Updated to use the white version
        alt="Athena logo"
        width={60}
        height={60}
        priority
        className="h-[60px] w-auto"
      />
    </motion.div>
  );
};

export default AnimatedLogo; 