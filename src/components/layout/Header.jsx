import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../ui/Button';
import { BUSINESS_INFO } from '../../utils/constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-yellow shadow-lg py-2' : 'bg-brand-yellow py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex-shrink-0">
            <Logo size="small" color="black" />
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-heading text-sm font-bold hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
            <Button href="#contact" size="small">
              Book Now
            </Button>
          </div>
          
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t-2 border-brand-black pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-heading text-base font-bold hover:opacity-70 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                <Phone size={18} />
                <span className="text-sm font-semibold">{BUSINESS_INFO.phone}</span>
              </a>
              <Button href="#contact" size="small" className="w-full">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
