import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle, ChevronRight, Bell } from 'lucide-react';
import { NEWS_DATA } from '../../data/mockData';

const HeroWidgets: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="absolute right-24 md:right-32 top-[15%] z-30 flex items-start gap-4 hidden xl:flex">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mt-2 w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-all group"
      >
        {isOpen ? <ChevronRight size={24} /> : <div className="relative"><Bell size={20} /><span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full animate-pulse" /></div>}
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-primary text-white text-[10px] font-bold tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {isOpen ? 'Close Panels' : 'Open News'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col gap-6 w-[340px]"
          >
            {/* News Widget - Glassmorphism */}
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-sm p-7 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-bold text-lg tracking-tight">외교부 소식</h3>
                <button className="text-white/40 hover:text-white transition-colors">
                  <Plus size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                {NEWS_DATA.notice.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <p className="text-xs font-en font-bold text-white/40 mb-2 tracking-widest">{item.date.replace('.', ' / ')}</p>
                    <h4 className="text-sm text-white/90 leading-relaxed line-clamp-2 transition-colors group-hover:text-gold">
                      {item.title}
                    </h4>
                    {idx < 2 && (
                      <div className="h-px bg-white/5 w-full mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Yellow Banner Widget */}
            <div className="bg-[#FFD700] p-6 rounded-sm relative overflow-hidden group cursor-pointer shadow-2xl">
              <div className="relative z-10 flex flex-col">
                <p className="text-[10px] font-bold text-primary/60 mb-1 uppercase tracking-tighter">국민의 안전과 더 가까워집니다!</p>
                <h3 className="text-primary font-black text-base leading-tight">
                  영사안전콜센터<br /> 
                  카카오톡 상담 서비스
                </h3>
                
                <div className="mt-4 flex items-center gap-1">
                  {[0, 1, 3, 4].map((i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-primary' : 'bg-primary/20'}`} />
                  ))}
                </div>
              </div>

              {/* Icon Emulation */}
              <div className="absolute right-4 bottom-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <MessageCircle size={60} strokeWidth={1.5} />
              </div>
              
              {/* Animated Slide Effect */}
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroWidgets;
