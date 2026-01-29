import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close privacy policy"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="px-6 py-8 space-y-6">
              <section>
                <h3 className="text-xl font-bold mb-3">1. Introduction</h3>
                <p className="text-gray-700 leading-relaxed">
                  Laur's Paws ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">2. Information We Collect</h3>
                <p className="text-gray-700 leading-relaxed mb-2">We may collect the following types of information:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Pet information (name, breed, special requirements)</li>
                  <li>Appointment and booking details</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Website usage data (cookies, IP address, browser type)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">3. How We Use Your Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">We use your information to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Provide and manage our pet grooming and care services</li>
                  <li>Process bookings and appointments</li>
                  <li>Communicate with you about your appointments and our services</li>
                  <li>Send service updates and promotional materials (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">4. Legal Basis for Processing (UK GDPR)</h3>
                <p className="text-gray-700 leading-relaxed">
                  We process your personal data under the following legal bases:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                  <li><strong>Contract:</strong> To fulfill our service agreement with you</li>
                  <li><strong>Legitimate Interest:</strong> To improve our services and communicate with you</li>
                  <li><strong>Consent:</strong> For marketing communications (you can withdraw consent at any time)</li>
                  <li><strong>Legal Obligation:</strong> To comply with UK laws and regulations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">5. Data Sharing and Disclosure</h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell your personal information. We may share your data with:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                  <li>Service providers who assist in our operations (e.g., payment processors)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Professional advisors (accountants, lawyers) when necessary</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">6. Data Retention</h3>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Typically, we keep records for 7 years for tax and accounting purposes.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">7. Your Rights (UK GDPR)</h3>
                <p className="text-gray-700 leading-relaxed mb-2">Under UK data protection law, you have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request erasure of your data</li>
                  <li>Restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">8. Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies to improve your browsing experience. You can manage cookie preferences through our cookie banner or your browser settings.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">9. Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">10. Contact Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="mt-3 text-gray-700">
                  <p><strong>Laur's Paws</strong></p>
                  <p>17 Green Close, Daniel Road</p>
                  <p>Truro, Cornwall, TR1 2DD</p>
                  <p>Email: laurajevans92@hotmail.co.uk</p>
                  <p>Phone: 07446 493344</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">11. Changes to This Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. The latest version will always be available on our website with the effective date noted.
                </p>
              </section>

              <section className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> January 2026
                </p>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicy;
