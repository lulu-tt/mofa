import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES } from '../../data/mockData';

const ActivitySection: React.FC = () => {
  return (
    <section className="pt-16 pb-8 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 bottom-1 w-1 bg-gold rounded-full" />
          <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight tracking-tighter uppercase italic">주요 외교활동</h2>
          <p className="text-[10px] font-en font-bold tracking-[0.3em] text-gold uppercase mt-1">Key Diplomatic Activities</p>
        </div>
        <a href="#" className="group flex items-center gap-2 text-xs font-bold text-primary border-b border-primary/20 pb-1 transition-all hover:border-gold hover:text-gold uppercase tracking-wider">
          View More <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACTIVITIES.map((activity, index) => (
          <motion.article
            key={activity.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-slate-100"
          >
            <div className="overflow-hidden relative h-[220px]">
              <img 
                src={activity.img} 
                alt={activity.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-primary text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">
                  {activity.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-bold text-slate-800 transition-colors group-hover:text-primary leading-tight text-base line-clamp-2">
                  {activity.title}
                </h3>
                <time className="block text-[10px] font-en text-slate-400 mt-2 tracking-widest">{activity.date}</time>
              </div>
              <motion.div 
                className="h-0.5 bg-gold mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" 
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;
