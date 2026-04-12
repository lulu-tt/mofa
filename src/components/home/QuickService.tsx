import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Plane, FileText, Globe, Users, PhoneCall, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/mockData';

const iconConfig: Record<string, { icon: React.ReactNode }> = {
  passport: { 
    icon: <BookOpen size={24} />, 
  },
  travel: { 
    icon: <Plane size={24} />, 
  },
  visa: { 
    icon: <FileText size={24} />, 
  },
  minwon: { 
    icon: <Globe size={24} />, 
  },
  register: { 
    icon: <Users size={24} />, 
  },
  phone: { 
    icon: <PhoneCall size={24} />, 
  },
};

const QuickService: React.FC = () => {
  return (
    <section className="h-[45vh] bg-slate-50/50 pb-4 pt-2 px-6 md:px-12 border-t border-slate-100 flex flex-col">
      <div className="flex-1 max-w-[1440px] shadow-2xl shadow-primary/5 mx-auto bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden group/container w-full h-full flex flex-col">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover/container:scale-110" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -ml-32 -mb-32 blur-3xl transition-transform duration-1000 group-hover/container:scale-110" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 shrink-0">
            <div>
              <h3 className="text-2xl font-black text-primary tracking-tight mb-2 flex items-center gap-3">
                자주 찾는 서비스
                <span className="text-gold text-sm font-en font-bold tracking-widest uppercase py-1 px-3 bg-gold/10 rounded-full">Quick Access</span>
              </h3>
              <p className="text-slate-400 text-sm font-medium">국민 여러분이 가장 많이 이용하시는 핵심 서비스를 한곳에 모았습니다.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-xs font-black text-primary/40 hover:text-gold transition-all tracking-widest uppercase border-b border-transparent hover:border-gold pb-1 self-start md:self-center">
              전체 서비스 보기 <ArrowRight size={14} />
            </a>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 min-h-0 items-center">
            {SERVICES.map((svc, index) => {
              const cfg = iconConfig[svc.icon];
              return (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-slate-50 border border-slate-100 p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-primary/5 flex flex-col items-center text-center h-[90%]"
                >
                  <div className="w-14 h-14 bg-primary/8 text-primary/80 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-sm">
                    {cfg.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-slate-800 font-bold text-base tracking-tight group-hover:text-primary transition-colors">
                      {svc.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed px-2 line-clamp-2">
                      {svc.desc}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <motion.div 
                    initial={{ width: 0 }}
                    whileHover={{ width: '40%' }}
                    className="h-1 mx-auto mt-6 rounded-full opacity-20 bg-primary" 
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickService;
