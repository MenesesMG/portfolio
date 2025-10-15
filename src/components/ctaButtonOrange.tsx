import React from 'react';

interface CtaButtonProps {
  text?: string;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ text = "Contact", className = '' }) => {
  return (
    <a href="https://www.linkedin.com/in/menesesmg/" target="_blank" rel="noopener noreferrer">
      <button
        className={`
          relative rounded-[30px] cursor-pointer 
          transition duration-300 ease-in-out
          hover:shadow-[0_0_25px_rgba(255,118,54,0.8)]
          hover:brightness-125
          hover:scale-101
          ${className}
        `}
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 122 48\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.8999999761581421\\'/><defs><linearGradient id=\\'grad\\' x1=\\'0.9563\\' y1=\\'0.2924\\' x2=\\'0.0437\\' y2=\\'0.7076\\'><stop stop-color=\\'rgba(255,68,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,118,54,1)\\' offset=\\'1\\'/></linearGradient></defs></svg>')",
        }}
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[25px] py-[10px] relative size-full">
            <span className="relative z-10 font-['Poppins:Bold',_sans-serif] leading-[20px] not-italic shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.8px] whitespace-pre">
              {text}
            </span>
            <img src="/arrowright.svg" alt="Arrow Right" className="inline-block w-auto h-auto" />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#fcfcfc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[30px]"
        />
      </button>
    </a>
  );
};

export default CtaButton;
