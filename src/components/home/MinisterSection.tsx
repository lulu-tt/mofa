import React from 'react';
import { motion } from 'framer-motion';

const MinisterSection: React.FC = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-slate-900 group">
      {/* Background with subtle parallax emulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] linear group-hover:scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')` }}
      />
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
      
      <div className="relative z-10 h-full max-w-[1440px] mx-auto flex items-stretch">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] bg-primary/80 backdrop-blur-xl p-12 md:p-20 flex flex-col justify-center text-white"
        >
          <div className="relative pl-6 mb-8">
            <div className="absolute left-0 top-1 bottom-1 w-1 bg-gold rounded-full" />
            <p className="text-xs font-en font-bold tracking-[0.4em] text-gold uppercase">Open Minister's Office</p>
          </div>
          
          <h2 className="text-6xl font-black mb-2 tracking-tighter">조 현</h2>
          <p className="text-gold font-en font-bold text-sm tracking-widest uppercase opacity-80">Minister of Foreign Affairs</p>
          
          <div className="w-16 h-[2px] bg-gold/40 my-10" />
          
          <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 break-keep">
            "대한민국의 국격에 걸맞은 <span className="text-gold">글로벌 중추국가</span> 외교를 통해 국민의 안전과 국익을 실현하겠습니다."
          </p>
          
          <div className="grid grid-cols-2 gap-3 mt-12">
            {['장관 외교활동', '장관 소개', '장관 연설문', '주요 일정'].map((btn) => (
              <button 
                key={btn} 
                className="px-6 py-4 border border-white/10 bg-white/5 text-sm font-bold hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300"
              >
                {btn}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Decorative Element */}
        <div className="hidden lg:flex flex-1 items-center justify-center opacity-20 hover:opacity-40 transition-opacity">
          <img src="https://static.mofa.go.kr/www/images/common/logo_mofa.png" className="w-[400px] grayscale invert" alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default MinisterSection;
