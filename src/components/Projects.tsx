'use client';

import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { projects } from '@/data/siteData';

const generateFluidPath = (width: number, height: number, cursorX: number, intensity: number = 1.5) => {
  // Normalize cursor position to -1 to 1
  const x = Math.max(-1, Math.min(1, cursorX));
  
  // Calculate control points with extreme intensity
  const offset = width * intensity * x;
  const verticalOffset = height * intensity * 0.5;
  
  // Generate path with extreme curves
  return `
    M 0,0
    C ${width/4},${offset} ${width*3/4},${-offset*1.2} ${width},0
    L ${width},${height}
    C ${width*3/4},${height-offset*1.2} ${width/4},${height+offset} 0,${height}
    Z
  `;
};

export default function Projects() {
  const featuredProjects = projects.slice(0, 5);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPosition = Math.max(
        window.innerWidth * 0.3,
        Math.min(e.clientX + 50, window.innerWidth * 0.7)
      );
      
      mouseX.set(xPosition);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (hoveredIndex !== null && imageWrapperRef.current && imageRef.current) {
      // Initial state
      gsap.set([imageWrapperRef.current, imageRef.current], {
        opacity: 0,
        rotateX: 45,
        scale: 0.8,
        transformPerspective: 1000,
        transformOrigin: "center center"
      });

      // Create reveal animation
      const tl = gsap.timeline({
        defaults: { 
          duration: 0.6,
          ease: "power3.out"
        }
      });

      tl.to([imageWrapperRef.current, imageRef.current], {
        opacity: 1,
        rotateX: 0,
        scale: 1,
        stagger: 0.1
      });
    }

    return () => {
      if (imageRef.current && imageWrapperRef.current) {
        gsap.to([imageWrapperRef.current, imageRef.current], {
          opacity: 0,
          rotateX: -45,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.05
        });
      }
    };
  }, [hoveredIndex]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (imageRef.current && imageWrapperRef.current && hoveredIndex !== null) {
        const rect = imageRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        // Generate new fluid path with extreme intensity
        const fluidPath = generateFluidPath(rect.width, rect.height, mouseX * 4);

        // Apply the fluid path with even faster animation
        gsap.to(imageWrapperRef.current, {
          clipPath: fluidPath,
          duration: 0.2,
          ease: "power1.out",
        });

        // Extreme image transformation
        gsap.to(imageRef.current, {
          x: mouseX * 100,
          y: mouseY * 80,
          rotateY: mouseX * 35,
          rotateX: -mouseY * 35,
          scale: 1 + Math.abs(mouseX) * 0.4,
          duration: 0.2,
          ease: "power1.out",
        });
      }
    };

    const handleLeave = () => {
      if (imageRef.current && imageWrapperRef.current && hoveredIndex !== null) {
        // More dramatic reset animation
        gsap.to(imageWrapperRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.3,
          ease: "back.out(1.5)",
        });

        gsap.to(imageRef.current, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.5)",
        });
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [hoveredIndex]);

  const cycleImages = (projectIndex: number) => {
    setCurrentImageIndex((prev) => 
      prev === projects[projectIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.section 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-[-20vh] bg-white pt-40 relative z-1"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-20 text-[18px] tracking-wide px-8 flex justify-between items-center"
      >
        <div className="font-bebas">Featured Projects [{featuredProjects.length}]</div>
        <Link 
          href="/projects"
          className="font-bebas text-[14px] tracking-wide hover:text-gray-500 transition-colors"
        >
          View All Projects →
        </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-0 w-full relative">
        {featuredProjects.map((project, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border-t border-black py-8 grid items-center hover:bg-black/5 transition-colors cursor-pointer ${
                index === featuredProjects.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="px-8 grid grid-cols-[minmax(200px,1fr),minmax(200px,1fr),minmax(150px,1fr),100px] gap-8 items-center">
                <div className="font-bebas text-[14px] tracking-wide cursor-pointer">{project.title}</div>
                <div className="font-bebas text-[14px] tracking-wide">{project.type}</div>
                <div className="font-bebas text-[14px] tracking-wide text-right">{project.job}</div>
                <div className="font-bebas text-[14px] tracking-wide text-right">{project.year}</div>
              </div>
            </motion.div>
          </div>
        ))}

        <AnimatePresence mode="sync">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ 
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                scale: 0.9,
                filter: "brightness(0.3)",
              }}
              animate={{ 
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                scale: 1,
                filter: "brightness(1)",
                transition: {
                  duration: 0.35,
                  clipPath: {
                    duration: 0.35,
                    ease: [0.33, 1, 0.68, 1],
                  },
                  scale: {
                    duration: 0.35,
                    ease: [0.33, 1, 0.68, 1],
                  }
                }
              }}
              exit={{ 
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                scale: 0.9,
                filter: "brightness(0.3)",
                transition: {
                  duration: 0.15,
                  ease: [0.33, 0, 0.67, 0],
                  clipPath: {
                    duration: 0.15,
                    ease: [0.33, 0, 0.67, 0],
                  },
                }
              }}
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
                pointerEvents: 'none',
                zIndex: 50,
                perspective: '1000px'
              }}
            >
              <div
                ref={imageWrapperRef}
                className="relative w-[500px] h-[350px] rounded-sm overflow-hidden bg-black/90 [transform-style:preserve-3d]"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  transformOrigin: "center center",
                }}
              >
                <div
                  ref={imageRef}
                  className="w-full h-full transform-gpu will-change-transform [transform-style:preserve-3d] transition-[filter] duration-300"
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  <Image
                    src={featuredProjects[hoveredIndex].featuredImage}
                    alt={featuredProjects[hoveredIndex].title}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom cursor style when hovering projects */}
      <style jsx global>{`
        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>
    </motion.section>
  );
}
