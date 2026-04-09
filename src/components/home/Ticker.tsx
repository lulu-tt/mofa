import React from 'react';
import { motion } from 'framer-motion';

const Ticker: React.FC = () => {
  const notices = [
    '레바논 일부 지역 여행금지 추가 지정 (2026.04.08)',
    '일본 교과서 검정 결과 외교부 대변인 성명 (2026.04.03)',
    '중동지역 정세 관련 긴급 화상 공관장회의 개최 (2026.04.08)',
    '한-프랑스 정상회담 공동언론발표문 (2026.04.05)',
  ];

  return (
    <div className="bg-dark py-4 overflow-hidden relative border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-10">
        <span className="bg-accent text-white px-3 py-1 text-[11px] font-black tracking-widest uppercase shrink-0 z-10">
          Alert
        </span>
        <div className="flex-1 overflow-hidden pointer-events-none relative">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dark to-transparent z-10" />
          
          <motion.div 
            className="flex gap-20 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...notices, ...notices].map((notice, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                {notice}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
