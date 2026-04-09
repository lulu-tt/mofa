import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    '주요외교활동', '영사·국가지역', '외교정책', '뉴스·공지', '국민참여', '정보공개', '외교부 소개'
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full h-[var(--header-h)] z-[1000] transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg text-primary" : "bg-transparent text-white"
    )}>
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className={cn(
            "w-10 h-10 rounded-full border-2 overflow-hidden bg-white transition-colors",
            isScrolled ? "border-primary/20" : "border-white/40"
          )}>
            <img src="https://static.mofa.go.kr/www/images/common/logo_mofa.png" alt="외교부" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-widest">외교부</span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-70">MOFA Korea</span>
          </div>
        </a>

        {/* GNB (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="px-4 py-2 text-[14.5px] font-semibold hover:text-gold transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors" aria-label="검색">
            <Search size={20} />
          </button>
          
          <button className={cn(
            "hidden md:flex items-center gap-2 px-3 py-1.5 border rounded font-en text-xs font-bold tracking-wider transition-all",
            isScrolled ? "border-primary/30" : "border-white/30 hover:bg-white/10"
          )}>
            <span className="text-gold">KO</span>
            <span className="opacity-30">|</span>
            <span>EN</span>
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
