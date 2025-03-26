
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="/" 
          className="text-primary font-medium text-xl tracking-tight"
        >
          Dutt Mandir
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-primary/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#about" className="text-primary/80 hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-primary/80 hover:text-primary transition-colors">
            Contact
          </a>
          <LanguageToggle />
          <Button className="hover-lift">
            Sign In
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full glass overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'
        }`}
      >
        <nav className="container mx-auto px-6 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-primary/80 hover:text-primary py-2 transition-colors"
            onClick={toggleMenu}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="text-primary/80 hover:text-primary py-2 transition-colors"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-primary/80 hover:text-primary py-2 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <div className="py-2">
            <LanguageToggle />
          </div>
          <Button className="w-full">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
