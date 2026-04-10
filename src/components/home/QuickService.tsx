import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, PlusCircle } from 'lucide-react';
import { SERVICES } from '../../data/mockData';

const QuickService: React.FC = () => {
  return (
    <section className="bg-slate-50 py-10 px-6 md:px-12 mt-auto border-t border-slate-100">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-black text-primary tracking-tight">자주 찾는 서비스</h3>
          <a href="#" className="flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">
            전체보기 <PlusCircle size={14} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVICES.map((svc, index) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white p-5 flex flex-col items-center justify-center text-center rounded-sm border border-slate-100 hover:border-gold/30 hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="w-10 h-10 mb-4 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <ChevronRight size={18} />
              </div>
              <div className="space-y-1">
                <p className="text-slate-800 font-bold text-sm tracking-tight group-hover:text-primary transition-colors">
                  {svc.name}
                </p>
                <p className="text-[10px] text-slate-400 group-hover:text-slate-500 transition-colors leading-tight px-2">
                  {svc.desc}
                </p>
              </div>
              
              {/* Subtle hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickService;
