import React from 'react';
import { motion } from 'framer-motion';
// 명시적으로 사용하는 아이콘만 임포트 (Youtube 등 SNS 아이콘 제외)
import { Globe, Play, PlayCircle, Heart, MessageCircle, ExternalLink, Video, Quote } from 'lucide-react';

const MediaHub: React.FC = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://picsum.photos/seed/korea-fallback/800/600';
  };

  return (
    <section className="h-screen w-full bg-[#F8F9FA] overflow-hidden flex flex-col relative font-sans">
      <div className="flex-1 flex flex-col px-12 md:px-24 max-w-[1700px] mx-auto w-full pt-[calc(var(--header-h)+80px)] pb-10 space-y-6 md:space-y-8">
        
        {/* Header */}
        <div className="flex-shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-1 h-8 bg-gold rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-[#0D2B55] tracking-tighter uppercase">외교부 소통채널</h2>
          </div>
          <p className="text-[11px] font-en font-bold tracking-[0.4em] text-gold uppercase ml-4 opacity-80 leading-none">Social Media Hub</p>
        </div>

        {/* Global Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-[55%] min-h-0">
          
          {/* LEFT: KOREAZ Spotlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group bg-[#0D2B55] rounded-[2rem] p-8 flex flex-col shadow-[0_20px_40px_rgba(13,43,85,0.15)] border border-white/5 relative overflow-hidden h-full"
          >
            <div className="relative z-10 flex flex-col items-center text-center mb-4">
              <span className="text-gold text-[9px] font-black uppercase tracking-[0.4em] mb-1 opacity-90 font-en">Official YouTube</span>
              <h3 className="text-3xl font-black text-white tracking-tighter leading-none mb-1">KOREAZ</h3>
              <p className="text-white/40 text-[10px] font-bold mb-2">구독자 284,000명 · 영상 1,247개</p>
              <p className="text-gold font-en font-medium text-[11px] tracking-widest italic mb-4">All about Korea A to Z</p>
              <p className="text-white/60 text-[12px] leading-relaxed break-keep max-w-sm font-medium line-clamp-1">
                대한민국의 외교, 문화, 비전을 세계에 알리는 공식 채널
              </p>
            </div>

            <div className="flex-1 min-h-0 bg-[#0A1D39] rounded-2xl shadow-2xl relative overflow-hidden group/vid mb-4 border border-white/10 aspect-video mx-auto w-full">
               <img 
                  src="https://images.unsplash.com/photo-1540914120281-17c6a9cce04b?w=1000&q=90" 
                  onError={handleImgError}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover/vid:scale-110 opacity-80"
                  alt="Korea Cultural Content"
                />
               <div className="absolute inset-0 bg-black/10 group-hover/vid:bg-transparent transition-all" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" size={56} />
               </div>
            </div>

            <button className="flex-shrink-0 mx-auto px-8 py-2.5 bg-[#FF0000] text-white font-black text-[12px] tracking-[0.2em] hover:brightness-110 transition-all rounded-full flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]">
               <Play size={10} className="fill-white" />
               채널 구독하기
            </button>
          </motion.div>

          {/* RIGHT: SNS Grid (2x2) */}
          <div className="grid grid-cols-2 gap-6 h-full min-h-0">
            <FixedSNSCard 
              sns={{ name: 'INSTAGRAM', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', stats: '팔로워 52,400명' }}
              delay={0.1}
            >
              <div className="grid grid-cols-3 gap-2 h-full items-center px-1">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="aspect-square rounded-lg overflow-hidden border border-white/20 shadow-md">
                    <img src={`https://picsum.photos/seed/mofainsta${n}/300/300`} className="w-full h-full object-cover" alt="" />
                  </div>
                ))}
              </div>
            </FixedSNSCard>

            <FixedSNSCard 
              sns={{ name: 'FACEBOOK', color: 'bg-[#1877F2]', stats: '좋아요 128,000개' }}
              delay={0.2}
            >
              <div className="bg-white/10 rounded-xl p-4 h-full flex flex-col justify-center border border-white/10">
                <Quote className="text-white/30 mb-1" size={16} />
                <p className="text-[12px] font-bold text-white leading-snug line-clamp-2 italic">
                  대한민국 외교부는 자유, 평화, 번영에 기여하는 글로벌 중추국가로서 나아갑니다.
                </p>
                <div className="flex items-center gap-3 mt-2 text-white/60">
                  <div className="flex items-center gap-1"><Heart size={10} fill="currentColor" /> <span className="text-[10px] font-black">1.2k</span></div>
                  <div className="flex items-center gap-1"><MessageCircle size={10} fill="currentColor" /> <span className="text-[10px] font-black">42</span></div>
                </div>
              </div>
            </FixedSNSCard>

            <FixedSNSCard 
              sns={{ name: 'X', color: 'bg-black', stats: '@mofa_kr · 방금', border: 'border border-white/10' }}
              delay={0.3}
            >
              <div className="bg-white/5 rounded-xl p-4 h-full flex flex-col justify-center border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[7px] font-black">M</div>
                  <span className="text-[10px] font-bold text-white/50">외교부 @mofa_kr</span>
                </div>
                <p className="text-[11px] text-white/80 leading-relaxed font-medium px-2 border-l-2 border-gold/40 line-clamp-2">
                  글로벌 보건 협력과 기후 변화 대응을 위해 국제 사회와 견고한 연대를 구축하고 있습니다.
                </p>
              </div>
            </FixedSNSCard>

            <FixedSNSCard 
              sns={{ name: 'YOUTUBE', color: 'bg-[#FF0000]', stats: '▶ 조회수 23만회' }}
              delay={0.4}
            >
              <div className="relative rounded-2xl overflow-hidden h-full border border-white/20 shadow-lg group-hover:scale-[1.03] transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1524522173746-f628baad3644?w=500" className="w-full h-full object-cover opacity-90" alt="" />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <PlayCircle size={32} className="text-white fill-white/20" />
                </div>
              </div>
            </FixedSNSCard>
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="flex-1 grid grid-cols-2 gap-8 min-h-0 pt-2 pb-2">
           {/* Dokdo Banner */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="w-full h-full flex items-center justify-between bg-white rounded-2xl px-8 py-3 shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-lg transition-all group max-h-[100px]"
           >
             <div className="flex items-center gap-5 flex-1">
               <div className="w-10 h-10 bg-gradient-to-br from-[#0D2B55] to-blue-800 rounded-lg flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform">🏝️</div>
               <div>
                  <h4 className="text-lg font-black text-primary leading-tight">독도</h4>
                  <p className="text-slate-400 text-[10px] font-bold">대한민국의 아름다운 영토</p>
               </div>
             </div>
             <div className="flex flex-col items-end gap-1 shrink-0">
                <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-primary transition-colors">
                  <ExternalLink size={12} /> 누리집 바로가기
                </button>
                <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-primary transition-colors">
                  <Video size={12} /> 동영상 보기
                </button>
             </div>
           </motion.div>

           {/* East Sea Banner */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="w-full h-full flex items-center justify-between bg-white rounded-2xl px-8 py-3 shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-lg transition-all group max-h-[100px]"
           >
             <div className="flex items-center gap-5 flex-1">
               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-primary rounded-lg flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform">🌊</div>
               <div>
                  <h4 className="text-lg font-black text-primary leading-tight">동해</h4>
                  <p className="text-slate-400 text-[10px] font-bold">과거, 현재, 미래의 이름</p>
               </div>
             </div>
             <div className="flex flex-col items-end gap-1 shrink-0">
                <button className="text-[10px] font-black text-slate-400 hover:text-primary transition-colors">자세히 보기</button>
                <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-primary transition-colors">
                  <Video size={12} /> 동영상 보기
                </button>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FixedSNSCardProps {
  sns: {
    name: string;
    color: string;
    stats: string;
    border?: string;
  };
  delay: number;
  children?: React.ReactNode;
}

const FixedSNSCard: React.FC<FixedSNSCardProps> = ({ sns, delay, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`${sns.color} rounded-[1.5rem] p-5 text-white flex flex-col shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden ${sns.border || ''}`}
  >
    <div className="flex-shrink-0 flex items-center gap-2 opacity-90 mb-3">
      <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-lg">
         <Globe size={14} />
      </div>
      <span className="font-black text-[11px] tracking-tight">{sns.name}</span>
    </div>

    <div className="flex-1 min-h-0 mb-3">
       {children}
    </div>

    <div className="flex-shrink-0 pt-2 flex items-center justify-between opacity-70 border-t border-white/10 font-black text-[9px] tracking-widest uppercase">
       {sns.stats}
    </div>
  </motion.div>
);

export default MediaHub;
