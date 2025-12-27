import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { SectionTitle } from './ui/SectionTitle';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={toggle}
      >
        <span className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? 'text-red-500' : 'text-white group-hover:text-red-400'}`}>
          Q. {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-red-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-white" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-300 leading-relaxed pl-0 md:pl-4 border-l-2 border-red-500/30 ml-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "코딩을 전혀 못해도 참가할 수 있나요?",
      answer: "네, 물론입니다! 이번 해커톤은 전문 개발자가 아닌 HRD 담당자와 강사님들을 위한 행사입니다. Google AI Studio와 자연어 프롬프팅(Vibe Coding)을 통해 코딩 지식 없이도 앱을 만들 수 있도록 멘토들이 밀착 지원합니다."
    },
    {
      question: "개인으로도 참가 신청이 가능한가요?",
      answer: "본 행사는 팀워크와 협업을 중시하므로 3~5인의 팀 단위 신청을 원칙으로 하고 있습니다. 마음이 맞는 동료나 스터디원들과 함께 팀을 이뤄 도전해보세요!"
    },
    {
      question: "참가비용은 얼마인가요?",
      answer: "참가비는 1인당 10만원입니다. 이는 양질의 교육 환경과 중식, 다과, 웰컴 키트 제공 등을 위한 실비로 사용됩니다. 법인카드 결제 및 증빙 서류 발급이 가능합니다."
    },
    {
      question: "결과물에 대한 저작권은 누구에게 있나요?",
      answer: "모든 결과물의 지식재산권(IP)은 해당 팀에게 귀속됩니다. 단, 주최측(기업교육AI스터디)은 포트폴리오 및 행사 홍보 목적으로 결과물을 활용할 수 있습니다."
    },
    {
      question: "꼭 1박 2일 전체 일정을 참여해야 하나요?",
      answer: "네, 1박 2일(Day 1 온라인 3시간, Day 2 오프라인 11시간) 과정은 연속성 있는 프로그램으로 구성되어 있어 부분 참여는 불가능합니다. 수료증 발급을 위해서도 전 일정 참여가 필수입니다."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative" id="faq">
      <div className="container mx-auto px-6 relative z-10 max-w-[1000px]">
        <SectionTitle 
          title="자주 묻는" 
          highlight="질문" 
          subtitle="궁금한 점이 있으신가요?" 
        />
        
        <GlassCard className="p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index} 
              toggle={() => handleToggle(index)} 
            />
          ))}
        </GlassCard>
      </div>
    </section>
  );
};

export default FAQ;