const Logo = ({ size = 'large', className = '' }) => {
  const sizes = {
    small: 'h-24',
    medium: 'h-20',
    large: 'h-32',
    hero: 'h-48'
  };
  
  return (
    <img 
      src="/lpaws-logo.png" 
      alt="Laur's Paws - Professional Pet Grooming & Walking Services"
      className={`${sizes[size]} w-auto ${className}`}
    />
  );
};

export default Logo;
