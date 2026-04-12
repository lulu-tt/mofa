import React from 'react';
import { Globe, MapPin, Phone, ChevronDown, Camera, PlayCircle, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#060E1A] text-white py-20 px-6 md:px-12 flex flex-col font-sans">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
        
        {/* Column 1: Identity & Social */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2">
               <img src="https://static.mofa.go.kr/www/images/common/logo_mofa.png" alt="MOFA" className="w-full" />
             </div>
             <div>
               <h2 className="text-xl font-black tracking-tighter text-white">외교부</h2>
               <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">Ministry of Foreign Affairs, R.O.K.</p>
             </div>
          </div>
          <p className="text-sm leading-relaxed text-white/50 font-medium break-keep">
            대한민국 외교부는 자유, 평화, 번영에 기여하는 글로벌 중추국가로서 국익을 증진하고 세계 평화에 기여하기 위해 끊임없이 노력합니다.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <Globe size={18} />, color: 'hover:bg-blue-600', label: 'Website' },
              { icon: <Camera size={18} />, color: 'hover:bg-pink-600', label: 'Instagram' },
              { icon: <PlayCircle size={18} />, color: 'hover:bg-red-600', label: 'Youtube' },
              { icon: <Send size={18} />, color: 'hover:bg-sky-500', label: 'Twitter' }
            ].map((sns, i) => (
              <button 
                key={i} 
                aria-label={sns.label}
                className={`w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-white/40 transition-all ${sns.color} hover:text-white hover:border-transparent`}
              >
                {sns.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Menu */}
        <div>
          <h3 className="text-[12px] font-black text-white/40 tracking-[0.3em] uppercase mb-10">Quick Menu</h3>
          <ul className="grid grid-cols-1 gap-4 text-[14px] font-bold text-white/70">
            {['주요외교활동', '영사·국가/지역', '외교정책', '뉴스·공지', '국민참여', '외교부 소개'].map((item) => (
              <li key={item} className="hover:text-gold transition-colors cursor-pointer w-fit">{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-[12px] font-black text-white/40 tracking-[0.3em] uppercase mb-10">Support</h3>
          <ul className="grid grid-cols-1 gap-4 text-[14px] font-bold text-white/70">
            {['여권발급', '해외안전여행', '비자정보', '재외동포민원', '영사콜센터', '재외국민등록'].map((item) => (
              <li key={item} className="hover:text-gold transition-colors cursor-pointer w-fit">{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Related Sites */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-[12px] font-black text-white/40 tracking-[0.3em] uppercase mb-10">Contact & Visit</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <p className="text-[14px] font-bold text-white/70 leading-relaxed">서울특별시 종로구 사직로8길 60</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="text-[11px] font-black text-white/40 tracking-widest uppercase mb-1">Diplomatic Call Center</p>
                  <p className="text-[18px] font-black text-gold">02-3210-0404 (24시간)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <select className="appearance-none w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 text-[13px] font-bold text-white/60 focus:outline-none focus:border-gold/50 cursor-pointer group-hover:bg-white/10 transition-all">
              <option>-- 패밀리사이트 바로가기 --</option>
              <option>영사국가/지역안내</option>
              <option>재외동포재단</option>
              <option>한국국제협력단(KOICA)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover:text-gold transition-colors" size={16} />
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[11px] font-medium text-white/20 tracking-wider">© 2026 MINISTRY OF FOREIGN AFFAIRS, REPUBLIC OF KOREA. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[11px] font-bold text-white/30">
          <button className="hover:text-white transition-colors">이용약관</button>
          <button className="hover:text-gold transition-colors">개인정보처리방침</button>
          <button className="hover:text-white transition-colors">저작권정책</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
