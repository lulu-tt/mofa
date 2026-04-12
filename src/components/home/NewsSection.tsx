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

  // Get the featured news (first item of current tab)
  const featuredNews = NEWS_DATA[activeTab][0];

  return (
    <section className="h-[55vh] pt-[var(--header-h)] pb-4 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 shrink-0">
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 bottom-1 w-1 bg-gold rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">외교부 소식</h2>
          <p className="text-sm font-en font-bold tracking-[0.3em] text-gold uppercase mt-2">News & Announcements</p>
        </div>
        <a href="#" className="group flex items-center gap-2 text-sm font-bold text-primary">
          View All <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-0">
        {/* Featured News - Dynamic with Active Tab */}
        <div className="lg:col-span-7 group relative h-full overflow-hidden rounded-sm cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img 
                src={featuredNews.img} 
                className="w-full h-full object-cover"
                alt="Featured"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-10 left-10 right-10 z-10">
            <motion.div
              key={activeTab + 'label'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-accent text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-4 inline-block">
                {activeTab === 'notice' ? 'Notice' : activeTab === 'press' ? 'Press' : 'Recruit'}
              </span>
              <h3 className="text-3xl font-bold text-white leading-snug break-keep group-hover:text-gold transition-colors">
                {featuredNews.title}
              </h3>
              <p className="text-white/60 text-sm mt-4 font-en tracking-widest">2026.04.08</p>
            </motion.div>
          </div>
        </div>

        {/* Tabbed News List */}
        <div className="lg:col-span-5 flex flex-col h-full min-h-0">
          <div className="flex border-b border-slate-200 mb-4 shrink-0">
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
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-t-full" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
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
                    className="group flex items-center gap-6 py-3 px-4 border-b border-slate-100 hover:bg-slate-50 transition-all duration-200 cursor-pointer border-l-4 border-l-transparent hover:border-l-gold"
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
          
          <div className="pt-6 shrink-0 flex justify-center">
            <button className="px-8 py-2.5 border border-slate-200 text-[11px] font-black text-slate-400 rounded-full hover:border-primary hover:text-primary transition-all tracking-[0.2em] uppercase">
              More News +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
