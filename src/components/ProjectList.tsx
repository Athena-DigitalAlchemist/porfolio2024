'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Project One",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2024",
    image: "/images/project1.jpg"
  },
  {
    title: "Project Two",
    type: "BRANDING",
    job: "Freelance",
    year: "2024",
    image: "/images/project2.jpg"
  },
  {
    title: "Project Three",
    type: "UI/UX DESIGN",
    job: "Freelance",
    year: "2024",
    image: "/images/project3.jpg"
  },
  {
    title: "Project Four",
    type: "DEVELOPMENT",
    job: "Freelance",
    year: "2024",
    image: "/images/project4.jpg"
  },
  {
    title: "Project Five",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2024",
    image: "/images/project5.jpg"
  },
  {
    title: "Project Six",
    type: "BRANDING",
    job: "Freelance",
    year: "2024",
    image: "/images/project6.jpg"
  },
  {
    title: "Project Seven",
    type: "UI/UX DESIGN",
    job: "Freelance",
    year: "2024",
    image: "/images/project7.jpg"
  },
  {
    title: "Project Eight",
    type: "DEVELOPMENT",
    job: "Freelance",
    year: "2024",
    image: "/images/project8.jpg"
  },
  {
    title: "Project Nine",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2024",
    image: "/images/project9.jpg"
  },
  {
    title: "Project Ten",
    type: "BRANDING",
    job: "Freelance",
    year: "2024",
    image: "/images/project10.jpg"
  },
  {
    title: "Project Eleven",
    type: "UI/UX DESIGN",
    job: "Freelance",
    year: "2024",
    image: "/images/project11.jpg"
  },
  {
    title: "Project Twelve",
    type: "DEVELOPMENT",
    job: "Freelance",
    year: "2024",
    image: "/images/project12.jpg"
  },
  {
    title: "Project Thirteen",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2024",
    image: "/images/project13.jpg"
  }
];

export default function ProjectList() {
  return (
    <section className="px-8 mt-40">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-20 text-[14px] tracking-wide"
      >
        Index [{projects.length}]
      </motion.div>
      
      <div className="grid grid-cols-1 gap-0">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-black py-8 grid grid-cols-[1fr,2fr,1fr] items-center group relative hover:bg-black/5 transition-colors cursor-pointer"
          >
            <div className="text-[14px] tracking-wide">{project.title}</div>
            <div className="text-[14px] tracking-wide text-center">{project.type}</div>
            <div className="text-[14px] tracking-wide text-right">{project.year}</div>
            
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