import React from 'react';
import { Bot, BarChart3, Users, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { SectionTitle } from './ui/SectionTitle';

const WhyNow: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <SectionTitle
          title="Why"
          highlight="Now?"
          subtitle="단순한 교육 운영과 강의를 넘어, HRD Product Maker로 도약할 시간"
        />

        {/* Story Part 1: The Problem & Opportunity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-red-500 inline-block border-b-4 border-red-500/30 pb-2 mb-2">머릿속 아이디어</span>를<br />
              현실로 꺼낼 수 있다면?
            </h3>
            
            <div className="space-y-8">
              <div className="group flex gap-6">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-colors duration-300">
                  <span className="text-lg font-bold text-zinc-500 group-hover:text-red-500 transition-colors">01</span>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">Pain Point</h4>
                    <p className="text-gray-400 leading-relaxed">"반복되는 엑셀 작업, 끝없는 강의안 수정..."<br/>담당자의 운영 효율과 강사의 교육 효과, 누구보다 깊게 고민하는 건 바로 당신입니다.</p>
                </div>
              </div>

              <div className="group flex gap-6">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-colors duration-300">
                  <span className="text-lg font-bold text-zinc-500 group-hover:text-red-500 transition-colors">02</span>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">Solution: Vibe Coding</h4>
                    <p className="text-gray-400 leading-relaxed">개발 지식이 없어서 포기하셨나요? 이제 <strong className="text-white">자연어(Natural Language)</strong>가 곧 코드가 됩니다. Google AI Studio로 당신의 기획이 즉시 앱이 됩니다.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Coding Abstract Visual */}
            <GlassCard className="relative z-10 p-0 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700 border-white/10">
                <div className="bg-[#1e1e1e] p-4 border-b border-white/5 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 px-3 py-1 bg-black/50 rounded text-xs text-gray-500 font-mono">app.tsx</div>
                </div>
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                        alt="Coding screen"
                        className="w-full h-auto opacity-60 grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                             <div className="flex items-center gap-3 mb-3">
                                <Code2 className="w-5 h-5 text-red-500" />
                                <span className="text-xs text-red-400 font-mono tracking-wider font-bold">AI PROMPT</span>
                            </div>
                             <p className="text-sm font-mono text-gray-300">
                                "Create a dark-themed dashboard for HR analytics. Include a chart for employee satisfaction."
                            </p>
                        </div>
                    </div>
                </div>
            </GlassCard>
            {/* Background Blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 to-transparent opacity-20 blur-2xl -z-10 rounded-[30px]"></div>
          </div>
        </div>

        {/* Story Part 2: Showcase Examples */}
        <div className="space-y-16">
            <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3 h-3" />
                  Actual Outcomes
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">만들게 될 <span className="text-red-500">서비스 예시</span></h3>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                   이론이 아닙니다. 실제 배포 가능한 웹 애플리케이션입니다.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Example 1 */}
                <GlassCard className="group relative h-full flex flex-col p-0 border-white/5 hover:border-red-500/30" hoverEffect={true}>
                    <div className="h-48 bg-zinc-900/50 relative overflow-hidden group-hover:h-56 transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
                            alt="Onboarding"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                        <div className="absolute top-4 left-4">
                            <span className="w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </span>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col relative bg-[#111]">
                        <h4 className="text-xl font-bold mb-3 text-white flex items-center justify-between">
                            Onboarding Mate
                            <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" />
                        </h4>
                        <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed border-t border-white/5 pt-4">
                            "연차 규정이 뭐죠?" 반복되는 질문은 그만. 사내 규정 문서를 학습하여 신규 입사자에게 24시간 답변해주는 AI 멘토
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-medium">#RAG</span>
                            <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-medium">#Chatbot</span>
                        </div>
                    </div>
                </GlassCard>

                {/* Example 2 */}
                <GlassCard className="group relative h-full flex flex-col p-0 border-white/5 hover:border-red-500/30" hoverEffect={true}>
                    <div className="h-48 bg-zinc-900/50 relative overflow-hidden group-hover:h-56 transition-all duration-500">
                         <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                            alt="Analytics"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                        <div className="absolute top-4 left-4">
                            <span className="w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-white" />
                            </span>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col relative bg-[#111]">
                        <h4 className="text-xl font-bold mb-3 text-white flex items-center justify-between">
                            Edu-Insight Board
                            <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" />
                        </h4>
                        <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed border-t border-white/5 pt-4">
                            수천 건의 강의 만족도 서술형 응답을 AI가 감성 분석. 키워드와 개선점을 자동으로 추출하여 시각화하는 대시보드
                        </p>
                        <div className="flex flex-wrap gap-2">
                             <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-medium">#Analytics</span>
                            <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-medium">#Dashboard</span>
                        </div>
                    </div>
                </GlassCard>

                 {/* Example 3 */}
                <GlassCard className="group relative h-full flex flex-col p-0 border-white/5 hover:border-red-500/30" hoverEffect={true}>
                    <div className="h-48 bg-zinc-900/50 relative overflow-hidden group-hover:h-56 transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                            alt="Mentoring"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                         <div className="absolute top-4 left-4">
                            <span className="w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center">
                                <Users className="w-5 h-5 text-white" />
                            </span>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col relative bg-[#111]">
                        <h4 className="text-xl font-bold mb-3 text-white flex items-center justify-between">
                            Role-Play Coach
                            <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" />
                        </h4>
                        <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed border-t border-white/5 pt-4">
                            CS/세일즈 교육을 위한 AI 페르소나 롤플레잉. 실제 음성 대화로 실습하고, 즉각적인 피드백 리포트를 제공
                        </p>
                         <div className="flex flex-wrap gap-2">
                             <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-medium">#Voice_AI</span>
                            <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-medium">#Coaching</span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;