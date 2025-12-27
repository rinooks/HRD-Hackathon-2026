import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, highlight, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-600 drop-shadow-lg">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gradient-to-r from-red-600 to-transparent rounded-full mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};