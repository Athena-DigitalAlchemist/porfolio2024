'use client';

import { useState, useEffect } from 'react';

const TypewriterTagline = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const fullText1 = '> ATHENA BIKAKI_DIGITAL ALCHEMIST';
  const fullText2 = '> CREATIVE SPIRIT BASED ON EARTH!';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let startSecondLine = false;
    
    const typingInterval = setInterval(() => {
      if (currentIndex1 < fullText1.length) {
        setText1(fullText1.slice(0, currentIndex1 + 1));
        currentIndex1++;
      } else if (!startSecondLine) {
        startSecondLine = true;
      } else if (currentIndex2 < fullText2.length) {
        setText2(fullText2.slice(0, currentIndex2 + 1));
        currentIndex2++;
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="font-bebas text-[12px] leading-[1.2] flex flex-col justify-center">
      <div>
        {text1}
        {text1.length === fullText1.length && text2.length === 0 && (
          <span 
            className={`inline-block w-[2px] h-[12px] bg-black ml-[2px] -mb-[2px] ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
      <div>
        {text2}
        {text2.length > 0 && text2.length < fullText2.length && (
          <span 
            className={`inline-block w-[2px] h-[12px] bg-black ml-[2px] -mb-[2px] ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default TypewriterTagline; 