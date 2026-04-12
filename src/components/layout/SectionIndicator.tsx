import React from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'activity', label: 'Activities' },
  { id: 'news', label: 'News' },

  { id: 'mission', label: 'Missions' },
  { id: 'media', label: 'Media' },
  { id: 'footer', label: 'Footer' },
];

interface SectionIndicatorProps {
  activeSection?: number;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({ activeSection = 0 }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSectionId = sections[activeSection]?.id || 'home';

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6 items-center">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollToSection(s.id)}
          className="group relative flex items-center justify-center w-4 h-4"
        >
          {/* Label Tooltip */}
          <span className="absolute right-8 text-[10px] font-en font-bold tracking-widest uppercase py-1 px-3 bg-primary text-white pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100">
            {s.label}
          </span>
          
          {/* Dot */}
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
            currentSectionId === s.id 
              ? 'bg-gold scale-150 shadow-[0_0_10px_rgba(200,169,110,0.8)]' 
              : (currentSectionId === 'media' ? 'bg-primary/30 group-hover:bg-primary/50' : 'bg-white/20 group-hover:bg-white/40')
          }`} />
          
          {/* Outer Ring */}
          {currentSectionId === s.id && (
            <motion.div
              layoutId="navRing"
              className="absolute inset-0 border border-gold rounded-full"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default SectionIndicator;
