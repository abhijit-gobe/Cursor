
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false, 
    icon, 
    iconPosition = 'left',
    disabled,
    ...props 
  }, ref) => {
    // Variant styles
    const variantStyles = {
      primary: 'bg-blue-purple-gradient hover:opacity-90 text-white shadow-md hover:shadow-lg',
      secondary: 'bg-secondary text-foreground hover:bg-secondary/80',
      outline: 'border-2 border-primary/20 hover:border-primary/40 text-foreground bg-transparent',
      ghost: 'bg-transparent hover:bg-primary/10 text-foreground',
      link: 'bg-transparent underline-offset-4 hover:underline text-primary hover:text-primary/90 p-0 h-auto',
    };

    // Size styles
    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 h-8',
      md: 'text-sm px-4 py-2 h-10',
      lg: 'text-base px-6 py-2.5 h-12',
    };

    // Disabled and loading states
    const stateStyles = disabled || loading 
      ? 'opacity-70 pointer-events-none' 
      : '';

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'relative font-medium inline-flex items-center justify-center rounded-lg transition-all duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          variantStyles[variant],
          sizeStyles[size],
          stateStyles,
          variant !== 'link' && 'whitespace-nowrap',
          className
        )}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
