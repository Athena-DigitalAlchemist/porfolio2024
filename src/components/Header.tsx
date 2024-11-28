'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TypewriterTagline from './TypewriterTagline';
import { projects } from '@/data/siteData';

const Header = () => {
  const pathname = usePathname();
  const totalProjectCount = projects.length.toString().padStart(2, '0');

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
          <Link 
            href="/projectIndex" 
            className="text-[14px] h-full flex items-center gap-2 px-8"
          >
            index <span className="text-xs opacity-60">({totalProjectCount})</span>
          </Link>
          <Link 
            href="/about" 
            className={`font-bebas text-[14px] tracking-wide ${
              pathname === '/about' ? 'opacity-60' : ''
            }`}
          >
            WHO I AM
          </Link>
          <Link 
            href="/store" 
            className="text-[14px] h-full flex items-center px-8"
          >
            store
          </Link>
          <a 
            href="mailto:your.email@example.com" 
            className="text-[14px] h-[40px] flex items-center px-8 bg-black text-white my-auto"
          >
            LET&apos;S TALK
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;