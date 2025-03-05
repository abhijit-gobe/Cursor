
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  variant?: 'blue-purple' | 'purple-pink' | 'blue-pink' | 'hero';
  intensity?: 'light' | 'medium' | 'strong';
  animate?: boolean;
  blendMode?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  variant = 'blue-purple',
  intensity = 'medium', 
  animate = true,
  blendMode
}) => {
  const gradientMap = {
    'blue-purple': 'bg-blue-purple-gradient',
    'purple-pink': 'bg-purple-pink-gradient',
    'blue-pink': 'bg-blue-pink-gradient',
    'hero': 'bg-hero-gradient',
  };

  const intensityMap = {
    light: 'opacity-20',
    medium: 'opacity-40',
    strong: 'opacity-70',
  };

  const blendModeClass = blendMode ? `mix-blend-${blendMode}` : '';

  return (
    <div 
      className={cn(
        'absolute inset-0 -z-10',
        gradientMap[variant],
        intensityMap[intensity],
        animate && 'animate-gradient-shift',
        blendModeClass,
        className
      )}
      style={{ 
        backgroundSize: animate ? '200% 200%' : '100% 100%'
      }}
    />
  );
};

export default AnimatedGradient;
