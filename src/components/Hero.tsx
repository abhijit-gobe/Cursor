
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
      <AnimatedGradient variant="hero" intensity="light" className="opacity-30" />
      
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
          
          {/* Code Editor Mockup */}
          <div data-animate className="relative mx-auto max-w-4xl rounded-lg overflow-hidden shadow-2xl border border-gray-800">
            <div className="w-full aspect-video bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg">
              <div className="flex items-center p-2 border-b border-gray-800">
                <div className="flex gap-1.5 ml-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-75"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-75"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-75"></div>
                </div>
                <div className="mx-auto text-gray-500 text-xs">editor.js</div>
              </div>
              <div className="p-4 font-mono text-sm text-gray-400 text-left">
                <div className="text-blue-400">function</div> <span className="text-green-400">codeEditor</span>() &#123;<br />
                &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-orange-400">"AI-powered editing"</span>;<br />
                &#125;
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
