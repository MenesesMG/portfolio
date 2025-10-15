import React from 'react';

interface WorkBadgeProps {
  text?: string; // Can include line breaks like "UI/UX Designer\n& Product Manager"
}

const WorkBadge: React.FC<WorkBadgeProps> = ({
  text = "UI/UX Designer\n& Product Manager",
}) => {
  return (
    <div className="relative w-full rounded-[50px] p-[1px]
                    bg-gradient-to-b from-[rgba(251,251,251,0.1)] to-[rgba(223,223,223,0.1)]
                    shadow-[0px_6px_16px_0px_rgba(0,0,0,0.15)]
                    hover:brightness-110 hover:scale-[1.02] transition duration-300 ease-in-out">

      <div className="relative flex flex-col items-center justify-center w-full py-3">
        <span
          className="bg-workexperience-gradient bg-clip-text text-transparent
                     font-['Inter',_sans-serif] font-bold text-base text-center
                     tracking-[-0.05em] leading-[1.2] whitespace-pre-line break-words w-full"
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default WorkBadge;
