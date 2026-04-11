import React from 'react';
import { Globe, MessageCircle, Tv, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white/50 flex flex-col">
      <div className="max-w-[1440px] mx-auto py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
        {/* Info Column */}
        <div className="lg:col-span-5 pr-0 lg:pr-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10 transition-colors hover:border-gold">
              <img src="https://static.mofa.go.kr/www/images/common/logo_mofa.png" className="w-8 grayscale invert opacity-70" alt="Logo" />
            </div>
            <span className="text-2xl font-black text-white tracking-widest uppercase">외교부</span>
          </div>
          <p className="text-base leading-relaxed break-keep mb-10 max-w-md">
            대한민국 외교부는 자유, 평화, 번영에 기여하는 글로벌 중추국가로서 국익을 증진하고 세계 평화에 기여하기 위해 끊임없이 노력합니다.
          </p>
          <div className="flex gap-4">
            {[Globe, MessageCircle, Tv].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="lg:col-span-2">
          <h3 className="text-white text-xs font-en font-black tracking-[0.3em] uppercase mb-8 opacity-80 decoration-gold decoration-2 underline-offset-8">Quick Menu</h3>
          <ul className="flex flex-col gap-4 text-sm font-semibold tracking-wide">
            {['주요외교활동', '영사·국가지역', '외교정책', '뉴스·공지', '국민참여', '외교부 소개'].map((link) => (
              <li key={link}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="lg:col-span-2">
          <h3 className="text-white text-xs font-en font-black tracking-[0.3em] uppercase mb-8 opacity-80">Support</h3>
          <ul className="flex flex-col gap-4 text-sm font-semibold tracking-wide">
            {['여권발급', '해외안전여행', '비자정보', '재외동포민원', '영사콜센터', '재외국민등록'].map((link) => (
              <li key={link}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-3">
          <h3 className="text-white text-xs font-en font-black tracking-[0.3em] uppercase mb-8 opacity-80">Contact & Visit</h3>
          <div className="flex flex-col gap-6 text-sm">
            <div className="flex gap-4">
              <MapPin size={18} className="text-gold shrink-0" />
              <p className="leading-relaxed">서울특별시 종로구 사직로8길 60</p>
            </div>
            <div className="flex gap-4">
              <Phone size={18} className="text-gold shrink-0" />
              <div>
                <strong className="text-white block mb-1 uppercase tracking-tighter">Diplomatic Call Center</strong>
                <p>02-3210-0404 (24시간)</p>
              </div>
            </div>
            <select className="w-full bg-primary/50 border border-white/10 p-3 mt-4 text-white text-xs font-bold font-kr outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
              <option>-- 패밀리사이트 바로가기 --</option>
              <option>재외동포청</option>
              <option>KOICA</option>
              <option>한국국제교류재단</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/40 py-8 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold tracking-widest text-white/30 uppercase">
          <p>© 2026 MINISTRY OF FOREIGN AFFAIRS, R.O.K. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">이용안내</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">저작권정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
