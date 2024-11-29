'use client';

import { projects } from '@/data/siteData';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState, useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function ProjectIndexPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageRefs] = useState<Array<HTMLDivElement | null>>([]);
  const [wrapperRefs] = useState<Array<HTMLDivElement | null>>([]);

  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    imageRefs[index] = el;
  };

  const setWrapperRef = (el: HTMLDivElement | null, index: number) => {
    wrapperRefs[index] = el;
  };

  return (
    <>
      <Header />
      <PageWrapper>
        <main className="pt-32 pb-20">
          {/* Header Section */}
          <div className="px-8 mb-32">
            <h1 className="font-bebas text-[120px] leading-none mb-8">INDEX</h1>
            <p className="text-lg max-w-2xl">
              A collection of selected projects that showcase my expertise in UI/UX design, 
              web development, and brand identity. Each project represents a unique challenge 
              and creative solution.
            </p>
          </div>

          {/* Projects List */}
          <div>
            <div className="px-8 flex items-baseline gap-2 mb-16">
              <h2 className="font-bebas text-[24px]">PROJECT INDEX</h2>
              <span className="font-bebas text-[24px] text-[#666666]">({projects.length.toString().padStart(2, '0')})</span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.map((project, index) => (
                <Link 
                  href={`/projects/${project.slug}`} 
                  key={project.title}
                  className="group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className="relative py-4 border-t border-black/20"
                    variants={itemVariants}
                  >
                    <div className="px-8 flex justify-between items-start">
                      <div>
                        <h2 className="font-bebas text-[24px] tracking-wide">{project.title}</h2>
                        <p className="font-bebas text-[13px] tracking-wide">
                          {project.type}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-12">
                        <div>
                          <p className="font-bebas text-[13px] tracking-wide">{project.job}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-bebas text-[13px] tracking-wide">{project.year}</p>
                          <Image 
                            src="/icons/link.png" 
                            alt="Arrow" 
                            width={16} 
                            height={16} 
                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>

                      {/* Image Preview */}
                      {hoveredIndex === index && (
                        <div 
                          ref={(el) => setWrapperRef(el, index)}
                          className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[30%] w-[350px] h-[400px] 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                        >
                          <div
                            ref={(el) => setImageRef(el, index)}
                            className="relative w-full h-full overflow-hidden"
                          >
                            <Image
                              src={project.featuredImage}
                              alt={project.title}
                              fill
                              className="object-cover project-image"
                              sizes="350px"
                              priority
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Link>
              ))}
              <div className="border-t border-black/20" />
            </motion.div>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}