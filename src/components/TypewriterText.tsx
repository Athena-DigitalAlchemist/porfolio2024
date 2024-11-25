'use client';

import { useState, useEffect } from 'react';

export default function TypewriterText() {
  const [text, setText] = useState('');
  const fullText = '> Scroll to explore_';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="text-[18px] tracking-wider mb-8 font-bebas">
      {text}
      <span 
        className={`inline-block w-[2px] h-[18px] bg-black ml-[2px] -mb-[2px] ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
} 