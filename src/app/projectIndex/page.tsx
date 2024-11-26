'use client';

import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/siteData';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

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
  const [view, setView] = useState<'list' | 'accordion'>('list');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (view !== 'accordion') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: "-5% 0px -95% 0px",
        threshold: [0.05]
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [view]);

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
            <div className="flex justify-between items-start">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-light max-w-2xl text-black"
              >
                A curated collection of my design projects, showcasing my approach to creating thoughtful and impactful digital experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[14px] tracking-wide flex items-center gap-8"
              >
                <span className="text-black">VIEW:</span>
                <button 
                  onClick={() => setView('list')}
                  className={`transition-colors ${view === 'list' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
                >
                  LIST
                </button>
                <button 
                  onClick={() => setView('accordion')}
                  className={`transition-colors ${view === 'accordion' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
                >
                  ACCORDION
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {view === 'list' ? (
          <section className="mb-40">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-0">
                {projects.map((project, index) => (
                  <Link
                    key={index}
                    href={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
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
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  ref={imageWrapperRef}
                  style={{
                    position: 'fixed',
                    left: springX,
                    top: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    zIndex: 50,
                    pointerEvents: 'none',
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                  }}
                >
                  <motion.div
                    ref={imageRef}
                    className="w-[400px] h-[300px] relative rounded-sm overflow-hidden"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    <Image
                      src={projects[hoveredIndex].featuredImage}
                      alt={projects[hoveredIndex].title}
                      fill
                      className="object-cover"
                      sizes="400px"
                      priority
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ) : (
          <div className="max-w-[1920px] mx-auto px-16 mb-40">
            <div className="flex gap-24">
              {/* Left Side - Fixed Image */}
              <div className="w-[40%] sticky top-40 h-[70vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 w-full h-full bg-neutral-100"
                  >
                    <Image
                      src={projects[activeIndex].featuredImage}
                      alt={projects[activeIndex].title}
                      fill
                      className="object-cover"
                      sizes="40vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Side - Scrollable Content */}
              <div className="w-[60%]">
                <div className="relative">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      ref={el => projectRefs.current[index] = el}
                      className={`min-h-screen flex ${index === 0 ? 'items-start pt-8' : 'items-center'}`}
                    >
                      <motion.div 
                        initial={false}
                        animate={{
                          opacity: index === activeIndex ? 1 : 0.3,
                          y: index === activeIndex ? 0 : 20,
                          scale: index === activeIndex ? 1 : 0.98,
                        }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.25, 0.1, 0.25, 1],
                          opacity: { duration: 0.4 },
                          y: { duration: 0.4 },
                          scale: { duration: 0.4 }
                        }}
                        className="space-y-8 w-full"
                      >
                        <div>
                          <motion.h2 
                            initial={false}
                            animate={{
                              opacity: index === activeIndex ? 1 : 0.3,
                            }}
                            transition={{ duration: 0.4 }}
                            className="text-[2.5rem] font-light mb-4 text-black"
                          >
                            {project.title}
                          </motion.h2>
                          <motion.div 
                            initial={false}
                            animate={{
                              opacity: index === activeIndex ? 1 : 0.3,
                            }}
                            transition={{ duration: 0.4 }}
                            className="text-lg font-light text-black"
                          >
                            <span>{project.type}</span>
                            <span className="mx-3">—</span>
                            <span>{project.year}</span>
                          </motion.div>
                        </div>

                        {project.description && (
                          <motion.p 
                            initial={false}
                            animate={{
                              opacity: index === activeIndex ? 1 : 0,
                              y: index === activeIndex ? 0 : 10,
                            }}
                            transition={{ 
                              duration: 0.4,
                              delay: index === activeIndex ? 0.1 : 0 
                            }}
                            className="text-xl font-light leading-relaxed max-w-2xl text-black"
                          >
                            {project.description}
                          </motion.p>
                        )}

                        <motion.div
                          initial={false}
                          animate={{
                            opacity: index === activeIndex ? 1 : 0,
                            y: index === activeIndex ? 0 : 10,
                          }}
                          transition={{ 
                            duration: 0.4,
                            delay: index === activeIndex ? 0.2 : 0 
                          }}
                        >
                          <Link 
                            href={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-block group mt-4"
                          >
                            <span className="text-lg text-black group-hover:text-black transition-colors font-light">
                              View Project 
                              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                                →
                              </span>
                            </span>
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}