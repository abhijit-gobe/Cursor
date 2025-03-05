
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import Container from './Container';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: 'PRICING', href: '#pricing' },
  { label: 'FEATURES', href: '#features' },
  { label: 'OPEN SOURCE', href: '#opensource' },
  { label: 'AI-JS', href: '#ai-js' },
  { label: 'DOCS', href: '#docs' },
  { label: 'GITHUB', href: 'https://github.com', isExternal: true },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo py-4',
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-white font-semibold flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
              CURSOR
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'text-xs font-medium transition-colors hover:text-white',
                  'text-gray-400'
                )}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="primary"
              size="sm"
              className="bg-white hover:bg-gray-200 text-black text-xs"
            >
              SIGN IN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg bg-background/80 text-foreground border border-border"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/98 backdrop-blur-lg transform transition-transform duration-300 ease-out-expo md:hidden pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <Container>
          <nav className="flex flex-col space-y-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium p-2 -mx-2 rounded-lg hover:bg-gray-900 transition-colors text-gray-300"
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button
              variant="primary" 
              size="lg"
              className="mt-4 w-full bg-white text-black"
            >
              SIGN IN
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
