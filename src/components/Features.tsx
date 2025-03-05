
import React, { useRef, useEffect } from 'react';
import Container from './Container';
import { cn } from '@/lib/utils';
import { 
  Code, 
  LucideIcon, 
  Sparkles, 
  RefreshCw, 
  GitBranch, 
  Zap, 
  Command, 
  Search
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: 'blue' | 'purple' | 'pink';
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  variant = 'blue',
  className
}: FeatureCardProps) => {
  const variantClasses = {
    blue: 'from-cursor-blue/10 to-cursor-blue/5 shadow-cursor-blue/5',
    purple: 'from-cursor-purple/10 to-cursor-purple/5 shadow-cursor-purple/5',
    pink: 'from-cursor-pink/10 to-cursor-pink/5 shadow-cursor-pink/5',
  };
  
  const iconVariants = {
    blue: 'text-cursor-blue',
    purple: 'text-cursor-purple',
    pink: 'text-cursor-pink',
  };
  
  return (
    <div 
      className={cn(
        'group glass-panel rounded-xl overflow-hidden p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-b',
        variantClasses[variant],
        className
      )}
    >
      <div className={cn('p-2 w-12 h-12 rounded-lg flex items-center justify-center bg-white mb-4', iconVariants[variant])}>
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!featuresRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const features = entry.target.querySelectorAll('.feature-card');
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add('animate-scale-in');
                feature.classList.remove('opacity-0');
              }, index * 100);
            });
            
            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(featuresRef.current);
    
    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supercharged Productivity</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Cursor combines the power of AI with a familiar editing experience to make you more productive than ever.
          </p>
        </div>
        
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeatureCard
            className="feature-card opacity-0"
            title="AI Code Editing"
            description="Write, edit, and refactor code faster with AI assistance that understands your codebase."
            icon={Code}
            variant="blue"
          />
          
          <FeatureCard
            className="feature-card opacity-0"
            title="Smart Completion"
            description="Get contextual code completions that go beyond simple snippets to full functions and blocks."
            icon={Sparkles}
            variant="purple"
          />
          
          <FeatureCard
            className="feature-card opacity-0"
            title="Automated Refactoring"
            description="Transform your code with intelligent refactoring that preserves functionality and improves quality."
            icon={RefreshCw}
            variant="pink"
          />
          
          <FeatureCard
            className="feature-card opacity-0"
            title="Git Integration"
            description="Seamlessly manage your repositories with integrated Git features and AI-powered commit messages."
            icon={GitBranch}
            variant="blue"
          />
          
          <FeatureCard
            className="feature-card opacity-0"
            title="Lightning Fast"
            description="Built for speed with native performance and optimized AI response times."
            icon={Zap}
            variant="purple"
          />
          
          <FeatureCard
            className="feature-card opacity-0"
            title="Command Palette"
            description="Access all features and functions quickly with a powerful command palette."
            icon={Command}
            variant="pink"
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
