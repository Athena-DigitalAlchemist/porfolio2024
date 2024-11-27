'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full min-h-screen relative">
      <div className="container mx-auto px-4 py-20 h-full flex flex-col justify-between">
        {/* Main Content */}
        <div>
          <div className="mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[120px] md:text-[180px] font-bebas leading-none"
            >
              LET&apos;S WORK TOGETHER
            </motion.h1>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[60px] mt-4"
            >
              — DROP ME A LINE!
            </motion.h3>
          </div>

          {/* Contact Links with arrows */}
          <div className="mt-20 mb-40">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-oswald">
              <Link 
                href="mailto:hello@athenabikaki.com"
                className="text-lg md:text-xl hover:opacity-70 transition-opacity"
              >
                HELLO@ATHENABIKAKI.COM
              </Link>
              <Link 
                href="https://instagram.com"
                target="_blank"
                className="text-lg md:text-xl hover:opacity-70 transition-opacity"
              >
                INSTAGRAM →
              </Link>
              <Link 
                href="https://facebook.com"
                target="_blank"
                className="text-lg md:text-xl hover:opacity-70 transition-opacity"
              >
                FACEBOOK →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          {/* Changed from bg-red-600 to bg-white */}
          <div className="w-full h-[2px] bg-white mb-8" />
          
          {/* Credits with Typewriter Effect */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-bebas text-sm">
            <div className="flex flex-col gap-2">
              <TypewriterText text="> ATHENA BIKAKI_DIGITAL ALCHEMIST" delay={50} />
              <TypewriterText text="> ALL RIGHTS RESERVED - 2024" delay={50} />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <Link href="#top" className="hover:opacity-70 transition-opacity">
                BACK TO TOP ↑
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}