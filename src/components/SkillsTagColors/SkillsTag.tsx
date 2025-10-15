import React from 'react';

interface SkillsTagProps {
  text?: string;
  bgColor?: string; // Tailwind class or gradient
  textColor?: string; // Tailwind text color
}

const SkillsTag: React.FC<SkillsTagProps> = ({
  text = "Text Here",
  bgColor = "bg-gradient-to-t from-blue-100 to-blue-400",
  textColor = "text-white"
}) => {
  return (
    <div
      className={`relative inline-flex cursor-pointer items-center justify-center px-6 py-3 rounded-[30px] shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)]
      ${bgColor} ${textColor} border border-gray-100
      transition duration-300 ease-in-out
      hover:shadow-[0_0_10px_rgba(216,234,255,0.8)]
      hover:brightness-105`}
    >
      <span className="text-sm lg:text-sm font-semibold tracking-tight relative z-10">
        {text}
      </span>
    </div>
  );
};

export default SkillsTag;
