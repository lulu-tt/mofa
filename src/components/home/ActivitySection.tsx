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
    <div className="min-h-full flex flex-col pt-48 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-32">
      {/* 1. 주요 외교활동 Block (35:65 Asymmetric) */}
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-[32%] shrink-0">
          <CustomHeader title="주요 외교활동" enTitle="News & Activities" />
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs hidden lg:block font-medium">
            대한민국의 위상을 높이고 국익을 증진시키기 위한 <br/>범정부 차원의 주요 외교 현장을 전달합니다.
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-8 text-xs font-black text-primary hover:text-gold transition-all group tracking-widest uppercase">
            View All Activities
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="lg:w-[68%] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
          {ACTIVITIES.slice(0, 4).map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-5">
                <img 
                  src={activity.img} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:opacity-0 transition-opacity" />
              </div>
              <div className="space-y-3">
                <span className="text-gold font-black text-[10px] tracking-widest uppercase">{activity.category}</span>
                <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2 break-keep">
                  {activity.title}
                </h3>
                <time className="block text-[11px] font-en text-slate-400 tracking-widest uppercase">{activity.date}</time>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 2. 장관 활동 Block (35:65 Asymmetric with Banner on left) */}
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-[32%] shrink-0 flex flex-col">
          <CustomHeader title="장관 외교활동" enTitle="Minister News" />
          
          {/* Minister Banner moved to left base */}
          <motion.div 
            className="w-full mt-auto relative bg-gradient-to-br from-primary to-[#1a237e] rounded-sm overflow-hidden flex flex-col shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-8 pb-0">
              <h3 className="text-white text-xl font-bold leading-tight mb-3">
                안녕하십니까<br />
                <span className="text-gold">외교부장관 조 현</span> 입니다.
              </h3>
              <p className="text-white/60 text-[11px] leading-relaxed mb-8">
                "국민과 소통하며 신뢰받는 <br/>실용 외교를 펼치겠습니다."
              </p>
              
              <div className="grid grid-cols-1 gap-2 mb-8">
                {['장관소개', '주요일정'].map((btn) => (
                  <button 
                    key={btn}
                    className="w-full bg-white/5 hover:bg-white/15 text-white text-[10px] font-bold py-3 px-4 rounded-sm border border-white/10 transition-all text-left flex justify-between items-center group"
                  >
                    {btn}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-64 relative flex items-end justify-end px-4 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" 
                alt="Minister" 
                className="h-[120%] object-contain select-none translate-y-8 drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </motion.div>
        </div>

        <div className="lg:w-[68%] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
          {MINISTER_ACTIVITIES.slice(0, 4).map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-5 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={activity.img} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="space-y-3">
                <span className="text-gold font-black text-[10px] tracking-widest uppercase">Press Release</span>
                <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2 break-keep">
                  {activity.title}
                </h3>
                <time className="block text-[11px] font-en text-slate-400 tracking-widest uppercase">{activity.date}</time>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ActivitySection;
