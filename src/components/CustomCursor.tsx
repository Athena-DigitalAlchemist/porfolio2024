'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Optimized spring config
  const springConfig = { 
    damping: 35, 
    stiffness: 700, 
    mass: 0.2 
  };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    let rafId: number;
    
    const moveCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth performance
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX - 16);
        mouseY.set(e.clientY - 16);
      });
    };

    // Show cursor after loading
    const timer = setTimeout(() => {
      setIsVisible(true);
      window.addEventListener('mousemove', moveCursor);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', moveCursor);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div className="w-8 h-8 bg-white rounded-full" />
    </motion.div>
  );
} 