'use client';

import Link from 'next/link';
import Image from 'next/image';
import TypewriterTagline from './TypewriterTagline';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md">
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
        
        <div className="border-r border-black p-4 h-[60px]">
          <TypewriterTagline />
        </div>

        <div className="border-r border-black h-[60px]"></div>

        <div className="flex items-center h-[60px]">
          <Link href="/index" className="text-[14px] h-full flex items-center px-8">
            index
          </Link>
          <Link href="/about" className="text-[14px] h-full flex items-center px-8">
            about
          </Link>
          <Link href="/store" className="text-[14px] h-full flex items-center px-8">
            store
          </Link>
          <Link 
            href="/contact" 
            className="text-[14px] h-[40px] flex items-center px-8 bg-black text-white my-auto"
          >
            LET'S TALK
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 