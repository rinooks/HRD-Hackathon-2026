import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onApply: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onApply }) => {
  return (
    <section className="py-32 relative overflow-hidden text-center">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-black to-black z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
            망설이면 <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-rose-700">늦습니다.</span>
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 mb-12 font-light leading-relaxed">
            2026년, HRD 커리어의 터닝포인트.<br />
            지금 바로 당신의 팀과 함께 도전하세요.
          </p>
          
          <button 
            onClick={onApply}
            className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-red-600 hover:border-red-500 hover:scale-105 shadow-2xl"
          >
            <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-600 blur-lg -z-10"></span>
            지금 바로 신청하기
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="mt-8 text-sm text-zinc-500 font-mono">
            * 선착순 마감될 수 있습니다. (Team Only)
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;