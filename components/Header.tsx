import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onApply: () => void;
}

const Header: React.FC<HeaderProps> = ({ onApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#050505]/90 backdrop-blur-md border-b border-glass-border' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-[1200px]">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-xl tracking-tighter">
            HRD Hackathon <span className="bg-gradient-to-br from-red-500 to-[#b91c1c] bg-clip-text text-transparent">2026</span>
          </span>
          <span className="hidden sm:inline-block text-xs bg-white/10 px-2 py-1 rounded text-gray-400">
            by 기업교육AI스터디
          </span>
        </div>
        
        <button 
          onClick={onApply}
          className="px-6 py-2.5 rounded-full border border-white/30 font-semibold text-sm hover:bg-white/10 hover:border-white transition-all duration-300"
        >
          신청하기
        </button>
      </div>
    </header>
  );
};

export default Header;