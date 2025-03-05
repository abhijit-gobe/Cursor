
import React from 'react';
import Container from './Container';
import { cn } from '@/lib/utils';
import { Circle, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon,
  className
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        'group border border-gray-800 bg-black/40 rounded-lg overflow-hidden p-6 transition-all duration-300 hover:border-gray-700',
        className
      )}
    >
      <div className="p-2 w-16 h-16 mb-4 flex items-center justify-center">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Build software faster</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Intelligent. Type less. Smarter. Cursor is the next way to code with AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Frontier Intelligence"
            description="Powered by a mix of language models. Cursor is open source!"
            icon={
              <div className="relative w-12 h-12">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/50 to-pink-500/50 transform -rotate-12"></div>
                <div className="absolute top-2 left-2 w-10 h-10 bg-gradient-to-br from-green-500/50 to-blue-500/50 transform rotate-12"></div>
              </div>
            }
          />
          
          <FeatureCard
            title="Feels Familiar"
            description="Based off VS Code architecture. Supports all your extensions."
            icon={
              <div className="grid grid-cols-2 gap-1">
                <div className="w-5 h-5 bg-blue-500/50"></div>
                <div className="w-5 h-5 bg-pink-500/50"></div>
                <div className="w-5 h-5 bg-yellow-500/50"></div>
                <div className="w-5 h-5 bg-green-500/50"></div>
              </div>
            }
          />
          
          <FeatureCard
            title="Privacy Options"
            description="If you don't choose Privacy Mode, model training will help improve our product."
            icon={
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-red-500/50"></div>
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
