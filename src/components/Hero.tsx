'use client';

import StaggeredText from './StaggeredText';
import TypewriterText from './TypewriterText';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32">
      <div className="w-full">
        <h1 className="font-bebas text-[clamp(80px,12vw,180px)] leading-[0.9] tracking-[-0.02em] px-8" data-hover="true">
          <div className="flex flex-wrap mb-4">
            <div className="mr-[0.2em]">
              <StaggeredText text="CRAFTING" />
            </div>
            <div>
              <StaggeredText text="ELEGANT" />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="mr-[0.2em]">
              <StaggeredText text="PERSONALIZED" />
            </div>
            <div>
              <StaggeredText text="SOLUTIONS" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mr-[0.2em]">
              <StaggeredText text="TO" />
            </div>
            <div className="mr-[0.2em]">
              <StaggeredText text="BRING" />
            </div>
            <div className="mr-[0.2em]">
              <StaggeredText text="IDEAS" />
            </div>
            <div className="mr-[0.2em]">
              <StaggeredText text="TO" />
            </div>
            <div>
              <StaggeredText text="LIFE" />
            </div>
          </div>
        </h1>
        <div className="mt-8 text-lg tracking-wider px-8">
          <TypewriterText text="> SCROLL TO EXPLORE" delay={150} />
        </div>
      </div>
    </section>
  );
}
