import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        bg-gradient-to-b from-white/[0.08] to-white/[0.02]
        backdrop-blur-xl 
        border border-white/10
        rounded-[24px] 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
        transition-all duration-500 ease-out
        group
        ${hoverEffect ? 'hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {/* Inner Highlight for depth */}
      <div className="absolute inset-0 rounded-[24px] border border-white/5 pointer-events-none"></div>
      
      {/* Gradient blob on hover (Optional visual flair) */}
      {hoverEffect && (
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};