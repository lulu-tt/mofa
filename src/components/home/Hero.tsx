import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SLIDES } from '../../data/mockData';
import HeroWidgets from './HeroWidgets';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-primary">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={SLIDES[currentIndex].img}
            alt={SLIDES[currentIndex].kr}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Area */}
      <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[700px]"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur-md border border-gold/30 text-gold text-xs font-black tracking-widest uppercase mb-6">
              {SLIDES[currentIndex].badge}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8 break-keep">
              {SLIDES[currentIndex].kr}
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed mb-10 tracking-tight font-en">
              {SLIDES[currentIndex].en}
            </p>
            <button className="group flex items-center gap-4 text-white font-bold text-sm tracking-[0.3em] uppercase transition-all hover:text-gold">
              View Details 
              <span className="w-12 h-px bg-white/30 group-hover:w-16 group-hover:bg-gold transition-all" />
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Widgets */}
      <HeroWidgets />

      {/* Slide Navigation & Progress */}
      <div className="absolute left-10 bottom-24 z-30 flex items-end gap-12">
        <div className="flex gap-4">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="relative group py-4"
            >
              <div className={`h-1 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-12 bg-gold' : 'w-6 bg-white/20 group-hover:bg-white/40'}`} />
              
              {/* Progress Bar precisely synced (6s) */}
              {currentIndex === idx && (
                <div className="absolute top-4 left-0 h-1 bg-gold rounded-full z-10">
                  <motion.div
                    key={currentIndex} // Reset on every slide
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4 text-white/40 font-en font-bold text-xs tracking-widest mb-4">
          <span className="text-white text-base">0{currentIndex + 1}</span>
          <span className="w-8 h-px bg-white/20" />
          <span>0{SLIDES.length}</span>
        </div>
      </div>

      {/* New Minimal Scroll Indicator (Left-12 Bottom-8) */}
      <div className="absolute left-12 bottom-8 z-30 flex items-center gap-6">
        <div className="relative w-24 h-px bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>
        <span className="text-[10px] font-black font-en text-white/40 tracking-[0.5em] uppercase">
          Scroll Down
        </span>
      </div>
    </div>
  );
};

export default Hero;
