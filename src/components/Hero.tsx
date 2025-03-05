
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
      <div className="absolute inset-0 -z-10 bg-background"></div>
      <AnimatedGradient variant="hero" intensity="light" />
      
      <Container className="relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <div 
            data-animate 
            className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium text-sm"
          >
            The AI-native code editor
          </div>
          
          {/* Heading */}
          <h1 data-animate className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Code like never before with <span className="gradient-text">AI-powered</span> editing
          </h1>
          
          {/* Subheading */}
          <p 
            data-animate 
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto text-balance"
          >
            Cursor is the AI-first code editor that helps you write, edit, and understand code faster with AI-powered features and automated workflows.
          </p>
          
          {/* CTA Buttons */}
          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              icon={<ChevronRight size={18} />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Download for Mac
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              icon={<Github size={18} />}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              View on GitHub
            </Button>
          </div>
          
          {/* Feature Badge */}
          <div 
            data-animate 
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground/70 text-sm"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Powered by GPT-4 and Code Llama 2
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
