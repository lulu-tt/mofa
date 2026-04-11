import React from 'react';
import { ChevronRight, Pause, Play, Plus } from 'lucide-react';

const relatedBanners = [
  { id: 1, img: "https://www.mofa.go.kr/upload/notice/20260403020116832.jpg", title: "2026 국가데이터" },
  { id: 2, img: "https://www.mofa.go.kr/upload/notice/20260311041605430.jpg", title: "중동 상황" },
  { id: 3, img: "https://www.mofa.go.kr/upload/notice/20251208103426246.jpg", title: "한파 행동요령" },
  { id: 4, img: "https://www.mofa.go.kr/upload/notice/20251112111215897.jpg", title: "비실명 신고" },
  { id: 5, img: "https://www.mofa.go.kr/upload/notice/20251021054805877.jpg", title: "소비자24" },
  { id: 6, img: "https://www.mofa.go.kr/upload/notice/20250911053813969.jpg", title: "국립외교원" },
  { id: 7, img: "https://www.mofa.go.kr/upload/notice/20250630022321515.jpg", title: "관세청" },
  { id: 8, img: "https://www.mofa.go.kr/upload/notice/20250324025108240.png", title: "MOFA 인사이트" },
];

const RelatedSites: React.FC = () => {
  return (
    <div className="w-full bg-white border-t border-gray-100 py-6 md:py-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between gap-6">
          
          {/* Controls - Left/Paused Style */}
          <div className="flex items-center gap-3">
             <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-primary transition-colors">
               <Pause size={16} />
             </button>
          </div>

          {/* Banner List */}
          <div className="flex-1 flex items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-3 animate-slide-slow group-hover:pause">
              {relatedBanners.map((banner) => (
                <a 
                  key={banner.id}
                  href="#"
                  className="flex-shrink-0 w-[180px] h-[54px] border border-gray-100 rounded bg-white hover:border-primary/30 transition-all flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src={banner.img} 
                    alt={banner.title} 
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              ))}
              {/* Duplicate for seamless loop if needed, but for now just grid is fine */}
            </div>
          </div>

          {/* Total View */}
          <button className="flex items-center gap-2 text-[15px] font-bold text-gray-900 border-l border-gray-100 pl-6 shrink-0 group hover:text-primary transition-colors">
            전체보기
            <Plus size={18} className="text-gray-400 group-hover:text-primary" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default RelatedSites;
