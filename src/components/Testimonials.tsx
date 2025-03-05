
import React from 'react';
import Container from './Container';

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
          <img 
            src="/lovable-uploads/0375b7cb-72ea-4857-bd3f-eb6f8144134b.png" 
            alt="Cursor Code Editor"
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
