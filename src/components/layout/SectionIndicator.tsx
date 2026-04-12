import React from 'react';
import { motion } from 'framer-motion';

interface SectionIndicatorProps {
  activeSection: number;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({ activeSection }) => {
  const sections = [0, 1, 2, 3, 4, 5]; // 6 sections total
  
  // 0: Hero (Dark), 3: Mission (Dark), 5: Footer (Dark)
  const isDarkSection = activeSection === 0 || activeSection === 3 || activeSection >= 5;

  const getLabel = (idx: number) => {
    switch(idx) {
      case 0: return 'Home';
      case 1: return 'Activities';
      case 2: return 'News';
      case 3: return 'Mission';
      case 4: return 'Media Hub';
      case 5: return 'Footer';
      default: return '';
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8 hidden md:flex">
      {sections.map((idx) => (
        <a
          key={idx}
          href={`#section-${idx}`}
          className="group relative flex items-center justify-center w-6 h-6"
        >
          {/* Label tooltip */}
          <span className={`absolute right-full mr-4 px-2 py-0.5 whitespace-nowrap text-[10px] font-black tracking-widest uppercase transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${isDarkSection ? 'text-white/60' : 'text-primary/60'}`}>
            {getLabel(idx)}
          </span>

          <div 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              activeSection === idx 
                ? 'scale-[2.5] bg-gold shadow-[0_0_15px_rgba(200,169,110,0.6)]' 
                : isDarkSection ? 'bg-white/60 group-hover:bg-white' : 'bg-primary/30 group-hover:bg-primary'
            }`} 
          />
          
          {activeSection === idx && (
            <motion.div 
              layoutId="indicator-ring"
              className="absolute inset-0 rounded-full border border-gold/40"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default SectionIndicator;
