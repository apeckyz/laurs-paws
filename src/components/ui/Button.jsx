import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  href,
  className = ''
}) => {
  const baseStyles = "font-bold uppercase tracking-wide transition-all duration-300 rounded-lg inline-block text-center";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-black hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1",
    secondary: "bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-brand-white"
  };
  
  const sizes = {
    small: "px-6 py-2 text-sm",
    medium: "px-8 py-4 text-base",
    large: "px-10 py-5 text-lg"
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const ButtonContent = () => (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block"
    >
      {children}
    </motion.span>
  );
  
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <ButtonContent />
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      <ButtonContent />
    </button>
  );
};

export default Button;
