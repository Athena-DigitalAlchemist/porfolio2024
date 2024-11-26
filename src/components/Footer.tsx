'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full min-h-screen relative">
      <div className="container mx-auto px-4 h-full flex flex-col justify-between">
        {/* Main Content Section */}
        <div className="pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
            {/* Left Side */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-7xl md:text-8xl font-bebas mb-12"
              >
                LET'S WORK TOGETHER — DROP ME A LINE!
              </motion.h2>
              <div className="text-xl md:text-2xl font-oswald">
                <Link 
                  href="mailto:hello@athenabikaki.com"
                  className="email-link hover:opacity-70 transition-opacity"
                >
                  hello@athenabikaki.com
                </Link>
              </div>
            </div>

            {/* Right Side - Social Links */}
            <div className="flex justify-end items-end">
              <nav className="flex gap-8">
                <Link 
                  href="https://instagram.com"
                  target="_blank"
                  className="group text-lg font-bebas hover:opacity-70 transition-opacity"
                >
                  INSTAGRAM →
                </Link>
                <Link 
                  href="https://facebook.com"
                  target="_blank"
                  className="group text-lg font-bebas hover:opacity-70 transition-opacity"
                >
                  FACEBOOK →
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pb-20">
          {/* Divider */}
          <div className="w-full h-px bg-white/20 mb-20" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-oswald opacity-50">
            <div>
              © {new Date().getFullYear()} Athena Bikaki. All Rights Reserved.
            </div>
            <div className="mt-4 md:mt-0">
              Designed & Developed with ♥️ in Greece
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 