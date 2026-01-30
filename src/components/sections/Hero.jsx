import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { BUSINESS_INFO } from '../../utils/constants';

const Hero = () => {
  const heroImages = [
    '/laur-with-dog.jpg',
    '/laur-with-dog2.jpg',
    '/laur-with-dog3.jpg',
    '/laur-with-dog5.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-yellow via-brand-peach to-brand-blue pt-24">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-xl">
              Professional Pet Care in Truro
            </h1>
            
            <p className="text-accent text-xl md:text-2xl mb-2">
              {BUSINESS_INFO.owner}
            </p>
            
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Trusted grooming and walking services for your beloved pets in Truro, Cornwall. 
              With over 10 years of experience since {BUSINESS_INFO.established}, your pet's happiness and wellbeing are my top priorities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact" size="large">
                Book Now
              </Button>
              <Button href="#services" variant="secondary" size="large">
                Our Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Laura with a happy dog"
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl"
            >
              <p className="text-3xl font-bold text-brand-yellow">10+</p>
              <p className="text-sm font-semibold mt-1">Years of Experience</p>
              <p className="text-xs text-gray-600 mt-1">Est. {BUSINESS_INFO.established}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
