const BackgroundPattern = () => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: 'url(/src/assets/patterns/paw-pattern.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '80px 80px'
      }}
    />
  );
};

export default BackgroundPattern;
