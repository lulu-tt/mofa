import React from 'react';
import { motion } from 'framer-motion';

const BANNERS = [
  '비상벨 신고톡', '소비자24', '국립외교원', '관세청', 'MOFA 인사이트', '2026 국가데이터', '중동 상황', '한미수교 144주년'
];

const RelatedSites: React.FC = () => {
  // Triple the banners for seamless loop
  const displayBanners = [...BANNERS, ...BANNERS, ...BANNERS];

  return (
    <div className="w-full bg-[#060E1A] border-t border-b border-white/5 py-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-8">
        {/* Play/Pause & All View Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <span className="text-[10px]">II</span>
          </button>
        </div>

        {/* Rolling Banner Container */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div 
            animate={{ x: "-33.33%" }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-4 whitespace-nowrap"
          >
            {displayBanners.map((title, i) => (
              <div 
                key={i}
                className="inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/10 text-[12px] font-bold text-white/60 hover:text-white hover:border-gold/30 hover:bg-white/10 transition-all cursor-pointer min-w-[160px]"
              >
                {title}
              </div>
            ))}
          </motion.div>
        </div>

        <button className="shrink-0 text-[11px] font-black text-white/40 hover:text-white tracking-widest uppercase flex items-center gap-2">
          전체보기 <span className="text-lg">+</span>
        </button>
      </div>
    </div>
  );
};

export default RelatedSites;
