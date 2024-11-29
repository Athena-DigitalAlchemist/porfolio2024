'use client';

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ProjectImagePreviewProps {
  isVisible: boolean;
  imageSrc: string;
  title: string;
}

export default function ProjectImagePreview({ isVisible, imageSrc, title }: ProjectImagePreviewProps) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { 
    stiffness: 150,
    damping: 10
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 10
  });

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["35%", "65%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["45%", "75%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        top,
        left,
        position: 'absolute',
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 50,
      }}
      initial="initial"
      animate={isVisible ? "whileHover" : "initial"}
      variants={{
        initial: { scale: 0, rotate: 0 },
        whileHover: { scale: 1, rotate: "7.5deg" },
      }}
      transition={{ 
        type: "spring", 
        stiffness: 150,  
        damping: 10,     
        mass: 0.5        
      }}
      className="pointer-events-none w-[350px] h-[400px] relative opacity-0 group-hover:opacity-100 duration-300"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="350px"
        priority
      />
    </motion.div>
  );
}