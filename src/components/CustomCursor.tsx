
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CustomCursorProps {
  color?: string;
  size?: number;
  ringSize?: number;
  delay?: number;
  showRing?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  color = '#0055FF',
  size = 8,
  ringSize = 36,
  delay = 0.08,
  showRing = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  
  // Position state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add custom cursor active class to body
    document.body.classList.add('custom-cursor-active');
    
    // Remove on cleanup
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Update position state
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Set cursor to visible once we have position data
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    
    // Check for pointer cursors
    const handleElementHover = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        const cursor = computedStyle.getPropertyValue('cursor');
        setIsPointer(cursor === 'pointer');
      }
    };
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    
    // Check for pointer cursors at intervals
    const intervalId = setInterval(handleElementHover, 100);
    
    // Apply direct styles for smoother animation on main cursor dot
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
    
    // Apply delayed movement to ring with requestAnimationFrame for smoother animation
    const animateRing = () => {
      if (cursorRingRef.current) {
        // Calculate new position with lerp (linear interpolation)
        const newX = ring.x + (position.x - ring.x) * delay;
        const newY = ring.y + (position.y - ring.y) * delay;
        
        setRing({ x: newX, y: newY });
        cursorRingRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }
      
      requestAnimationFrame(animateRing);
    };
    
    const animationId = requestAnimationFrame(animateRing);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      clearInterval(intervalId);
      cancelAnimationFrame(animationId);
    };
  }, [delay, isVisible, position, ring]);

  // If on touch device, don't render cursor
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }
  
  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={cn(
          'fixed top-0 left-0 z-[999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />
      
      {/* Cursor ring */}
      {showRing && (
        <div
          ref={cursorRingRef}
          className={cn(
            'fixed top-0 left-0 z-[998] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200',
            isVisible ? 'opacity-100' : 'opacity-0',
            isPointer ? 'scale-150' : 'scale-100'
          )}
          style={{
            width: `${ringSize}px`,
            height: `${ringSize}px`,
            border: `1.5px solid ${color}`,
            borderRadius: '50%',
            willChange: 'transform',
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
