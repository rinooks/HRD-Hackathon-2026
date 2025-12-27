import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onApply: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApply }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-[#050505]/50 to-[#050505]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px] text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium text-red-200 tracking-wide">Team Only • Limited Spots</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          상상하던 <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">HRD 도구</span>,<br />
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-red-600/20 blur-xl rounded-full"></span>
            <span className="relative text-red-500">현실이 되다.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          기획<span className="text-zinc-600 mx-2">|</span>Design Thinking 부터 
          배포<span className="text-zinc-600 mx-2">|</span>Cloud Deploy 까지<br className="hidden md:block"/>
          <span className="text-white font-medium">1박 2일의 AI 솔루션 개발 여정</span>
        </p>

        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <button 
            onClick={onApply}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white rounded-full text-lg font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.6)]"
            >
            {/* Shimmer Effect */}
            <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer skew-x-12"></div>
            
            <span>참가 신청하기</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-gray-500 font-medium tracking-wide">신청 마감: 2026.01.31 까지</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;