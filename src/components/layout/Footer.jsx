import { Phone, Mail, MapPin, Globe, Instagram, Facebook } from 'lucide-react';
import Logo from '../common/Logo';
import { BUSINESS_INFO } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-brand-yellow relative z-10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo size="small" color="black" />
            <p className="text-accent mt-4 text-sm">
              {BUSINESS_INFO.owner}
            </p>
            <p className="mt-2 text-sm font-semibold">
              {BUSINESS_INFO.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity text-sm"
              >
                <Phone size={16} />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.landline.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity text-sm"
              >
                <Phone size={16} />
                <span>{BUSINESS_INFO.landline}</span>
              </a>
              <a 
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity text-sm"
              >
                <Mail size={16} />
                <span className="break-all">{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Location</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="flex-shrink-0 mt-1" />
              <address className="not-italic">
                {BUSINESS_INFO.address.line1}<br />
                {BUSINESS_INFO.address.line2}<br />
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.county}<br />
                {BUSINESS_INFO.address.postcode}
              </address>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a 
                href={`https://${BUSINESS_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-70 transition-opacity text-sm"
              >
                <Globe size={16} />
                <span>{BUSINESS_INFO.website}</span>
              </a>
              <a 
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-70 transition-opacity text-sm"
              >
                <Instagram size={16} />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>
              <a 
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-70 transition-opacity text-sm"
              >
                <Facebook size={16} />
                <span>{BUSINESS_INFO.facebookHandle}</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-brand-black pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
