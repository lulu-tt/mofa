import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ACTIVITIES, MINISTER_ACTIVITIES } from '../../data/mockData';

const SectionHeader: React.FC<{ title: string; subTitle: string }> = ({ title, subTitle }) => (
  <div className="flex items-end justify-between mb-6 group/header">
    <div className="relative pl-5">
      <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-gold rounded-full transition-transform duration-500 group-hover/header:scale-y-125" />
      <h2 className="text-2xl font-black text-primary tracking-tighter uppercase">{title}</h2>
      <p className="text-[9px] font-en font-bold tracking-[0.2em] text-gold/60 uppercase mt-0.5">{subTitle}</p>
    </div>
    <a href="#" className="flex items-center gap-1.5 text-[10px] font-black text-primary/40 hover:text-gold transition-colors tracking-widest uppercase">
      View More <ChevronRight size={14} className="mt-[-1px]" />
    </a>
  </div>
);

const CustomHeader: React.FC<{ title: string; enTitle: string }> = ({ title, enTitle }) => (
  <div className="mb-8 lg:mb-12">
    <div className="inline-flex items-center gap-2 mb-4 text-gold font-black tracking-[0.3em] text-[10px] uppercase">
      <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
      {enTitle}
    </div>
    <h2 className="text-4xl lg:text-5xl font-black text-primary leading-[1.1] tracking-tighter break-keep">
      {title.split(' ').map((word, i) => (
        <span key={i} className="block">{word}</span>
      ))}
    </h2>
    <div className="w-16 h-1 bg-gold mt-8" />
  </div>
);

const ActivitySection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 max-w-[1600px] mx-auto relative group/section pt-40 pb-20">
      
      {/* 35:65 Asymmetric Layout */}
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Section (35%) */}
        <div className="lg:w-[32%] shrink-0">
          <div className="mb-0">
            <div className="inline-flex items-center gap-2 mb-6 text-gold font-black tracking-[0.4em] text-[12px] uppercase opacity-90">
              <div className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
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

            {/* Minister Banner (Premier Redesign) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[520px] min-h-[340px] bg-gradient-to-br from-[#003764] via-[#005293] to-[#0177d6] rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden flex group/banner border border-white/5"
            >
              <div className="relative z-10 w-[60%] p-10 flex flex-col justify-center">
                <h4 className="text-white/70 font-bold text-sm mb-2 tracking-tight">안녕하십니까</h4>
                <div className="flex flex-col gap-2 text-white font-black text-[25px] lg:text-[28px] mb-6 tracking-tight leading-tight">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/10 shrink-0">
                       <img src="https://static.mofa.go.kr/www/images/common/logo_mofa.png" className="w-5 grayscale invert" alt="" />
                     </div>
                     <span className="text-sm opacity-80 font-medium">대한민국 외교부장관</span>
                   </div>
                   조 현 입니다.
                </div>
                <p className="text-[12px] text-white/90 leading-relaxed font-bold break-keep mb-8 pr-4">
                  "엄중한 외교 상황 속에서 <br/>
                  <span className="text-[#FFEB3B] border-b-2 border-[#FFEB3B]/30">국민의 안전과 국익을 최우선으로 하는</span> <br/>
                  실용 외교를 펼쳐 나가겠습니다."
                </p>

                {/* 2x2 Buttons (Premier Spacing & Size) */}
                <div className="grid grid-cols-2 gap-3">
                  {['장관소개', '장관과의 대화', '주요일정'].map((txt) => (
                    <button key={txt} className="bg-white/95 text-primary text-[11px] lg:text-[12px] font-black py-3 px-2 rounded-full hover:bg-gold hover:text-white transition-all shadow-lg active:scale-95">
                      {txt}
                    </button>
                  ))}
                  <button className="bg-[#A1887F] text-white text-[11px] lg:text-[12px] font-black py-3 px-2 rounded-full hover:brightness-110 transition-all shadow-lg active:scale-95">
                    장관 외교활동
                  </button>
                </div>
              </div>

              {/* Minister Image (Official Full Portrait) */}
              <div className="w-[40%] h-full relative flex items-end">
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
                  alt="Minister Portrait" 
                  className="absolute bottom-[-10px] right-[-10%] h-[115%] w-auto object-contain select-none drop-shadow-[-30px_0_40px_rgba(0,0,0,0.5)] group-hover/banner:scale-[1.04] transition-transform duration-1000 pointer-events-none" 
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Section (68%) */}
        <div className="lg:w-[68%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20 lg:pt-10">
          {ACTIVITIES.slice(0, 4).map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] mb-8 shadow-[0_15px_35px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700">
                <img 
                  src={activity.img} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-4 px-1">
                <span className="text-gold font-black text-[12px] tracking-[0.2em] uppercase block">{activity.category}</span>
                <h3 className="font-bold text-primary text-[24px] lg:text-[26px] leading-[1.3] group-hover:text-gold transition-colors line-clamp-2 break-keep tracking-tight">
                  {activity.title}
                </h3>
                <time className="block text-[13px] font-en text-slate-400 font-bold tracking-widest uppercase">{activity.date}</time>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ActivitySection;
