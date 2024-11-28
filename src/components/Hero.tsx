'use client';

import TypewriterText from './TypewriterText';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32">
      <div className="w-full">
        <h1 className="font-bebas text-[clamp(80px,12vw,180px)] leading-[0.9] tracking-[-0.02em] px-8">
          <div className="flex flex-wrap mb-4">
            <span className="mr-[0.2em]">CRAFTING</span>
            <span>ELEGANT</span>
          </div>
          <div className="flex flex-wrap mb-4">
            <span className="mr-[0.2em]">PERSONALIZED</span>
            <span>SOLUTIONS</span>
          </div>
          <div className="flex flex-wrap">
            <span className="mr-[0.2em]">TO</span>
            <span className="mr-[0.2em]">BRING</span>
            <span className="mr-[0.2em]">IDEAS</span>
            <span className="mr-[0.2em]">TO</span>
            <span>LIFE</span>
          </div>
        </h1>
        <div className="mt-8 text-lg tracking-wider px-8">
          <TypewriterText text="> SCROLL TO EXPLORE" delay={150} />
        </div>
      </div>
    </section>
  );
}
