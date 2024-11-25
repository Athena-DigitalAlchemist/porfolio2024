'use client';

import { motion } from 'framer-motion';

const servicesRow1 = [
  "Web Design",
  "Brand Identity",
  "UI/UX Design",
  "Web Development",
];

const servicesRow2 = [
  "Digital Strategy",
  "Content Creation",
  "Motion Design",
  "Art Direction",
];

export default function Services() {
  return (
    <section className="py-20 mt-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        {/* First row - Right to Left */}
        <div className="bg-black border-t border-b border-white/20">
          <div className="marquee-container h-[80px] flex items-center">
            <div className="marquee-right-to-left whitespace-nowrap">
              {[...servicesRow1, ...servicesRow1, ...servicesRow1].map((service, index) => (
                <span key={index} className="text-white text-[60px] leading-none mx-8 font-normal inline-block">
                  {service}
                  <span className="text-white/40 mx-8">-</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Second row - Left to Right */}
        <div className="bg-black border-t border-b border-white/20">
          <div className="marquee-container h-[80px] flex items-center">
            <div className="marquee-left-to-right whitespace-nowrap">
              {[...servicesRow2, ...servicesRow2, ...servicesRow2].map((service, index) => (
                <span key={index} className="text-white text-[60px] leading-none mx-8 font-normal inline-block">
                  {service}
                  <span className="text-white/40 mx-8">-</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 