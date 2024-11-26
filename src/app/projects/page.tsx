'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { projects } from '@/data/siteData';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white pt-32 px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl"
        >
          This is a collection of my design projects, showcasing my skills in web, branding, and graphic design. 
          Feel free to explore and see my creative process in action!
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="group relative">
                {/* Project Number */}
                <div className="absolute -left-8 top-0 text-sm text-gray-500">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Project Info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-medium group-hover:text-gray-400 transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex gap-8 text-gray-400 mt-2 md:mt-0">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Project Image with Reveal Effect */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 80vw"
                      priority={index < 2}
                    />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
