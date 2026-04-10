import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NEWS_DATA } from '../../data/mockData';

const NewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notice' | 'press' | 'recruit'>('notice');

  const tabs = [
    { id: 'notice', label: '공지사항' },
    { id: 'press', label: '보도자료' },
    { id: 'recruit', label: '채용공고' },
  ];

  return (
    <section className="pt-10 pb-4 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 bottom-1 w-1 bg-gold rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">외교부 소식</h2>
          <p className="text-sm font-en font-bold tracking-[0.3em] text-gold uppercase mt-2">News & Announcements</p>
        </div>
        <a href="#" className="group flex items-center gap-2 text-sm font-bold text-primary">
          View All <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Featured News */}
        <div className="lg:col-span-7 group relative h-[320px] overflow-hidden rounded-sm cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1000" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Featured"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <span className="bg-accent text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-4 inline-block">Notice</span>
            <h3 className="text-3xl font-bold text-white leading-snug break-keep group-hover:text-gold transition-colors">
              2026년도 하반기 중남미 지역기구<br />파견 인턴 선발 공고
            </h3>
            <p className="text-white/60 text-sm mt-4 font-en tracking-widest">2026.04.08</p>
          </div>
        </div>

        {/* Tabbed News List */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex border-b border-slate-200 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 text-sm font-bold transition-all relative ${
                  activeTab === tab.id ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="newsTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.ul
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-1"
              >
                {NEWS_DATA[activeTab].map((item, i) => (
                  <li 
                    key={i}
                    className="group flex items-center gap-6 py-3 px-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="bg-slate-100 text-primary font-en font-bold text-[11px] px-3 py-1 rounded tracking-tighter group-hover:bg-primary group-hover:text-white transition-colors uppercase">
                      {item.date}
                    </span>
                    <span className="flex-1 text-[15px] font-medium text-slate-700 group-hover:text-primary transition-colors line-clamp-1 pb-1">
                      {item.title}
                    </span>
                    <span className="text-slate-300 group-hover:text-gold transition-colors group-hover:translate-x-1 duration-300">
                      →
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
          
          <button className="mt-8 text-right text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">
            More News +
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
