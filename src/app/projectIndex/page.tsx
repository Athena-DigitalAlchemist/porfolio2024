'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { projects } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import PageWrapper from '@/components/PageWrapper';

export default function ProjectIndexPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imageWrapperRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    imageRefs.current[index] = el;
  };

  const setWrapperRef = (el: HTMLDivElement | null, index: number) => {
    imageWrapperRefs.current[index] = el;
  };

  useEffect(() => {
    if (hoveredIndex !== null && imageWrapperRefs.current[hoveredIndex] && imageRefs.current[hoveredIndex]) {
      const wrapper = imageWrapperRefs.current[hoveredIndex];
      const image = imageRefs.current[hoveredIndex];

      gsap.set([wrapper, image], {
        opacity: 0,
        y: 20,
        scale: 0.95
      });

      gsap.to([wrapper, image], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1
      });
    }
  }, [hoveredIndex]);

  return (
    <>
      <Header />
      <PageWrapper>
        <main className="min-h-screen pt-32">
          <div className="px-8 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[60%]"
            >
              <h1 className="font-bebas text-[128px] leading-[0.9] tracking-[-0.02em] mb-6">
                Index
              </h1>
              <p className="font-bebas text-[18px] tracking-wide">
                This is a collection of my design projects, showcasing my skills in web, 
                branding, and graphic design. Feel free to explore and see my creative 
                process in action!
              </p>
            </motion.div>
          </div>

          <div className="px-8 mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bebas text-[18px] tracking-wide"
            >
              All Projects [{projects.length}]
            </motion.h2>
          </div>
          
          <div className="w-full mb-40">
            {projects.map((project, index) => (
              <Link 
                href={`/projects/${project.slug}`} 
                key={project.slug}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-t border-black/20 group"
                >
                  <div className="px-8 py-4 relative">
                    <div className="flex justify-between items-start relative z-10">
                      <div className="space-y-0.5">
                        <h3 className="font-bebas text-[24px] tracking-wide">
                          {project.title}
                        </h3>
                        <p className="font-bebas text-[13px] tracking-wide">
                          {project.type}
                        </p>
                      </div>
                      <div className="flex items-center space-x-12">
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

                    {/* Updated Image Preview */}
                    {hoveredIndex === index && (
                      <div 
                        ref={(el) => setWrapperRef(el, index)}
                        className="absolute right-[30%] top-1/2 -translate-y-1/2 w-[350px] h-[400px] overflow-hidden"
                      >
                        <div
                          ref={(el) => setImageRef(el, index)}
                          className="w-full h-full relative"
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
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}