import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card shadow-custom sticky top-0 z-50">
      <nav className="container-max" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Tekniq Steel - Home">
            <div className="w-10 h-10 mr-2 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">TS</span>
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-primary">Tekniq Steel</span>
              <p className="text-xs text-secondary-600">Structural Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-smooth ${
                  isActive(link.href)
                    ? 'text-primary font-semibold border-b-2 border-accent'
                    : 'text-secondary-600 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-accent hover:bg-accent-600 text-accent-foreground">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-secondary-700" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block ${
                  isActive(link.href) ? 'text-primary font-semibold' : 'text-secondary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full bg-accent hover:bg-accent-600 text-accent-foreground">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Request Quote
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
