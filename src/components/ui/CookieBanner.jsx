import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Button from './Button';

const CookieBanner = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 bg-white rounded-xl shadow-2xl p-6 max-w-md z-50 border-2 border-brand-yellow"
        >
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cookie banner"
          >
            <X size={20} />
          </button>

          <div className="flex items-start gap-4 mb-4">
            <div className="bg-brand-yellow bg-opacity-20 rounded-full p-3 flex-shrink-0">
              <Cookie size={28} className="text-brand-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Cookie Notice</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button 
              onClick={handleAccept}
              size="small"
              className="w-full"
            >
              Accept Cookies
            </Button>
            <button
              onClick={handleDecline}
              className="text-sm text-gray-600 hover:text-brand-black transition-colors py-2"
            >
              Decline
            </button>
            <button
              onClick={() => {
                setIsVisible(false);
                onOpenPrivacy();
              }}
              className="text-sm text-brand-black font-semibold hover:underline py-1"
            >
              View Privacy Policy
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
