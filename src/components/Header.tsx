'use client';

import Link from 'next/link';
import Image from 'next/image';
import TypewriterTagline from './TypewriterTagline';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50">
      <div className="grid grid-cols-[120px,300px,1fr,auto] h-[60px] border-b border-black">
        <Link href="/" className="text-[14px] border-r border-black p-4 flex items-center justify-center h-[60px]">
          <Image
            src="/logo/Logo.svg"
            alt="Athena logo"
            width={30}
            height={30}
            className="h-[30px] w-auto"
            priority
          />
        </Link>
        
        <div className="border-r border-black h-[60px] flex items-center px-4">
          <TypewriterTagline />
        </div>

        <div className="border-r border-black h-[60px]"></div>

        <div className="flex items-center h-[60px]">
          <Link href="/projectIndex" className="text-[14px] h-full flex items-center px-8 hover:text-gray-500 transition-colors">
            index
          </Link>
          <Link href="/about" className="text-[14px] h-full flex items-center px-8 hover:text-gray-500 transition-colors">
            about
          </Link>
          <Link href="/store" className="text-[14px] h-full flex items-center px-8 hover:text-gray-500 transition-colors">
            store
          </Link>
          <a 
            href="mailto:your.email@example.com" 
            className="text-[14px] h-[40px] flex items-center px-8 bg-black text-white my-auto hover:bg-gray-800 transition-colors"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;