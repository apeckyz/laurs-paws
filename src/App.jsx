import { useEffect, useState } from 'react';
import BackgroundPattern from './components/layout/BackgroundPattern';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import PrivacyPolicy from './components/ui/PrivacyPolicy';
import CookieBanner from './components/ui/CookieBanner';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen">
      <BackgroundPattern />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />
    </div>
  );
}

export default App;
