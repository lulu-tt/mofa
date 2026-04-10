import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { MISSIONS_DATA } from '../../data/mockData';
import DottedGlobe from './DottedGlobe';

const MissionSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredMissions = MISSIONS_DATA.filter(mission => {
    const matchesSearch = mission.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mission.enName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || mission.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  // Staggered layout helper: Split missions into two columns
  const leftCol = filteredMissions.filter((_, i) => i % 2 === 0);
  const rightCol = filteredMissions.filter((_, i) => i % 2 !== 0);

  return (
    <section className="bg-gradient-to-br from-[#061A40] via-[#0A2660] to-[#0D3B94] pt-8 pb-12 px-6 md:px-12 overflow-hidden text-white h-full flex flex-col relative">
      {/* Background Text Pattern (Subtle) */}
      <div className="absolute top-4 left-10 text-[18vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
        Worldwide
      </div>

      <div className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col relative z-10">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
          {/* Left: 3D Dotted Globe & Callout (Shifted DOWN per request) */}
          <div className="lg:w-[45%] flex flex-col pt-24">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-gold font-bold text-sm tracking-widest uppercase mb-4">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" /> Diplomatic missions Worldwide
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black leading-[1.2] mb-0">
                국가/지역별<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">총영사관 및 분관</span>
              </h2>
            </div>

            <div className="relative w-full h-[600px] md:h-[800px] mt-4">
              <DottedGlobe />
              {/* Stats overlay */}
              <div className="absolute bottom-16 left-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-black text-white">194</span>
                  <span className="text-2xl font-bold text-gold">+</span>
                </div>
                <p className="text-sm font-bold text-white/40 tracking-[0.3em] uppercase mt-2">Overseas Missions</p>
              </div>
            </div>
          </div>

          {/* Right: Search & Staggered Mission Cards */}
          <div className="lg:w-[55%] flex flex-col pt-32 h-full overflow-hidden">
            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8 w-full z-20">
              <div className="relative w-full sm:w-48">
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full h-12 px-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl appearance-none text-xs font-bold text-white focus:outline-none focus:border-gold/50 transition-all shadow-xl"
                >
                  <option value="all" className="bg-[#0A2660]">전체 대륙</option>
                  <option value="northeast" className="bg-[#0A2660]">동북아시아</option>
                  <option value="southeast" className="bg-[#0A2660]">동남아시아</option>
                  <option value="northamerica" className="bg-[#0A2660]">북미</option>
                </select>
                <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
              </div>

              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="공관 또는 국가명을 검색하세요"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 pl-6 pr-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-all shadow-2xl"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gold/10 rounded-xl">
                  <Search size={18} className="text-gold" />
                </div>
              </div>
            </div>

            {/* Staggered Mission Card List (Independent Scroll Area) */}
            <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar pb-20">
              <div className="flex gap-4 items-start">
                <AnimatePresence mode="popLayout">
                  {/* Left Column */}
                  <div className="flex-1 flex flex-col gap-6">
                    {leftCol.map((mission, idx) => (
                      <MissionCard key={mission.id} mission={mission} idx={idx} />
                    ))}
                  </div>
                  {/* Right Column (Staggered/Shifted Down) */}
                  <div className="flex-1 flex flex-col gap-6 pt-16">
                    {rightCol.map((mission, idx) => (
                      <MissionCard key={mission.id} mission={mission} idx={idx} />
                    ))}
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted MissionCard Component for clarity and reuse
const MissionCard = ({ mission, idx }: { mission: any; idx: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 rounded-[2rem] relative group hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
  >
    {/* Header: Flag & Name */}
    <div className="flex items-start gap-4 mb-6">
      <div className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
        {mission.flag}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-black text-white group-hover:text-gold transition-colors leading-tight">
          {mission.name}
        </h4>
        <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">
          {mission.enName}
        </p>
      </div>
    </div>

    {/* Timing Info */}
    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
        <span className="text-[9px] uppercase font-bold text-white/20 block mb-1">서울</span>
        <p className="text-xs font-bold text-white/80">2026.4.9 10:25am</p>
      </div>
      <div className="bg-gold/5 p-3 rounded-2xl border border-gold/10">
        <span className="text-[9px] uppercase font-bold text-gold/40 block mb-1">현지</span>
        <p className="text-xs font-bold text-gold">{mission.time.split(' ')[1]} {mission.time.split(' ')[2]}</p>
      </div>
    </div>

    {/* Contact Details (Rich Content) */}
    <div className="space-y-3 mb-6 text-[11px]">
      <div className="flex items-center gap-3">
        <span className="w-16 text-white/30 font-bold shrink-0">대표전화</span>
        <span className="text-white/70">{mission.phone}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-16 text-red-400/50 font-bold shrink-0">긴급전화</span>
        <span className="text-red-300 font-bold">{mission.emergency}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-16 text-white/30 font-bold shrink-0">전자메일</span>
        <span className="text-blue-400/80 underline underline-offset-4">{mission.email}</span>
      </div>
      <div className="flex items-start gap-3">
        <span className="w-16 text-white/30 font-bold shrink-0">근무시간</span>
        <span className="text-white/60 leading-relaxed">{mission.hours}</span>
      </div>
      <div className="flex items-start gap-3 border-t border-white/5 pt-3">
        <span className="w-16 text-white/20 font-bold shrink-0">주소</span>
        <span className="text-white/40 leading-relaxed italic">{mission.address}</span>
      </div>
    </div>

    {/* Action Button */}
    <button className="w-full h-11 bg-white/5 border border-white/10 rounded-2xl text-xs font-black text-white group-hover:bg-white group-hover:text-primary transition-all">
      홈페이지 바로가기
    </button>
  </motion.div>
);

export default MissionSection;
