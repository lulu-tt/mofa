import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HeaderProps {
  activeSection?: number;
}

const Header: React.FC<HeaderProps> = ({ activeSection = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLightSection = activeSection === 1 || activeSection === 2 || activeSection === 4;

  const navItems = [
    '주요외교활동', '영사·국가지역', '외교정책', '뉴스·공지', '국민참여', '정보공개', '외교부 소개'
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full h-[var(--header-h)] z-[1000] transition-all duration-500",
      isLightSection ? "bg-white/95 backdrop-blur-md shadow-sm text-primary" : "bg-transparent text-white"
    )}>
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className={cn(
          "flex items-center shrink-0 transition-opacity hover:opacity-80 active:scale-95",
          isLightSection ? "text-primary" : "text-white"
        )}>
          <svg viewBox="0 0 2048 828.97" className="h-10 md:h-12 w-auto overflow-visible" aria-label="외교부">
            <g>
              <g>
                <path fill="#FFFFFF" d="M806.5,422.9c0,165.1-133.8,298.9-298.9,298.9c-165.1,0-298.9-133.8-298.9-298.9c0-165.1,133.8-298.9,298.9-298.9C672.7,124,806.5,257.8,806.5,422.9z"/>
                <g>
                  <path fill="#003764" d="M647.9,402.0c-47.5-32.3-108.4-19.2-140.4,29.4c-26.6,40.6-66.9,45.7-82.4,45.7c-50.9,0-85.6-35.8-96.0-72.8c0,0-0.5-1.9-0.6-2.3c-4.1-15.5-5.1-22.8-5.1-39.2c0-88.4,90.8-187.0,221.5-187.0c133.9,0,210.5,101.9,230.3,158.6c-0.4-1.1-0.7-2.0-1.0-3.0c-38.0-110.8-143.0-190.5-266.8-190.5c-155.6,0-281.8,126.2-281.8,281.9c0,139.2,100.4,258.3,239.6,258.3c111.0,0,185.7-62.2,219.8-148.1C703.8,486.1,690.5,431.0,647.9,402.0z"/>
                  <path fill="#E4032E" d="M776.9,339.9c-16.5-55.3-93.6-164.1-232.0-164.1c-130.7,0-221.5,98.5-221.5,187.0c0,16.4,1.0,23.8,5.1,39.2c-1.7-6.8-2.6-13.5-2.6-20.1c0-92.1,92.2-156.0,187.1-156.0c128.4,0,232.5,104.1,232.5,232.4c0,100.6-57.9,187.8-142.0,229.6v0.1c108.5-39.3,185.9-143.2,185.9-265.2C789.3,394.0,785.4,368.5,776.9,339.9z"/>
                </g>
              </g>
              <g fill="currentColor">
                <path d="M1094.2,370.6c0,10.6-2.2,20.5-6.5,29.9c-4.3,9.4-10.1,17.6-17.5,24.8c-11.2,10.4-23.9,17.3-38.2,20.7v58.6h77.7v31.1h-187.3v-31.1h74.8v-58.3c-15.3-3.4-28.6-10.5-39.8-21c-7.3-7.1-13.2-15.4-17.5-24.8s-6.5-19.4-6.5-29.9c0-10.6,2.2-20.6,6.5-29.9c4.3-9.4,10.1-17.6,17.5-24.8c7.1-6.9,15.6-12.4,25.4-16.5c9.8-4.1,20.2-6.1,31.2-6.1s21.4,2,31.1,6.1s18.1,9.6,25.2,16.5c7.3,7.1,13.2,15.4,17.5,24.8C1092,350.0,1094.2,360.0,1094.2,370.6z M1060.2,370.6c0-6.3-1.2-12.2-3.7-17.8c-2.5-5.6-5.8-10.6-9.9-14.9c-4.3-4.1-9.3-7.4-14.9-9.9c-5.6-2.5-11.5-3.7-11.5-3.7h-6.3c-6.3,0-12.2,1.2-17.8,3.7c-5.6,2.5-10.6,5.8-14.9,9.9c-4.1,4.3-7.4,9.3-9.9,14.9c-2.5,5.6-3.7,11.5-3.7,17.8c0,6.3,1.2,12.2,3.7,17.8c2.5,5.6,5.8,10.6,9.9,14.9c4.3,4.1,9.3,7.4,14.9,9.9c5.6,2.5,11.5,3.7,11.5,3.7h6.3s12.2-1.2,17.8-3.7c5.6-2.5,10.6-5.8,14.9-9.9c4.1-4.3,7.4-9.3,9.9-14.9C1059,382.8,1060.2,376.8,1060.2,370.6z M1132.1,281.9h35v281.9h-35V281.9z"/>
                <path d="M1383,424.6h34.3v87.4h83.2v31.1H1241.6v-31.1h60.8V424.6h34.3v87.4h46.3V424.6z M1444.2,462.8V328.5h-182.5v-31.1h217.5v165.4H1444.2z"/>
                <path d="M1563.6,460.2h258.9v31.1h-112v72.5h-35.3v-72.5h-111.7V460.2z M1618.9,322.4h148.2v-35.6h34.6v135.6h-217.5V286.8h34.6V322.4z M1767.1,352.8h-148.2v38.8h148.2V352.8z"/>
              </g>
            </g>
          </svg>
        </a>

        {/* GNB (Desktop) */}
        <nav className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="px-3 py-2 text-[15px] font-bold hover:text-gold transition-all flex items-center gap-1 group whitespace-nowrap"
            >
              {item}
              <ChevronDown size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm font-bold hover:opacity-70 transition-opacity group">
              화면 설정
              <ChevronDown size={14} className="opacity-40 group-hover:opacity-100" />
            </button>
            <span className="w-px h-3 bg-current opacity-20" />
            <button className="flex items-center gap-1 text-sm font-bold hover:opacity-70 transition-opacity group">
              Language
              <ChevronDown size={14} className="opacity-40 group-hover:opacity-100" />
            </button>
          </div>

          <button className="p-2 hover:bg-black/5 rounded-full transition-colors" aria-label="검색">
            <Search size={20} />
          </button>
          
          <button 
            className="xl:hidden p-2 hover:bg-black/5 rounded-full" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-[2000] flex flex-col p-10 pt-24 text-white">
          <button className="absolute top-6 right-6" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-2xl font-bold flex items-center justify-between border-b border-white/10 pb-4">
                  {item}
                  <span className="text-sm opacity-40">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
