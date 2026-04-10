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

const ActivitySection: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center py-20 px-6 md:px-12 max-w-[1500px] mx-auto space-y-20">
      {/* 1. 주요 외교활동 Block */}
      <section>
        <SectionHeader title="주요 외교활동" subTitle="Key Diplomatic Activities" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.img} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-white text-[8px] font-black px-2 py-0.5 tracking-widest uppercase rounded-[1px]">
                    {activity.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 text-sm md:text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {activity.title}
                </h3>
                <time className="block text-[10px] font-en text-slate-400 mt-3 tracking-widest uppercase">{activity.date}</time>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 2. 장관 활동 & 배너 Block */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Minister Activities (7/12) */}
        <div className="lg:col-span-7">
          <SectionHeader title="장관 외교활동" subTitle="Minister's Activities" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {MINISTER_ACTIVITIES.map((activity, index) => (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-[2px] overflow-hidden mb-3 border border-slate-100">
                  <img 
                    src={activity.img} 
                    alt={activity.title} 
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-[13px] font-bold text-slate-700 leading-snug group-hover:text-gold transition-colors line-clamp-2">
                  {activity.title}
                </h4>
                <p className="text-[9px] text-slate-400 mt-1.5 font-en tracking-tighter">{activity.date}</p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Right: Minister Banner (5/12) */}
        <motion.div 
          className="lg:col-span-5 h-full min-h-[300px] relative bg-gradient-to-br from-[#4a148c] via-[#311b92] to-[#1a237e] rounded-sm overflow-hidden flex"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Decorative patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold rounded-full -ml-24 -mb-24 blur-3xl" />
          </div>

          <div className="relative z-10 p-8 flex flex-col justify-center flex-1 max-w-[60%]">
            <h3 className="text-white text-lg font-bold leading-tight mb-2">
              안녕하십니까<br />
              <span className="text-gold">외교부장관 조 현</span> 입니다.
            </h3>
            <p className="text-white/70 text-[11px] leading-relaxed mb-6 font-medium">
              "엄중한 외교 상황 속에서 국민의 안전과 국익을 최우선으로 하는 실용 외교를 펼쳐 나가겠습니다."
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              {['장관소개', '장관과의 대화', '주요일정', '장관 외교활동'].map((btn) => (
                <button 
                  key={btn}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-[10px] font-bold py-2 px-3 rounded-full border border-white/20 transition-all hover:scale-105"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* portrait image layer */}
          <div className="relative w-[40%] h-full flex items-end justify-center pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" 
              alt="MOFA Minister" 
              className="h-[90%] object-contain select-none translate-y-2 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ActivitySection;
