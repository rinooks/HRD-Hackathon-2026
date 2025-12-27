import React from 'react';
import { Rocket, GraduationCap, Handshake } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { SectionTitle } from './ui/SectionTitle';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "나만의 AI 서비스 보유",
      desc: "로컬 파일이 아닙니다. Google Cloud Run으로 실제 서버에 배포된, 전 세계 어디서나 접속 가능한 나만의 웹 앱 URL을 갖게 됩니다."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "실무형 Vibe Coding 역량",
      desc: "복잡한 코딩 문법 대신, 자연어로 개발하는 Google AI Studio 활용법을 마스터합니다. 이제 아이디어만 있으면 무엇이든 만들 수 있습니다."
    },
    {
      icon: <Handshake className="w-8 h-8 text-white" />,
      title: "강력한 HRD 네트워크",
      desc: "변화를 주도하는 전국의 열정적인 HRD 담당자, 전문 강사들과 함께 밤을 새우며 기업교육AI스터디의 끈끈한 동료가 됩니다."
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <SectionTitle 
          title="참가" 
          highlight="혜택" 
          subtitle="단 이틀의 몰입으로 가져갈 수 있는 확실한 결과물" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="p-10 text-left h-full relative group hover:bg-zinc-900/60">
              {/* Giant Index Number Background */}
              <span className="absolute -top-4 -right-4 text-[120px] font-black text-white/[0.02] group-hover:text-red-500/[0.05] transition-colors select-none leading-none">
                0{index + 1}
              </span>

              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-900/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{benefit.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;