import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [teamMembers, setTeamMembers] = useState([1, 2]);

  const addMember = () => {
    if (teamMembers.length < 5) {
      setTeamMembers([...teamMembers, teamMembers.length + 1]);
    } else {
      alert('최대 5명까지만 입력 가능합니다.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('신청이 성공적으로 접수되었습니다!\n\n기업교육AI스터디 담당자가 심사 후\n대표자 이메일로 결과를 안내해 드릴 예정입니다.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#111] border border-zinc-800 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors p-1"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">참가 신청서</h2>
            <p className="text-gray-400 text-sm">기업교육AI스터디와 함께할 팀을 소개해주세요.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1 */}
            <div className="space-y-4">
              <h4 className="text-red-500 font-bold border-b border-zinc-800 pb-2">01. 팀 정보 (Team Identity)</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">팀명</label>
                <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="예: 야근없는 HRD / 명강사 AI" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">팀 슬로건 (50자 이내)</label>
                <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="우리 팀을 표현하는 한 문장" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">대표자 정보</label>
                <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="홍길동 / 기업교육AI스터디 / 010-1234-5678 / hong@example.com" required />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">팀원 정보 (최소 2인 이상)</label>
                {teamMembers.map((num) => (
                  <input 
                    key={num}
                    type="text" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" 
                    placeholder={`팀원 ${num}: 성함 / 소속 / 이메일`} 
                    required 
                  />
                ))}
                <button 
                  type="button" 
                  onClick={addMember}
                  className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1 font-medium mt-2"
                >
                  <Plus className="w-4 h-4" /> 팀원 추가하기
                </button>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h4 className="text-red-500 font-bold border-b border-zinc-800 pb-2">02. 참가 계획 (The Plan)</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">참가 동기 및 팀 결성 배경</label>
                <textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors h-24 resize-none" placeholder="왜 이 멤버들이 모였나요? 무엇을 얻고 싶으신가요?" required></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">해결하고 싶은 현장의 문제 (Pain Point)</label>
                <textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors h-24 resize-none" placeholder="현재 업무나 강의 현장에서 느끼는 가장 큰 비효율은 무엇인가요?" required></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">만들고 싶은 서비스 아이디어</label>
                <textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors h-24 resize-none" placeholder="AI를 활용해 위 문제를 어떻게 해결하고 싶으신가요?" required></textarea>
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">팀원 R&R (역할 분담)</label>
                <textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors h-20 resize-none" placeholder="예: 홍길동(기획/발표), 김철수(프롬프트 작성), 이영희(디자인/QA)" required></textarea>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h4 className="text-red-500 font-bold border-b border-zinc-800 pb-2">03. 사전 역량 체크</h4>
              <p className="text-sm text-gray-400 mb-2">우리 팀의 AI/디지털 활용 능력은?</p>
              
              <div className="space-y-2">
                {[
                  { val: '1', label: '입문: ChatGPT 가끔 사용' },
                  { val: '2', label: '활용: 프롬프트 작성 가능' },
                  { val: '3', label: '능숙: API/노코드 툴 경험 있음' },
                  { val: '4', label: '개발자 보유: 코딩 가능한 멤버 있음' },
                ].map((opt) => (
                  <label key={opt.val} className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg cursor-pointer hover:bg-zinc-900 transition-colors">
                    <input type="radio" name="tech_level" value={opt.val} className="w-4 h-4 text-red-500 accent-red-500" required />
                    <span className="text-gray-300 text-sm">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50">
              <h4 className="text-gray-200 font-bold text-sm">04. 동의 및 제출</h4>
              
              <div className="space-y-3">
                {[
                  '[필수] 개인정보 수집 및 이용에 동의합니다.',
                  '[필수] 전 일정(1박 2일) 풀 타임 참여를 서약합니다. (불참 시 수료 불가)',
                  '[필수] 결과물 활용 정책(주최측 포트폴리오 등)에 동의합니다.',
                ].map((text, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 w-4 h-4 accent-red-500" />
                    <span className="text-gray-400 text-sm leading-snug">{text}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-red-500 to-[#b91c1c] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              신청서 제출하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;