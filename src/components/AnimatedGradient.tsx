
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  variant?: 'blue-purple' | 'purple-pink' | 'blue-pink' | 'hero' | 'rainbow';
  intensity?: 'light' | 'medium' | 'strong';
  animate?: boolean;
  blendMode?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  variant = 'rainbow',
  intensity = 'medium', 
  animate = true,
  blendMode
}) => {
  const gradientMap = {
    'blue-purple': 'bg-gradient-to-r from-blue-600/40 to-purple-600/40',
    'purple-pink': 'bg-gradient-to-r from-purple-600/40 to-pink-600/40',
    'blue-pink': 'bg-gradient-to-r from-blue-600/40 to-pink-600/40',
    'hero': 'bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-purple-500/20',
    'rainbow': 'bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-purple-500/20',
  };

  const intensityMap = {
    light: 'opacity-20',
    medium: 'opacity-30',
    strong: 'opacity-40',
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
