import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import OpeningTimes from './OpeningTimes';
import { BUSINESS_INFO } from '../../utils/constants';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: BUSINESS_INFO.phone,
      href: `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`,
      color: 'bg-brand-yellow'
    },
    {
      icon: Phone,
      label: 'Landline',
      value: BUSINESS_INFO.landline,
      href: `tel:${BUSINESS_INFO.landline.replace(/\s/g, '')}`,
      color: 'bg-brand-peach'
    },
    {
      icon: Mail,
      label: 'Email',
      value: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      color: 'bg-brand-blue'
    }
  ];
  
  return (
    <section id="contact" className="relative z-10 bg-white section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Get In Touch"
          subtitle="Ready to book an appointment? Contact us today!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4 flex flex-col">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="flex items-center gap-4 hover:shadow-xl transition-shadow">
                    <div className={`${method.color} bg-opacity-20 rounded-full p-4`}>
                      <Icon size={32} className="text-brand-black" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1">{method.label}</p>
                      <p className="text-lg font-bold break-all">{method.value}</p>
                    </div>
                  </Card>
                </motion.a>
              );
            })}
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="flex items-start gap-4">
                <div className="bg-brand-yellow bg-opacity-20 rounded-full p-4 flex-shrink-0">
                  <MapPin size={32} className="text-brand-black" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Visit Us</p>
                  <address className="not-italic text-base">
                    {BUSINESS_INFO.address.line1}<br />
                    {BUSINESS_INFO.address.line2}<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.county}<br />
                    {BUSINESS_INFO.address.postcode}
                  </address>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 mt-auto"
            >
              <Button 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </Button>
              <Button 
                href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <OpeningTimes />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-brand-yellow via-brand-peach to-brand-blue rounded-xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Give your pet the care they deserve. Contact us today to schedule an appointment 
            or to learn more about our services.
          </p>
          <Button 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
            size="large"
          >
            Call Now: {BUSINESS_INFO.phone}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
