import { motion } from 'framer-motion';
import { Scissors, Footprints, Home, Cat } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import { SERVICES } from '../../utils/constants';

const iconMap = {
  Scissors,
  Footprints,
  Home,
  Cat
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="services" className="relative z-10 bg-white section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Our Services"
          subtitle="Professional pet care tailored to your furry friend's needs"
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            const bgColors = ['bg-brand-peach', 'bg-brand-blue', 'bg-brand-yellow', 'bg-brand-peach'];
            
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full flex flex-col items-center text-center">
                  <div className={`${bgColors[index]} bg-opacity-20 rounded-full p-6 mb-6`}>
                    <Icon size={48} strokeWidth={2} className="text-brand-black" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 flex-grow">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
