
import React from 'react';
import Container from './Container';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const logos = [
    { name: 'Shopify', className: 'opacity-70 hover:opacity-100' },
    { name: 'OpenAI', className: 'opacity-70 hover:opacity-100' },
    { name: 'Replicate', className: 'opacity-70 hover:opacity-100' },
    { name: 'Vercel', className: 'opacity-70 hover:opacity-100' },
    { name: 'Mercury', className: 'opacity-70 hover:opacity-100' },
    { name: 'Samsung', className: 'opacity-70 hover:opacity-100' },
    { name: 'Instacart', className: 'opacity-70 hover:opacity-100' },
    { name: 'Replit', className: 'opacity-70 hover:opacity-100' },
  ];

  return (
    <footer className="bg-black py-16">
      <Container>
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {logos.map((logo) => (
            <div 
              key={logo.name} 
              className={cn("text-white text-sm font-semibold", logo.className)}
            >
              {logo.name}
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Tab, tab, tab</h2>
          <p className="text-gray-400">
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
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Knows your codebase</h2>
          <p className="text-gray-400">
            Get smarter from every function in a file to files on disk.
            The more context, the better it does.
          </p>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Cursor Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
