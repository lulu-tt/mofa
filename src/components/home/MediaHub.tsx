import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Play, PlayCircle, Users, Heart, MessageCircle } from 'lucide-react';

const MediaHub: React.FC = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-[#060E1A] to-[#0A1628] overflow-hidden flex flex-col justify-center relative">
      <div className="px-6 md:px-12 max-w-[1550px] mx-auto w-full pt-[calc(var(--header-h)+64px)] pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 bottom-1 w-1 bg-gold rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">외교부 소통채널</h2>
            <p className="text-sm font-en font-bold tracking-[0.3em] text-gold uppercase mt-2">Social Media Hub</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* YouTube Spotlight (Left Large) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-primary/40 rounded-[2rem] p-10 md:p-12 flex flex-col justify-between transition-all duration-200 ease-out hover:-translate-y-2 hover:ring-2 hover:ring-white/20 min-h-[520px] shadow-2xl overflow-hidden border border-white/5"
          >
            <div className="relative z-10">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 inline-block opacity-90">Official YouTube</span>
              <h3 className="text-5xl font-black text-white tracking-tighter mb-2">KOREAZ</h3>
              <p className="text-white/40 text-sm font-medium mb-6">구독자 284,000명 · 영상 1,247개</p>
              <p className="text-gold font-en font-medium text-base tracking-widest italic mb-6">All about Korea A to Z</p>
              <div className="w-12 h-1 bg-gold/40 mb-8" />
              <p className="text-white/70 text-[15px] leading-relaxed break-keep max-w-sm">
                대한민국 외교부 공식 리얼 미디어 채널. <br/>한국의 외교, 문화, 비전을 세계에 알립니다.
              </p>
            </div>

            <div className="relative z-10 mt-10">
              <div className="relative group/vid overflow-hidden rounded-2xl shadow-2xl aspect-video border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/vid:scale-105"
                  alt="YouTube Video"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/vid:bg-black/20 transition-all">
                  <PlayCircle className="text-white fill-white/20 group-hover/vid:scale-110 transition-transform duration-500" size={72} />
                </div>
              </div>
              
              <button className="w-full mt-8 py-4 bg-[#FF0000] text-white font-black text-sm tracking-widest hover:brightness-110 transition-all rounded-xl flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]">
                <Youtube size={20} />
                구독하기
              </button>
            </div>
            
            {/* Aesthetic background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>

          {/* SNS Grid (Right) */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Instagram */}
            <SNSCard 
              sns={{
                id: 'insta', name: 'Instagram', 
                color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', 
                icon: <Instagram size={20} />,
                stats: '팔로워 52,400명'
              }}
              delay={0.1}
            >
              <div className="grid grid-cols-3 gap-1.5 mt-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="aspect-square rounded-sm overflow-hidden bg-white/10 border border-white/5">
                    <img src={`https://picsum.photos/seed/insta${i}/150/150`} className="w-full h-full object-cover opacity-80" alt="" />
                  </div>
                ))}
              </div>
            </SNSCard>

            {/* Facebook */}
            <SNSCard 
              sns={{
                id: 'fb', name: 'Facebook', 
                color: 'bg-[#1877F2]/90', 
                icon: <Facebook size={20} />,
                stats: '좋아요 128,000개'
              }}
              delay={0.2}
            >
              <div className="mt-4 bg-white/10 p-4 rounded-xl border border-white/10">
                <p className="text-[11px] font-bold text-white/90 line-clamp-2 leading-relaxed">
                  "한-아세안 연대구상(KASI)의 성과와 미래 비전을 시민 여러분과 소통합니다."
                </p>
                <div className="flex items-center gap-2 mt-2 opacity-50">
                  <Heart size={10} /> <span className="text-[10px]">1.2k</span>
                  <MessageCircle size={10} /> <span className="text-[10px]">42</span>
                </div>
              </div>
            </SNSCard>

            {/* X (Twitter) */}
            <SNSCard 
              sns={{
                id: 'x', name: 'X', 
                color: 'bg-black/80', 
                icon: <div className="font-black text-lg">X</div>,
                stats: '@mofa_kr · 방금'
              }}
              delay={0.3}
            >
              <div className="mt-4 border-l-2 border-white/20 pl-3">
                <p className="text-[11px] text-white/80 leading-relaxed italic">
                  외교부 제2차관, 마약 범죄 근절을 위한 국제 공조 강화 방안 논의...
                </p>
                <div className="mt-2 flex gap-3 opacity-40">
                  <div className="w-4 h-4 bg-white/20 rounded-full" />
                  <div className="w-4 h-4 bg-white/20 rounded-full" />
                </div>
              </div>
            </SNSCard>

            {/* YouTube Small */}
            <SNSCard 
              sns={{
                id: 'yt-small', name: 'YouTube', 
                color: 'bg-[#FF0000]/90', 
                icon: <Youtube size={20} />,
                stats: '조회수 23만회'
              }}
              delay={0.4}
            >
              <div className="mt-4 relative rounded-xl overflow-hidden aspect-[16/9] border border-white/10">
                <img src="https://images.unsplash.com/photo-1541873676947-95a3b9177e02?w=400" className="w-full h-full object-cover opacity-60" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play size={16} className="fill-white" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-2 bg-black/40">
                  <p className="text-[9px] font-bold line-clamp-1">글로벌 중추국가로의 도약 현장</p>
                </div>
              </div>
            </SNSCard>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SNSCardProps {
  sns: {
    id: string;
    name: string;
    color: string;
    icon: React.ReactNode;
    stats: string;
  };
  delay: number;
  children?: React.ReactNode;
}

const SNSCard: React.FC<SNSCardProps> = ({ sns, delay, children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className={`p-8 ${sns.color} text-white flex flex-col justify-between transition-all duration-200 ease-out hover:-translate-y-2 hover:ring-2 hover:ring-white/20 cursor-pointer shadow-xl rounded-[2rem] h-[232px] border border-white/5`}
  >
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center text-white bg-white/20 rounded-xl backdrop-blur-sm border border-white/10">
            {sns.icon}
          </div>
          <span className="font-black text-sm tracking-tight uppercase">{sns.name}</span>
        </div>
        <Users size={14} className="opacity-30" />
      </div>
      {children}
    </div>
    <div className="mt-auto">
      <p className="text-[10px] font-black tracking-widest text-white/50 uppercase">
        {sns.stats}
      </p>
    </div>
  </motion.div>
);

export default MediaHub;
