
import React, { useEffect, useRef } from 'react';
import Container from './Container';
import Button from './Button';
import AnimatedGradient from './AnimatedGradient';
import { ChevronRight, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Staggered animation for hero elements
    const elements = textRef.current?.querySelectorAll('[data-animate]');
    
    if (elements) {
      elements.forEach((element, index) => {
        const el = element as HTMLElement;
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100);
      });
    }
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-black"></div>
      <AnimatedGradient variant="hero" intensity="light" className="opacity-60" />
      
      <Container className="relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 data-animate className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
            The AI Code Editor
          </h1>
          
          {/* Subheading */}
          <p 
            data-animate 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-balance"
          >
            Built to help you progressively accelerate <br />
            solving the most hard coding steps
          </p>
          
          {/* CTA Buttons */}
          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black"
            >
              DOWNLOAD FOR MACOS
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-gray-500 text-white"
            >
              WEB VERSION
            </Button>
          </div>
          
          {/* Code Editor Image */}
          <div data-animate className="relative mx-auto max-w-4xl rounded-lg overflow-hidden shadow-2xl border border-gray-800">
            <img 
              src="/lovable-uploads/0375b7cb-72ea-4857-bd3f-eb6f8144134b.png" 
              alt="Cursor Code Editor"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
