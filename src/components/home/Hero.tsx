import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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
    <section className="relative h-full w-full overflow-hidden bg-slate-900">
      {/* Background Images with Zoom & Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[currentIndex].img})` }}
        >
          {/* Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
        </motion.div>
      </AnimatePresence>
      
      {/* Right Side Widgets (News & Banner) */}
      <HeroWidgets />

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex items-end pb-24 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div
          key={SLIDES[currentIndex].id}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-gold border border-gold uppercase">
            {SLIDES[currentIndex].badge}
          </span>
          <h1 className="text-[clamp(40px,6vw,84px)] font-black text-white leading-[1.05] tracking-tight mb-4 drop-shadow-2xl">
            {SLIDES[currentIndex].kr}
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-en font-light tracking-wide uppercase italic">
            {SLIDES[currentIndex].en}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn-primary">
              자세히 보기
            </button>
            <button className="btn-outline">
              전체 외교활동 →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Professional Slider Indicators */}
      <div className="absolute bottom-20 right-6 md:right-12 z-20 flex flex-col items-center gap-6">
        <div className="flex flex-col gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="group relative flex items-center gap-4"
            >
              <div className={`h-10 w-[2px] transition-all duration-700 rounded-full ${currentIndex === i ? 'bg-gold' : 'bg-white/20'}`}>
                {currentIndex === i && (
                  <motion.div 
                    layoutId="progress"
                    className="w-full bg-gold"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </div>
              <span className={`text-xs font-en font-bold transition-all ${currentIndex === i ? 'text-white translate-x-1' : 'text-white/30'}`}>
                {(i + 1).toString().padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60"
      >
        <span className="text-[10px] font-en font-bold tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
