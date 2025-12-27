import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { SectionTitle } from './ui/SectionTitle';

const Mentors: React.FC = () => {
  const mentors = [
    { name: "원운식", role: "AI Tech Lead", desc: "Gemini 프롬프트 엔지니어링 마스터", avatar: "Felix", color: "b6e3f4" },
    { name: "김관주", role: "Product Designer", desc: "사용자를 홀리는 UI/UX 디자인", avatar: "Aneka", color: "c0aede" },
    { name: "최송일", role: "Full Stack Dev", desc: "아이디어를 코드로 실현하는 빌더", avatar: "James", color: "ffdfbf" },
    { name: "임정훈", role: "HRD Consultant", desc: "교육공학 기반의 서비스 기획", avatar: "Maria", color: "ffdfbf" },
    { name: "김민주", role: "Cloud Architect", desc: "안정적인 서버 배포와 운영", avatar: "Brian", color: "b6e3f4" },
    { name: "박준형", role: "Service Planner", desc: "비즈니스 임팩트를 만드는 기획", avatar: "Julia", color: "c0aede" },
    { name: "존킴", role: "Frontend Dev", desc: "바이브 코딩의 정석", avatar: "Robert", color: "ffdfbf" },
    { name: "레이디영", role: "EdTech Expert", desc: "에듀테크 트렌드와 인사이트", avatar: "Sora", color: "c0aede" },
  ];

  return (
    <section className="py-24 relative bg-black">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <SectionTitle 
          title="전문가" 
          highlight="멘토진" 
          subtitle="당신의 아이디어를 실현시켜줄 8인의 전문가 그룹" 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <GlassCard key={index} className="p-6 text-center flex flex-col items-center group border-white/5 hover:border-red-500/50 hover:bg-zinc-900/80">
              <div className="w-24 h-24 rounded-full p-1 mb-5 relative group-hover:scale-110 transition-transform duration-300 mx-auto">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500 to-transparent opacity-50 blur-md group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-zinc-800 border-2 border-zinc-700 group-hover:border-red-500 transition-colors">
                    <img 
                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${mentor.avatar}&backgroundColor=${mentor.color}`} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover"
                    />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 text-white group-hover:text-red-500 transition-colors">{mentor.name}</h3>
              <p className="text-red-500 font-semibold text-xs uppercase tracking-wider mb-3 bg-red-500/10 px-2 py-1 rounded">{mentor.role}</p>
              <p className="text-gray-400 text-sm leading-snug">{mentor.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;