import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { SectionTitle } from './ui/SectionTitle';
import { CheckCircle2, MapPin, Calendar, CreditCard } from 'lucide-react';

const Info: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <SectionTitle title="참가" highlight="안내" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Eligibility */}
          <GlassCard className="p-10 h-full border-t-4 border-t-red-500">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-sm">01</span>
              참가 자격 요건
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                    <span className="block font-bold text-white mb-1">대상</span>
                    <span className="text-gray-400">AI 기술로 교육 혁신을 꿈꾸는 <strong className="text-white">HRD 담당자</strong> 및 <strong className="text-white">기업교육 강사</strong></span>
                </div>
              </li>
              <li className="flex gap-4">
                 <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                 <div>
                    <span className="block font-bold text-white mb-1">팀 구성</span>
                    <span className="text-gray-400">3인 이상 ~ 5인 이하 팀 단위 신청 (필수)</span>
                 </div>
              </li>
              <li className="flex gap-4">
                 <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                 <div>
                    <span className="block font-bold text-white mb-1">스킬</span>
                    <span className="text-gray-400">개발 지식 무관 (코딩을 몰라도 열정만 있다면 OK)</span>
                 </div>
              </li>
              <li className="flex gap-4">
                 <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                 <div>
                    <span className="block font-bold text-white mb-1">준비물</span>
                    <span className="text-gray-400">개인 노트북, 구글 계정, 오픈 마인드</span>
                 </div>
              </li>
            </ul>
          </GlassCard>

          {/* Time & Place */}
          <GlassCard className="p-10 h-full border-t-4 border-t-red-500">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-sm">02</span>
              일시 및 장소
            </h3>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <Calendar className="w-6 h-6 text-zinc-500 flex-shrink-0" />
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-bold text-white text-lg">Day 1</span>
                    <span className="text-red-500 font-medium">2026.02.06 (금)</span>
                  </div>
                  <p className="text-gray-400">14:00 ~ 17:00 @ Online Zoom</p>
                </div>
              </li>
              <li className="flex gap-5">
                <MapPin className="w-6 h-6 text-zinc-500 flex-shrink-0" />
                 <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-bold text-white text-lg">Day 2</span>
                    <span className="text-red-500 font-medium">2026.02.07 (토)</span>
                  </div>
                  <p className="text-gray-400">09:00 ~ 20:00 @ 오프라인 교육장 (서울)</p>
                </div>
              </li>
              <li className="flex gap-5 pt-4 border-t border-white/10">
                <CreditCard className="w-6 h-6 text-zinc-500 flex-shrink-0" />
                <div>
                   <span className="block font-bold text-white mb-1">참가비</span>
                   <span className="text-xl font-bold text-red-400">1인 10만원</span>
                   <p className="text-sm text-gray-500 mt-1">중식 및 다과, 웰컴 키트 제공 (법인카드 가능)</p>
                </div>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Info;