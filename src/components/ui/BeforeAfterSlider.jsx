import { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = ({ beforeImage, afterImage, alt = "Before and After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleMove = (e) => {
    if (!isDragging && e.type !== 'click') return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };
  
  return (
    <div 
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg cursor-col-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onClick={handleMove}
    >
      <img 
        src={afterImage} 
        alt={`${alt} - After`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`${alt} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 10L4 10M4 10L7 7M4 10L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13 10L16 10M16 10L13 7M16 10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute top-4 left-4 bg-brand-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-bold">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-brand-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-bold">
        AFTER
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
