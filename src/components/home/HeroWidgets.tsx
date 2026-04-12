import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle, ChevronRight, Bell, Phone } from 'lucide-react';
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
            {/* News Widget - Enhanced Glassmorphism */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/15 border-t-2 border-t-gold/30 rounded-sm p-7 flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-bold text-lg tracking-tight">외교부 소식</h3>
                <button className="text-white/40 hover:text-white transition-colors">
                  <Plus size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                {NEWS_DATA.notice.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="group cursor-pointer relative pl-0 hover:pl-4 transition-all duration-300">
                    {/* Sliding Gold Line on Hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                    
                    <p className="text-xs font-en font-bold text-white/40 mb-2 tracking-widest group-hover:text-gold/60 transition-colors">
                      {item.date.replace('.', ' / ')}
                    </p>
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

            {/* Consular Call Center Banner - Diplomatic Redesign */}
            <div className="bg-gradient-to-br from-[#0D2B55] to-[#1a3f7a] p-6 rounded-sm relative overflow-hidden group cursor-pointer shadow-2xl border border-white/10">
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                   <div className="px-2 py-0.5 bg-gold/20 border border-gold/30 rounded text-[9px] font-black text-gold uppercase tracking-widest">
                     Safe Travel
                   </div>
                   <p className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">Diplomatic Service</p>
                </div>
                
                <h3 className="text-gold font-black text-base leading-tight">
                  영사안전콜센터<br /> 
                  카카오톡 상담 서비스
                </h3>
                
                {/* Consular Badge */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <Phone size={14} />
                  </div>
                  <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">영사안전콜센터</span>
                </div>
              </div>

              {/* Icon Emulation - Gold Style */}
              <div className="absolute right-4 bottom-4 text-gold opacity-10 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110">
                <MessageCircle size={64} strokeWidth={1} />
              </div>
              
              {/* Dynamic Light Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out skew-x-12" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroWidgets;
