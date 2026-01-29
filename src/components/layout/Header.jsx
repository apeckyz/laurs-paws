import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];
  
  return (
    <>
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
              className="lg:hidden p-2 relative z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-brand-yellow z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-8 pb-8">
                <nav className="flex flex-col gap-6 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="font-heading text-2xl font-bold hover:opacity-70 transition-opacity border-b-2 border-brand-black/10 pb-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 mt-8"
                >
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 hover:opacity-70 transition-opacity p-4 bg-white/20 rounded-lg"
                  >
                    <Phone size={20} />
                    <span className="text-base font-semibold">{BUSINESS_INFO.phone}</span>
                  </a>
                  <Button 
                    href="#contact" 
                    size="large" 
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
