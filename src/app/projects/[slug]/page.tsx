'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/siteData';
import PageWrapper from '@/components/PageWrapper';

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-8">
        <h1 className="font-bebas text-4xl mb-4">Project not found</h1>
        <Link href="/projectIndex" className="font-bebas underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <PageWrapper>
        <main className="min-h-screen pt-32 px-4 md:px-8 lg:px-16 mb-40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-16">
              {/* Left Column - Scrollable Images */}
              <div className="space-y-8">
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-gray-50">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                {project.projectImages && project.projectImages.length > 0 && 
                  project.projectImages.map((image, index) => (
                    <div key={index} className="aspect-[3/4] relative overflow-hidden rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-gray-50">
                      <Image
                        src={image}
                        alt={`${project.title} detail ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))
                }
              </div>

              {/* Right Column - Sticky Content */}
              <div className="md:sticky md:top-32 h-fit">
                <div className="space-y-8">
                  <div>
                    <h1 className="font-bebas text-6xl mb-4">{project.title}</h1>
                    <p className="font-bebas text-xl text-gray-600">{project.type}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="font-bebas text-xl">Role:</span>
                      <span className="font-bebas ml-2">{project.job}</span>
                    </div>
                    <div>
                      <span className="font-bebas text-xl">Year:</span>
                      <span className="font-bebas ml-2">{project.year}</span>
                    </div>
                  </div>

                  {project.description && (
                    <div>
                      <h2 className="font-bebas text-2xl mb-4">About</h2>
                      <div className="font-bebas text-lg leading-relaxed space-y-4">
                        {project.description.split('\n\n').map((paragraph, index) => (
                          <p key={index}>
                            {paragraph.split('\n').map((line, lineIndex) => (
                              <span key={lineIndex} className="block">
                                {line}
                              </span>
                            ))}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.link && project.link !== "" && project.link !== "#" && (
                    <div>
                      <h2 className="font-bebas text-2xl mb-4">Visit</h2>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bebas text-lg flex items-center gap-2 hover:opacity-70 transition-opacity"
                      >
                        View Live Project
                        <Image 
                          src="/icons/link.png" 
                          alt="Arrow" 
                          width={16} 
                          height={16} 
                          className="w-4 h-4"
                        />
                      </a>
                    </div>
                  )}

                  <div className="pt-8">
                    <Link 
                      href="/projectIndex"
                      className="font-bebas text-lg hover:opacity-70 transition-opacity flex items-center gap-2"
                    >
                      <Image 
                        src="/icons/link.png" 
                        alt="Arrow" 
                        width={16} 
                        height={16} 
                        className="w-4 h-4 rotate-180"
                      />
                      Back to Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
