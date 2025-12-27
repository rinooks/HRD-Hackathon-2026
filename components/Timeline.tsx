import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { SectionTitle } from './ui/SectionTitle';

const Timeline: React.FC = () => {
  return (
    <section className="py-24 relative" id="timeline">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <SectionTitle 
          title="프로그램" 
          highlight="일정" 
          subtitle="기획은 탄탄하게, 개발은 거침없이" 
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2" />

          {/* Day 1 */}
          <div className="relative flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24">
            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#050505] border-[3px] border-red-500 rounded-full z-10 -translate-x-1/2 mt-6" />
            
            <div className="w-full md:w-[45%] pl-14 md:pl-0 md:text-right md:pr-10 pt-4 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Day 1</h3>
              <span className="text-red-500 font-semibold block mt-1">2026.02.06 (금)</span>
              <p className="text-sm text-gray-500 mt-1">Online Zoom (3H)</p>
            </div>
            
            <div className="w-full md:w-[45%] pl-14 md:pl-10">
              <GlassCard className="p-8">
                <h4 className="text-xl font-bold mb-4 text-white">기획 & 기본기 (Planning & Basics)</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-white mr-2">14:00</span> 
                    <strong>Kick-off & Design Thinking</strong>
                    <div className="text-sm text-gray-500 mt-1">교육 현장의 진짜 문제를 정의하고 솔루션을 도출합니다.</div>
                  </li>
                  <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-white mr-2">15:00</span> 
                    <strong>Vibe Coding 입문</strong>
                    <div className="text-sm text-gray-500 mt-1">Google AI Studio 사용법 및 시스템 프롬프트 작성법 학습</div>
                  </li>
                  <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-white mr-2">16:50</span> 
                    <strong>Closing</strong>
                    <div className="text-sm text-gray-500 mt-1">팀 빌딩 안내 및 Day 2 준비물 체크</div>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>

          {/* Day 2 */}
          <div className="relative flex flex-col md:flex-row-reverse justify-between items-start">
             <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#050505] border-[3px] border-red-500 rounded-full z-10 -translate-x-1/2 mt-6" />
            
            <div className="w-full md:w-[45%] pl-14 md:pl-10 pt-4 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Day 2</h3>
              <span className="text-red-500 font-semibold block mt-1">2026.02.07 (토)</span>
              <p className="text-sm text-gray-500 mt-1">Offline 교육장 (11H)</p>
            </div>
            
            <div className="w-full md:w-[45%] pl-14 md:pl-0 md:pr-10">
              <GlassCard className="p-8">
                <h4 className="text-xl font-bold mb-4 text-white">빌드 & 배포 (Build & Deploy)</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-white mr-2">09:00</span> 
                    <strong>Opening & Team Building</strong>
                  </li>
                  <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-white mr-2">10:00</span> 
                    <strong>Sprint 1: Core Logic</strong>
                    <div className="text-sm text-gray-500 mt-1">핵심 기능 구현 및 AI 디버깅 (멘토 밀착 지원)</div>
                  </li>
                   <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-red-400 italic mr-2">12:30</span> 
                    <span className="text-red-400 italic">Lunch & Networking</span>
                  </li>
                  <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-white mr-2">13:30</span> 
                    <strong>Sprint 2: UI/UX Styling</strong>
                    <div className="text-sm text-gray-500 mt-1">최신 HRD 디자인 시스템(Glassmorphism) 적용</div>
                  </li>
                  <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-white mr-2">16:30</span> 
                    <strong>Sprint 3: Cloud Deploy</strong>
                    <div className="text-sm text-gray-500 mt-1">Cloud Run 컨테이너 배포 및 도메인 접속 테스트</div>
                  </li>
                   <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-red-500">
                    <span className="font-semibold text-white mr-2">18:30</span> 
                    <strong>Demo Day & Awards</strong>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;