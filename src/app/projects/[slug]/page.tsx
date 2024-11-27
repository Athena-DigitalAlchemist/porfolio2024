'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { projects } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectPage() {
  const params = useParams();
  const projectSlug = typeof params.slug === 'string' ? params.slug : '';
  
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === projectSlug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Project Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bebas mb-4">{project.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-lg text-gray-600">
                <p>{project.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bebas text-xl mb-2">TYPE</h3>
                  <p>{project.type}</p>
                </div>
                <div>
                  <h3 className="font-bebas text-xl mb-2">YEAR</h3>
                  <p>{project.year}</p>
                </div>
                <div>
                  <h3 className="font-bebas text-xl mb-2">ROLE</h3>
                  <p>{project.job}</p>
                </div>
                {project.link && (
                  <div>
                    <h3 className="font-bebas text-xl mb-2">VISIT</h3>
                    <Link 
                      href={project.link}
                      target="_blank"
                      className="text-black hover:opacity-70 transition-opacity"
                    >
                      Website →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Images */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {project.projectImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </motion.div>

            {/* Right Column - Project Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="sticky top-32">
                <div className="prose prose-lg max-w-none">
                  {/* Add more project details here */}
                  <p className="text-lg text-gray-600">
                    Additional project details and description can go here...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-32 mb-16 flex justify-between items-center"
          >
            <Link 
              href="/projectIndex"
              className="font-bebas text-lg hover:opacity-70 transition-opacity"
            >
              ← Back to Projects
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
