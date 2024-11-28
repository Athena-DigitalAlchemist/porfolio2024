'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { projects } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

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
      <PageWrapper>
        <main className="min-h-screen pt-32">
          <div className="px-8">
            <div className="max-w-7xl mx-auto mb-40">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-32">
                {/* Left Column - Images */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-12"
                >
                  {project.projectImages.map((image, index) => (
                    <div 
                      key={index}
                      className="relative aspect-[4/3] overflow-hidden"
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

                {/* Right Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-12"
                >
                  <div className="sticky top-32">
                    <h1 className="font-bebas text-[72px] leading-[0.9] tracking-[-0.02em] mb-12">
                      {project.title}
                    </h1>
                    <div className="space-y-16">
                      <div className="text-lg">
                        <p>{project.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-12">
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
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
