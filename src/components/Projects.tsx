'use client';

import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

export default function Projects() {
  const featuredProjects = projects.slice(0, 5);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPosition = Math.max(
        window.innerWidth / 3,
        Math.min(e.clientX + 50, window.innerWidth - 50)
      );
      
      mouseX.set(xPosition);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-[-20vh] bg-white pt-40"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-20 text-[18px] tracking-wide px-8 flex justify-between items-center"
      >
        <div className="font-bebas">Featured Projects [{featuredProjects.length}]</div>
        <Link 
          href="/projects"
          className="font-bebas text-[14px] tracking-wide hover:text-gray-500 transition-colors"
        >
          View All Projects →
        </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-0 w-full relative">
        {featuredProjects.map((project, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border-t border-black py-8 grid items-center hover:bg-black/5 transition-colors cursor-pointer ${
                index === featuredProjects.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="px-8 grid grid-cols-[minmax(200px,1fr),minmax(200px,1fr),minmax(150px,1fr),100px] gap-8 items-center">
                <div className="font-bebas text-[14px] tracking-wide cursor-pointer">{project.title}</div>
                <div className="font-bebas text-[14px] tracking-wide">{project.type}</div>
                <div className="font-bebas text-[14px] tracking-wide text-right">{project.job}</div>
                <div className="font-bebas text-[14px] tracking-wide text-right">{project.year}</div>
              </div>
            </motion.div>
          </div>
        ))}

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key="image-container"
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                x: springX,
                y: springY,
                translateX: '-60%',
                translateY: '-50%',
              }}
              className="z-50 pointer-events-none"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: [0.76, 0, 0.24, 1]
                  }
                }}
                exit={{ 
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.2,
                    ease: [0.76, 0, 0.24, 1]
                  }
                }}
                className="relative w-[500px] h-[350px] rounded-sm overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ 
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: [0.76, 0, 0.24, 1]
                    }
                  }}
                  exit={{
                    scale: 1.2,
                    transition: {
                      duration: 0.3,
                      ease: [0.76, 0, 0.24, 1]
                    }
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={featuredProjects[hoveredIndex].image}
                    alt={featuredProjects[hoveredIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom cursor style when hovering projects */}
      <style jsx global>{`
        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>
    </motion.section>
  );
}
