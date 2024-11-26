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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[120px] md:text-[180px] font-bebas leading-none mb-8"
          >
            LET'S WORK TOGETHER
            <br />
            <span className="text-[40px] md:text-[60px] block mt-4">— DROP ME A LINE!</span>
          </motion.h2>

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
          {/* Red Line */}
          <div className="w-full h-[2px] bg-red-600 mb-8" />
          
          {/* Credits with Typewriter Effect */}
          <div className="flex justify-between items-center text-sm">
            <TypewriterText 
              text="> ATHENA BIKAKI_DIGITAL ALCHEMIST" 
              direction="ltr"
            />
            <TypewriterText 
              text="> ALL RIGHTS RESERVED - 2024" 
              direction="rtl"
            />
          </div>
        </div>
      </div>
    </footer>
  );
} 