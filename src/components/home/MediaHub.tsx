import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Tv, PlayCircle } from 'lucide-react';

const MediaHub: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 bottom-1 w-1 bg-gold rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">외교부 소통채널</h2>
          <p className="text-sm font-en font-bold tracking-[0.3em] text-gold uppercase mt-2">Social Media Hub</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* YouTube Spotlight */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-primary p-10 md:p-14 flex flex-col justify-between"
        >
          <div>
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 inline-block opacity-80">Official YouTube</span>
            <h3 className="text-5xl font-black text-white tracking-tighter mb-4">KOREAZ</h3>
            <p className="text-gold font-en font-medium text-base tracking-widest italic mb-6">All about Korea A to Z</p>
            <div className="w-12 h-0.5 bg-gold mb-8 opacity-40" />
            <p className="text-white/70 text-base leading-relaxed break-keep max-w-sm">
              대한민국 외교부 공식 리얼 미디어 채널. 한국의 외교, 문화, 비전을 세계에 알립니다.
            </p>
          </div>

          <div className="mt-12 relative group cursor-pointer overflow-hidden rounded shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800" 
              className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
              alt="YouTube Video"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
              <PlayCircle className="text-white fill-white/20 group-hover:scale-125 transition-transform" size={64} />
            </div>
          </div>
          
          <button className="mt-8 py-4 bg-gold text-primary font-black text-sm tracking-widest hover:bg-[#D4B87A] transition-all">
            채널 구독하기 SUBSCRIBE
          </button>
        </motion.div>

        {/* SNS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          {[
            { id: 'insta', name: 'Instagram', desc: '최신 현장 사진과 카드뉴스를 만나보세요.', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', icon: <Globe /> },
            { id: 'fb', name: 'Facebook', desc: '외교부의 상세한 소식과 긴급 공지를 가장 빠르게.', color: 'bg-[#1877F2]', icon: <MessageCircle /> },
            { id: 'x', name: 'X (Twitter)', desc: '@mofa_kr 공식 트위터 채널.', color: 'bg-black', icon: <div className="font-black text-xl italic">X</div> },
            { id: 'yt', name: 'YouTube', desc: 'KOREAZ 채널과 외교부 공식 채널 모음.', color: 'bg-[#FF0000]', icon: <Tv /> },
          ].map((sns, i) => (
            <motion.div
              key={sns.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 ${sns.color} text-white flex flex-col justify-between hover:translate-y-[-8px] transition-all duration-300 cursor-pointer shadow-lg`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-white bg-white/20 rounded-lg">
                  {sns.icon}
                </div>
                <span className="font-black text-lg tracking-tight uppercase">{sns.name}</span>
              </div>
              <p className="text-white/80 text-xs mt-10 leading-relaxed font-medium line-clamp-2">
                {sns.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaHub;
