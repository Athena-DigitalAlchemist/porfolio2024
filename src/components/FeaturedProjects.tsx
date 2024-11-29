'use client';

import { projects } from '@/data/siteData'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedProjects() {
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
        {featuredProjects.map((project) => (
          <Link 
            href={`/projects/${project.slug}`}
            key={project.title} 
          >
            <article className="group relative border-t border-black/20 cursor-pointer">
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

                <div 
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[30%] w-[350px] h-[400px] 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover project-image"
                      priority
                    />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
        <div className="border-t border-black/20" />
      </div>
    </div>
  )
}
