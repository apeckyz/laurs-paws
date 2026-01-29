import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
  const cardClasses = `bg-white rounded-xl p-8 shadow-md ${className}`;
  
  if (hoverEffect) {
    return (
      <motion.div
        className={cardClasses}
        whileHover={{ 
          y: -8, 
          boxShadow: '0 12px 24px rgba(0,0,0,0.12)' 
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }
  
  return <div className={cardClasses}>{children}</div>;
};

export default Card;
