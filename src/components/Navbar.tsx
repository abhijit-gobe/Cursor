
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import Container from './Container';
import { Menu, X, ChevronRight, Github } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog', isExternal: true },
  { label: 'GitHub', href: 'https://github.com', isExternal: true },
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
        isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Cursor</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  item.isExternal ? 'text-foreground/70' : 'text-foreground'
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
              size="md"
              icon={<ChevronRight size={16} />}
              iconPosition="right"
            >
              Download Now
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
          'fixed inset-0 z-40 bg-white/98 backdrop-blur-lg transform transition-transform duration-300 ease-out-expo md:hidden pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <Container>
          <nav className="flex flex-col space-y-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium p-2 -mx-2 rounded-lg hover:bg-muted transition-colors"
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
              className="mt-4 w-full"
              icon={<ChevronRight size={16} />}
              iconPosition="right"
            >
              Download Now
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
