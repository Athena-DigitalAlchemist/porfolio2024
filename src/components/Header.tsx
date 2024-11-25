'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 grid grid-cols-[120px,300px,1fr,auto] h-[60px] border-b border-black bg-white">
      <Link href="/" className="text-[14px] border-r border-black p-4 flex items-center justify-center">
        athena.
      </Link>
      
      <div className="text-[12px] border-r border-black p-4 leading-[1.2] flex flex-col justify-center">
        Being creative from Greece.
        <br />
        Available for freelance work.
      </div>

      <div className="border-r border-black"></div>

      <div className="flex items-center h-full border-r border-black">
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
          className="text-[14px] h-full flex items-center px-8 bg-black text-white"
        >
          LET'S TALK
        </Link>
      </div>
    </header>
  );
} 