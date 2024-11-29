'use client';

import { projects } from '@/data/siteData'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ProjectImagePreview from './ProjectImagePreview';

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const featuredProjects = projects.slice(0, 5);

  return (
    <div className="mt-32">
      <div className="px-8 flex justify-between items-baseline">
        <div className="flex items-baseline gap-2">
          <h1 className="font-bebas text-[24px]">FEATURED PROJECTS</h1>
          <span className="font-bebas text-[24px] text-[#666666]">(05)</span>
        </div>
        <Link 
          href="/projectIndex" 
          className="font-bebas text-[13px] tracking-wide hover:opacity-60 transition-opacity flex items-center gap-2"
        >
          VIEW ALL PROJECTS
          <Image 
            src="/icons/link.png" 
            alt="Arrow" 
            width={16} 
            height={16} 
            className="w-4 h-4"
          />
        </Link>
      </div>
      
      <div className="mt-16">
        {featuredProjects.map((project, index) => (
          <Link 
            href={`/projects/${project.slug}`}
            key={project.title}
            className="group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <article className="relative border-t border-black/20">
              <div className="px-8 py-4">
                <div className="flex items-start justify-between">
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
                </div>

                <ProjectImagePreview 
                  isVisible={hoveredIndex === index}
                  imageSrc={project.featuredImage}
                  title={project.title}
                />
              </div>
            </article>
          </Link>
        ))}
        <div className="border-t border-black/20" />
      </div>
    </div>
  )
}
