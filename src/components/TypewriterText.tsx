'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  direction?: 'ltr' | 'rtl';
}

export default function TypewriterText({ text = '', direction = 'ltr' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    let currentIndex = direction === 'ltr' ? 0 : text.length - 1;
    
    const typingInterval = setInterval(() => {
      if (direction === 'ltr') {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayText(text.slice(currentIndex));
          currentIndex--;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
        }
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, direction]);

  if (!text) return null;

  return (
    <div className={`inline-block font-oswald ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
      {displayText}
      <span 
        className={`inline-block w-[2px] h-[14px] bg-white ml-[2px] -mb-[2px] ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
} 