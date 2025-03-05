
import React from 'react';
import Container from './Container';
import AnimatedGradient from './AnimatedGradient';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Tab, tab, tab</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cursor lets you breeze through changes by predicting your next move.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl rounded-lg overflow-hidden shadow-2xl border border-gray-800 mb-16">
          <div className="w-full h-[400px] bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg flex flex-col items-center justify-center p-6">
            <div className="mb-6 w-full flex justify-center">
              <img 
                src="/lovable-uploads/f41df384-20a6-4f64-9be2-96c36a7a47ef.png" 
                alt="Colorful 3D cube structure" 
                className="w-64 h-auto object-contain"
              />
            </div>
            <div className="text-gray-400 font-mono text-sm">
              // Cursor's advanced AI understands code context
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-2xl border border-gray-800 p-6 bg-gradient-to-br from-gray-900 to-black">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/69c9180b-a2be-44da-ad57-03d98de6882e.png" 
                alt="Colorful hexagon" 
                className="w-48 h-auto object-contain" 
              />
            </div>
            <h3 className="text-xl font-bold text-white text-center">Global Context</h3>
            <p className="text-gray-400 text-center mt-2">
              Understands your entire codebase for smarter completions
            </p>
          </div>

          <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-2xl border border-gray-800 p-6 bg-gradient-to-br from-gray-900 to-black">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/1c2b54c8-e177-4a70-b52d-fdb3e481c953.png" 
                alt="Colorful sphere" 
                className="w-48 h-auto object-contain" 
              />
            </div>
            <h3 className="text-xl font-bold text-white text-center">Frontier Intelligence</h3>
            <p className="text-gray-400 text-center mt-2">
              Latest AI models power your coding experience
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
