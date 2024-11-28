'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect, useMemo } from 'react';
import { projects } from '@/data/siteData';
import gsap from 'gsap';

export default function FeaturedProjects() {
  const featuredProjects = useMemo(() => projects.slice(0, 5), []);
  const featuredCount = Math.min(projects.length, 5).toString().padStart(2, '0');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadingStates, setLoadingStates] = useState<boolean[]>(new Array(5).fill(true));
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex !== null && imageWrapperRefs.current[hoveredIndex] && imageRefs.current[hoveredIndex]) {
      const wrapper = imageWrapperRefs.current[hoveredIndex];
      const image = imageRefs.current[hoveredIndex];

      gsap.set([wrapper, image], {
        opacity: 0,
        y: 20,
        scale: 0.95
      });

      const tl = gsap.to([wrapper, image], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1
      });

      return () => {
        tl.kill();
      };
    }
  }, [hoveredIndex]);

  const handleImageLoad = (index: number) => {
    setLoadingStates(prev => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white py-32"
    >
      <div className="px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-[32px] md:text-[48px] leading-none tracking-wide mb-16"
        >
          Featured Projects
          <span className="text-2xl opacity-60">({featuredCount})</span>
        </motion.h2>
      </div>
      
      <div className="w-full">
        {featuredProjects.map((project, index) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.slug}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="text-black"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-black/20 group"
            >
              <div className="px-8 py-4 relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start relative z-10">
                  <div className="space-y-0.5 mb-2 md:mb-0">
                    <h3 className="font-bebas text-[24px] tracking-wide">
                      {project.title}
                    </h3>
                    <p className="font-bebas text-[13px] tracking-wide">
                      {project.type}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 md:space-x-12">
                    <div>
                      <p className="font-bebas text-[13px] tracking-wide">
                        {project.job}
                      </p>
                    </div>
                    <div>
                      <p className="font-bebas text-[13px] tracking-wide">
                        {project.year}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Preview - Hidden on Mobile */}
                {hoveredIndex === index && (
                  <div 
                    ref={el => {
                      if (el) imageWrapperRefs.current[index] = el;
                    }}
                    className="hidden md:block absolute right-[30%] top-1/2 -translate-y-1/2 w-[350px] h-[400px] overflow-hidden"
                  >
                    <div
                      ref={el => {
                        if (el) imageRefs.current[index] = el;
                      }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={project.featuredImage}
                        alt={project.title}
                        fill
                        className={`object-cover transition-all duration-300 ${
                          loadingStates[index] ? 'scale-110 blur-sm' : 'scale-100 blur-0'
                        }`}
                        sizes="(max-width: 768px) 100vw, 350px"
                        priority
                        onLoadingComplete={() => handleImageLoad(index)}
                      />
                    </div>
                  </div>
                )}

                {/* Mobile Image Preview */}
                <div className="block md:hidden w-full aspect-[16/9] mt-4 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className={`object-cover transition-all duration-300 ${
                        loadingStates[index] ? 'scale-110 blur-sm' : 'scale-100 blur-0'
                      }`}
                      sizes="100vw"
                      priority={index === 0}
                      onLoadingComplete={() => handleImageLoad(index)}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
        <div className="border-t border-black/20" />
      </div>

      <div className="px-8 mt-8 flex justify-end">
        <Link 
          href="/projectIndex"
          className="font-bebas text-[14px] tracking-wide hover:opacity-60 transition-opacity"
        >
          View All Projects →
        </Link>
      </div>
    </motion.section>
  );
}
