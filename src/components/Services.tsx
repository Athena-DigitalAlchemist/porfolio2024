'use client';

import { motion } from 'framer-motion';

const services = [
  "Web Design",
  "Brand Identity",
  "UI/UX Design",
  "Web Development",
  "Digital Strategy",
  "Content Creation",
  // Add more services as needed
];

export default function Services() {
  return (
    <section className="bg-black py-20 mt-40 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="marquee-container">
          <div className="marquee">
            {[...services, ...services].map((service, index) => (
              <span key={index} className="text-white text-[120px] leading-none mx-8 font-normal">
                {service}
                <span className="text-white/40 mx-8">-</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 