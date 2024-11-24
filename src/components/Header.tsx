'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-bebas
      ${isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white'}`}>
      <div className="grid grid-cols-[auto,1fr,auto] border-b border-black">
        {/* Logo & Status Section */}
        <div className="flex items-stretch">
          <div className="border-r border-black">
            <Link href="/" className="text-[14px] font-normal px-8 py-6 h-full flex items-center tracking-wide">
              athena.
            </Link>
          </div>
          <div className="border-r border-black">
            <p className="text-[10px] leading-relaxed px-8 py-6 tracking-wide">
              Being creative from Greece.<br />
              Available for freelance work.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-end items-center">
          <div className="flex items-center border-l border-black h-full">
            <Link href="/index" className="text-[14px] tracking-wide hover:text-gray-500 transition-colors px-8 py-6">
              index
            </Link>
            <Link href="/about" className="text-[14px] tracking-wide hover:text-gray-500 transition-colors px-8 py-6">
              about
            </Link>
            <Link href="/store" className="text-[14px] tracking-wide hover:text-gray-500 transition-colors px-8 py-6">
              store
            </Link>
          </div>
          <Link href="/contact" className="text-[14px] tracking-wide bg-black text-white px-6 py-[10px] hover:bg-gray-800 transition-colors my-auto mx-6">
            LET'S TALK
          </Link>
        </div>
      </div>
    </header>
  );
} 