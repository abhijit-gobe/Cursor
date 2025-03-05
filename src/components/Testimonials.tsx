
import React from 'react';
import Container from './Container';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">      
      <Container>
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-5xl font-bold mb-4 text-white">Tab, tab, tab</h2>
          <p className="text-gray-400 font-mono text-base max-w-2xl">
            Cursor lets you breeze through changes by predicting your next move.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-full rounded-lg overflow-hidden shadow-2xl border border-gray-800/50 mb-16 bg-black/40 p-8">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/20aa4d4b-16bf-4caf-b76b-3af682b5d5b7.png" 
              alt="Cursor AI Triangle" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 bg-white/5 hover:bg-white/10 text-white font-medium rounded-md transition-all"
          >
            See more features
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
