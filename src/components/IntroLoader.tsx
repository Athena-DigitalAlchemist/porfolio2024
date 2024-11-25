'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

interface IntroLoaderProps {
  onLoadingComplete: () => void;
}

export default function IntroLoader({ onLoadingComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onLoadingComplete(), 500);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <>
      <motion.div 
        className="fixed inset-y-0 left-0 w-1/2 bg-black z-[9999]"
        exit={{
          x: '-100%',
          transition: { 
            duration: 1.2,
            ease: [0.83, 0, 0.17, 1]
          }
        }}
      />
      <motion.div 
        className="fixed inset-y-0 right-0 w-1/2 bg-black z-[9999]"
        exit={{
          x: '100%',
          transition: { 
            duration: 1.2,
            ease: [0.83, 0, 0.17, 1]
          }
        }}
      />
      <motion.div 
        className="fixed inset-0 z-[10000] flex items-center justify-center"
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-12">
          <AnimatedLogo />
          <div className="relative w-[180px]">
            <div className="h-[5px] w-full bg-white/20">
              <motion.div 
                className="h-full bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[14px] text-white">
              {progress}%
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
} 