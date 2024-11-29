'use client';

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectLinkProps {
  title: string;
  type: string;
  job: string;
  year: string;
  imageSrc: string;
  slug: string;
}

export default function ProjectLink({ title, type, job, year, imageSrc, slug }: ProjectLinkProps) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative border-t border-black/20"
    >
      <Link href={`/projects/${slug}`}>
        <div className="px-8 py-4">
          <div className="flex items-start justify-between">
            <div>
              <motion.h2 
                className="font-bebas text-[24px] tracking-wide"
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
              >
                {title}
              </motion.h2>
              <p className="font-bebas text-[13px] tracking-wide">
                {type}
              </p>
            </div>
            
            <div className="flex items-center space-x-12">
              <div>
                <p className="font-bebas text-[13px] tracking-wide">{job}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bebas text-[13px] tracking-wide">{year}</p>
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

          <motion.div
            style={{
              top,
              left,
              position: 'absolute',
              translateX: "-50%",
              translateY: "-50%",
              zIndex: 0,
            }}
            variants={{
              initial: { scale: 0, rotate: "-12.5deg" },
              whileHover: { scale: 1, rotate: "12.5deg" },
            }}
            transition={{ type: "spring" }}
            className="pointer-events-none w-[350px] h-[400px] relative"
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-lg"
              sizes="350px"
              priority
            />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
} 