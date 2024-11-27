'use client';

import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/siteData';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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

export default function ProjectIndexPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current && imageWrapperRef.current && hoveredIndex !== null) {
        const rect = imageRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(imageRef.current, {
          x: mouseX * 30,
          y: mouseY * 20,
          rotateY: mouseX * 20,
          rotateX: -mouseY * 20,
          duration: 0.5,
          ease: "power2.out"
        });

        // Update spring animation position
        const moveX = e.clientX;
        const moveY = e.clientY;
        springX.set(moveX);
        springY.set(moveY);
      }
    };

    const handleLeave = () => {
      if (imageRef.current && hoveredIndex !== null) {
        gsap.to(imageRef.current, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [hoveredIndex, springX, springY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - 200);
    mouseY.set(e.clientY - 150);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="w-full py-40 px-16">
          <div className="max-w-[1920px] mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(80px,12vw,180px)] leading-[0.9] tracking-[-0.02em] font-light mb-12 text-black"
            >
              INDEX
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-light max-w-2xl text-black"
            >
              A curated collection of my design projects, showcasing my approach to creating thoughtful and impactful digital experiences.
            </motion.p>
          </div>
        </div>

        {/* Project List */}
        <section className="mb-40">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-0">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onMouseMove={handleMouseMove}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-black py-8 hover:bg-black/5 transition-colors"
                  >
                    <div className="max-w-[1920px] mx-auto px-16 grid grid-cols-[1fr,2fr,1fr] items-center">
                      <div className="text-[14px] tracking-wide">{project.title}</div>
                      <div className="text-[14px] tracking-wide text-center">{project.type}</div>
                      <div className="text-[14px] tracking-wide text-right">{project.year}</div>
                    </div>
                  </motion.div>
                </Link>
              ))}
              <div className="border-t border-black" />
            </div>
          </div>

          {/* Floating Image */}
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
                      src={projects[hoveredIndex].featuredImage}
                      alt={projects[hoveredIndex].title}
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
        </section>
      </main>
      <Footer />
    </>
  );
}