import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorOuterRef.current && cursorInnerRef.current) {
        // Use transform3d for better performance
        cursorOuterRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
        cursorInnerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-5 h-5 border-2 border-black rounded-full pointer-events-none mix-blend-difference z-50"
        style={{ 
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform',
        }}
      />
      <div 
        ref={cursorInnerRef}
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none mix-blend-difference z-50"
        style={{ 
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;