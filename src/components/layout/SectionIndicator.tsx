import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'activity', label: 'Activities' },
  { id: 'news', label: 'News' },
  { id: 'minister', label: 'Minister' },
  { id: 'mission', label: 'Missions' },
  { id: 'media', label: 'Media' },
  { id: 'footer', label: 'Footer' },
];

const SectionIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6 items-center">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollToSection(s.id)}
          className="group relative flex items-center justify-center w-4 h-4"
        >
          {/* Label Tooltip */}
          <span className={`absolute right-8 text-[10px] font-en font-bold tracking-widest uppercase py-1 px-3 bg-primary text-white pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 ${activeSection === s.id ? 'opacity-100 border-r-2 border-gold' : ''}`}>
            {s.label}
          </span>
          
          {/* Dot */}
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
            activeSection === s.id ? 'bg-gold scale-150 shadow-[0_0_10px_rgba(200,169,110,0.8)]' : 'bg-white/20 group-hover:bg-white/40'
          }`} />
          
          {/* Outer Ring */}
          {activeSection === s.id && (
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
