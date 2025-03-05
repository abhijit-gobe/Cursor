
import React from 'react';
import Container from './Container';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  image,
  className
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        'group relative bg-black/40 rounded-lg overflow-hidden p-8 border border-gray-800/50 transition-all duration-300 hover:border-gray-700',
        className
      )}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 font-mono text-sm mb-8">{description}</p>
        
        <div className="mt-auto">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <Container>
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-5xl font-bold mb-4 text-white">Build software faster</h2>
          <p className="text-base text-gray-400 max-w-2xl font-mono">
            Intelligent, fast, and familiar, Cursor is the best way to code with AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Frontier Intelligence"
            description="Powered by a mix of purpose-built and frontier models, Cursor is smart and fast."
            image="/lovable-uploads/0e5b04e6-9396-4a64-8599-26a2108416cb.png"
          />
          
          <FeatureCard
            title="Feels Familiar"
            description="Import all your extensions, themes, and keybindings in one click."
            image="/lovable-uploads/7a0a5b93-4470-4f04-9687-538da79afdac.png"
          />
          
          <FeatureCard
            title="Privacy Options"
            description="If you enable Privacy Mode, your code is never stored remotely. Cursor is SOC 2 certified."
            image="/lovable-uploads/32a9ea96-4ce6-4010-9a1a-2826778c27a7.png"
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
