
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  // Handle page transitions
  useEffect(() => {
    setMounted(true);
    
    // Add cursor tracking for non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const cursorElement = document.querySelector('.custom-cursor');
    
    if (!isTouchDevice && !cursorElement) {
      document.body.classList.add('custom-cursor-active');
    }
    
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);
  
  if (!mounted) {
    return null; // Prevent SSR flash
  }
  
  return (
    <>
      <CustomCursor />
      
      <main className={`min-h-screen relative bg-black transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Index;
