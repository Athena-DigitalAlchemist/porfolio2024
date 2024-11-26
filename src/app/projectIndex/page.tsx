'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectImage from '@/components/ProjectImage';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { projects } from '@/components/Projects';

export default function ProjectIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[120px] md:text-[180px] font-bebas leading-none mb-8"
          >
            INDEX
          </motion.h1>
          <div className="font-oswald text-lg mb-20">
            → SCROLL TO EXPLORE ALL PROJECTS
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <ProjectImage 
                        src={project.image} 
                        alt={project.title}
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    
                    <div className="mt-4 space-y-1">
                      <h3 className="font-bebas text-2xl flex items-center">
                        {project.title}
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </h3>
                      <div className="font-oswald text-sm space-x-2">
                        <span>{project.type}</span>
                        <span>•</span>
                        <span>{project.job}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
} 