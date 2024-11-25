'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Project One",
    type: "WEBSITE DESIGN",
    year: "2024",
    image: "/images/project1.jpg"
  },
  {
    title: "Project Two",
    type: "BRANDING",
    year: "2024",
    image: "/images/project2.jpg"
  },
  {
    title: "Project Three",
    type: "UI/UX DESIGN",
    year: "2024",
    image: "/images/project3.jpg"
  },
  {
    title: "Project Four",
    type: "DEVELOPMENT",
    year: "2024",
    image: "/images/project4.jpg"
  },
  {
    title: "Project Five",
    type: "WEBSITE DESIGN",
    year: "2024",
    image: "/images/project5.jpg"
  },
  {
    title: "Project Six",
    type: "BRANDING",
    year: "2024",
    image: "/images/project6.jpg"
  },
  {
    title: "Project Seven",
    type: "UI/UX DESIGN",
    year: "2024",
    image: "/images/project7.jpg"
  },
  {
    title: "Project Eight",
    type: "DEVELOPMENT",
    year: "2024",
    image: "/images/project8.jpg"
  },
  {
    title: "Project Nine",
    type: "WEBSITE DESIGN",
    year: "2024",
    image: "/images/project9.jpg"
  },
  {
    title: "Project Ten",
    type: "BRANDING",
    year: "2024",
    image: "/images/project10.jpg"
  },
  {
    title: "Project Eleven",
    type: "UI/UX DESIGN",
    year: "2024",
    image: "/images/project11.jpg"
  },
  {
    title: "Project Twelve",
    type: "DEVELOPMENT",
    year: "2024",
    image: "/images/project12.jpg"
  },
  {
    title: "Project Thirteen",
    type: "WEBSITE DESIGN",
    year: "2024",
    image: "/images/project13.jpg"
  }
];

export default function Projects() {
  const featuredProjects = projects.slice(0, 5);

  return (
    <section className="mt-40">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-20 text-[18px] tracking-wide px-8 flex justify-between items-center"
      >
        <div>Featured Projects [{featuredProjects.length}]</div>
        <Link 
          href="/index" 
          className="text-[14px] tracking-wide hover:text-gray-500 transition-colors"
        >
          View All Projects →
        </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-0 w-full">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-black py-8 grid grid-cols-[1fr,2fr,1fr] items-center group relative hover:bg-black/5 transition-colors cursor-pointer"
          >
            <div className="text-[14px] tracking-wide pl-8">{project.title}</div>
            <div className="text-[14px] tracking-wide text-center">{project.type}</div>
            <div className="text-[14px] tracking-wide text-right pr-8">{project.year}</div>
            
            <div className="project-image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover rounded-sm"
                priority={index < 4}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
