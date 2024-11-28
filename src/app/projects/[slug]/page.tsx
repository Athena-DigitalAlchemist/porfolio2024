'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/siteData';

export default function ProjectPage() {
  const params = useParams();
  const projectSlug = typeof params.slug === 'string' ? params.slug : '';
  const project = projects.find(p => p.slug === projectSlug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 px-4 md:px-8 lg:px-16 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-16">
            {/* Left Column - Images */}
            <div className="space-y-8">
              {project.projectImages.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </motion.div>
              ))}
            </div>

            {/* Right Column - Content */}
            <div className="space-y-12">
              <div className="sticky top-32">
                <h1 className="text-5xl md:text-7xl font-bebas mb-8">{project.title}</h1>
                <div className="space-y-12">
                  <div className="text-lg">
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
