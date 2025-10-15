import React from 'react';

interface GlassBadgeProps {
  text?: string;
}

const GlassBadge: React.FC<GlassBadgeProps> = ({ text = "Text Here" }) => {
  return (
    <div className="relative inline-flex items-center justify-center md:px-5 lg:px-10 md:py-3 px-5 py-2 rounded-full bg-white/30 backdrop-blur-xl border border-white/30 overflow-hidden relative rounded-[30px]
        transition duration-300 ease-in-out
        hover:brightness-115
        hover:scale-101">
      <span className="relative z-10  text-sm lg:text-base font-semibold text-white tracking-tight">
        {text}
      </span>
    </div>
  );
};

export default GlassBadge;

