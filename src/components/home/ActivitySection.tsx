import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ACTIVITIES } from '../../data/mockData';
import type { ActivityItem } from '../../types';

const ActivitySection: React.FC = () => {
  return (
    <div className="h-full w-full overflow-y-auto px-6 md:px-12 max-w-[1600px] mx-auto relative group/section py-[calc(var(--header-h)+40px)] pb-16">
      
      {/* 35:65 Asymmetric Layout */}
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Section (38%) - Widened to prevent text wrapping */}
        <div className="lg:w-[38%] shrink-0">
          <div className="mb-0">
            <div className="inline-flex items-center gap-2 mb-6 text-gold font-black tracking-[0.4em] text-[12px] uppercase">
              <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              News & Activities
            </div>
            <h2 className="text-[48px] lg:text-[60px] font-black text-primary leading-[1.0] tracking-tighter mb-8 break-keep">
              주요<br />외교활동
            </h2>
            <div className="w-20 h-2 bg-gold/50 mb-12" />
            <p className="text-slate-500 text-[16px] leading-[1.7] max-w-[340px] font-medium break-keep mb-12">
              대한민국의 위상을 높이고 국익을 증진시키기 위한 <br />범정부 차원의 주요 외교 현장을 전달합니다.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[14px] font-black text-primary hover:text-gold transition-all group tracking-[0.2em] uppercase mb-16 px-1">
              View All Activities
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Minister Banner - Fixed Layout to prevent "Broken" look */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full bg-[#1b3479] rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col group/banner border border-white/5"
            >
              {/* Top Left Badge: 열린장관실 */}
              <div className="absolute top-0 left-0 bg-[#8b7255] text-white px-6 py-2 rounded-br-2xl flex items-center gap-2 z-20">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <span className="text-[14px] font-bold whitespace-nowrap">열린장관실</span>
              </div>

              {/* Banner Body - Improved Space Management */}
              <div className="relative pt-20 pb-4 px-10 flex min-h-[220px]">
                <div className="flex-1 pt-4 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-white text-[28px] md:text-[32px] lg:text-[40px] font-black leading-tight mb-3 break-keep">
                      안녕하십니까
                    </h3>
                    <div className="text-white flex flex-col gap-1">
                       <p className="text-[18px] md:text-[20px] font-bold opacity-90 whitespace-nowrap">외교부장관</p>
                       <p className="text-[26px] md:text-[32px] font-black whitespace-nowrap">
                         <span className="underline underline-offset-8 decoration-white/20">조 현</span> 입니다.
                       </p>
                    </div>
                  </motion.div>
                </div>

                {/* Minister Image - Switched to proper sizing & position */}
                <div className="absolute right-0 bottom-0 top-0 w-[45%] flex items-end justify-center pointer-events-none">
                  {/* Organic Blob Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[#5d8557]/30 rounded-full blur-[60px]" />
                  
                  {/* Minister Photo with Error Fallback */}
                  <div className="relative h-full flex items-end">
                    <img 
                      src="https://www.mofa.go.kr/www/images/common/img_minister_main.png" 
                      alt="조현 장관"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        // Show MOFA watermark if image fails
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const placeholder = document.createElement('div');
                          placeholder.className = "text-white/10 font-black text-6xl pb-20 select-none tracking-tighter";
                          placeholder.innerText = "MOFA";
                          parent.appendChild(placeholder);
                        }
                      }}
                      className="relative z-10 h-[95%] w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Buttons Grid - Fixed for all screens */}
              <div className="p-4 md:p-6 lg:p-8 bg-black/10 border-t border-white/10 grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2">
                {[
                  { text: '장관 외교활동', active: true },
                  { text: '장관소개' },
                  { text: '장관과의 대화' },
                  { text: '주요일정' },
                  { text: '장관 연설문' }
                ].map((btn) => (
                  <button 
                    key={btn.text}
                    className={`text-[10px] lg:text-[11px] font-black h-10 px-0.5 border transition-all whitespace-nowrap flex items-center justify-center ${
                      btn.active 
                        ? 'bg-[#8b7255] border-[#8b7255] text-white shadow-lg' 
                        : 'bg-white border-white text-primary hover:bg-gold hover:border-gold hover:text-white'
                    }`}
                  >
                    {btn.text}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Section (62%) */}
        <div className="lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20 lg:pt-10">
          {ACTIVITIES.slice(0, 4).map((activity: ActivityItem, index: number) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-8 shadow-[0_15px_35px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700">
                <img 
                  src={activity.img} 
                  loading="lazy"
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-4 px-1">
                <span className="text-gold font-black text-[12px] tracking-[0.2em] uppercase block">{activity.category}</span>
                <h3 className="font-bold text-primary text-[24px] lg:text-[26px] leading-[1.3] group-hover:text-gold transition-colors line-clamp-2 break-keep tracking-tight">
                  {activity.title}
                </h3>
                <time className="flex items-center gap-1 text-[13px] font-en text-slate-400 font-bold tracking-widest uppercase group-hover:text-primary transition-colors">
                  {activity.date} 
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"> →</span>
                </time>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ActivitySection;
