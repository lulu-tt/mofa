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
    <div className="h-full flex items-center justify-center px-6 md:px-12 max-w-[1550px] mx-auto relative group/section">
      
      {/* 35:65 Asymmetric Layout */}
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Section (35%) */}
        <div className="lg:w-[35%] shrink-0">
          <div className="mb-0">
            <div className="inline-flex items-center gap-2 mb-5 text-gold font-black tracking-[0.3em] text-[11px] uppercase opacity-80">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              News & Activities
            </div>
            <h2 className="text-[46px] lg:text-[54px] font-black text-primary leading-[1.05] tracking-tighter mb-8 break-keep">
              주요<br />외교활동
            </h2>
            <div className="w-16 h-1.5 bg-gold/40 mb-10" />
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-[300px] font-medium break-keep mb-10">
              대한민국의 위상을 높이고 국익을 증진시키기 위한 <br />범정부 차원의 주요 외교 현장을 전달합니다.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-black text-primary/80 hover:text-gold transition-all group tracking-[0.2em] uppercase mb-12 block">
              View All Activities
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Minister Banner (Improved Auto-Height Layout) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[440px] min-h-[290px] bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 rounded-[2.5rem] shadow-2xl overflow-hidden flex group/banner"
            >
              <div className="relative z-10 w-[65%] p-7 flex flex-col justify-center">
                <h4 className="text-white/80 font-bold text-xs mb-1.5">안녕하십니까</h4>
                <div className="flex items-center gap-2 text-white font-black text-[22px] mb-4 tracking-tight leading-tight">
                   <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border border-white/10 shrink-0">
                     <img src="https://static.mofa.go.kr/www/images/common/logo_mofa.png" className="w-3.5 grayscale invert" alt="" />
                   </div>
                   외교부장관 조 현 입니다.
                </div>
                <p className="text-[10.5px] text-white/90 leading-relaxed font-bold break-keep mb-6">
                  "엄중한 외교 상황 속에서 <br/>
                  <span className="text-[#FFEB3B]">국민의 안전과 국익을 최우선으로 하는</span> <br/>
                  실용 외교를 펼쳐 나가겠습니다."
                </p>

                {/* 2x2 Buttons with better spacing */}
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-white text-slate-800 text-[9px] font-black py-2.5 px-1 rounded-full hover:bg-gold transition-colors shadow-sm">장관소개</button>
                  <button className="bg-white text-slate-800 text-[9px] font-black py-2.5 px-1 rounded-full hover:bg-gold transition-colors shadow-sm">장관과의 대화</button>
                  <button className="bg-white text-slate-800 text-[9px] font-black py-2.5 px-1 rounded-full hover:bg-gold transition-colors shadow-sm">주요일정</button>
                  <button className="bg-[#8D6E63] text-white text-[9px] font-black py-2.5 px-1 rounded-full hover:brightness-110 transition-all shadow-sm">장관 외교활동</button>
                </div>
              </div>

              {/* Minister Image with controlled sizing */}
              <div className="w-[35%] h-full relative flex items-end">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" 
                  alt="Minister" 
                  className="absolute bottom-[-10px] right-[-15px] h-[90%] object-contain select-none drop-shadow-[-20px_0_30px_rgba(0,0,0,0.4)] group-hover/banner:scale-105 transition-transform duration-700" 
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Section (65%) */}
        <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20">
          {ACTIVITIES.slice(0, 4).map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={activity.img} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-4">
                <span className="text-gold font-black text-[11px] tracking-widest uppercase block">{activity.category}</span>
                <h3 className="font-bold text-primary text-[20px] lg:text-[24px] leading-tight group-hover:text-gold transition-colors line-clamp-2 break-keep tracking-tight">
                  {activity.title}
                </h3>
                <time className="block text-[12px] font-en text-slate-400 font-medium tracking-widest uppercase">{activity.date}</time>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ActivitySection;
