'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  direction?: 'ltr' | 'rtl';
  delay?: number;
}

export default function TypewriterText({ 
  text = '', 
  direction = 'ltr',
  delay = 50 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!text) return;

    let currentIndex = direction === 'ltr' ? 0 : text.length - 1;
    
    const typingInterval = setInterval(() => {
      if (direction === 'ltr') {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayText(text.slice(currentIndex));
          currentIndex--;
        } else {
          clearInterval(typingInterval);
        }
      }
    }, delay);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, direction, delay]);

  if (!text) return null;

  return (
    <div className={`inline-block font-bebas ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
      {displayText}
      <span 
        className={`inline-block w-[2px] h-[14px] bg-white ml-[2px] -mb-[2px] ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}