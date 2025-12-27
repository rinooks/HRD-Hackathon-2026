import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#030303]">
      {/* Dark gradient mesh base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505] opacity-90"></div>
      
      {/* Primary Red Glow - Top Left */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-600/20 rounded-full blur-[120px] animate-float-slow mix-blend-screen"></div>
      
      {/* Secondary Deep Red Glow - Bottom Right */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-rose-900/20 rounded-full blur-[100px] animate-float-delayed mix-blend-screen"></div>
      
      {/* Accent Blue/Purple Glow for "Tech" feel - Center moving */}
      <div className="absolute top-[20%] left-[30%] w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[80px] animate-pulse-slow opacity-40 mix-blend-color-dodge"></div>
      
      {/* Grid Overlay for Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    </div>
  );
};