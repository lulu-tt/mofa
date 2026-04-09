import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Plane, FileText, Globe, Users, PhoneCall } from 'lucide-react';
import { SERVICES } from '../../data/mockData';

const iconMap: Record<string, React.ReactNode> = {
  passport: <BookOpen size={20} />,
  travel: <Plane size={20} />,
  visa: <FileText size={20} />,
  minwon: <Globe size={20} />,
  register: <Users size={20} />,
  phone: <PhoneCall size={20} />,
};

const QuickService: React.FC = () => {
  return (
    <section className="bg-primary/5 py-6 px-6 md:px-12 border-t border-slate-200 mt-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0 flex items-center gap-3">
          <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-xs">GO</span>
          </div>
          <p className="text-primary font-black text-sm tracking-tight">자주 찾는 서비스</p>
        </div>
        
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200 rounded-sm overflow-hidden">
          {SERVICES.map((svc, index) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-white p-4 flex items-center gap-4 hover:bg-gold transition-all cursor-pointer"
            >
              <div className="text-gold group-hover:text-white transition-colors flex-shrink-0">
                {iconMap[svc.icon]}
              </div>
              <div className="flex flex-col">
                <span className="text-slate-800 font-bold text-[13px] group-hover:text-white transition-colors">{svc.name}</span>
                <span className="hidden xl:block text-[10px] text-slate-400 group-hover:text-white/70 transition-colors leading-none mt-1">
                  {svc.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickService;
