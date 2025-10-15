import React from 'react';

interface CtaButtonProps {
  text?: string;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ text = "Contact", className = '' }) => {
  return (
    <a href="mailto:marcelmenesess@gmail.com" target="_blank" rel="noopener noreferrer">
      <button
        className={`relative rounded-[30px] cursor-pointer 
          transition duration-300 ease-in-out
          hover:shadow-[0_0_10px_rgba(216,234,255,0.8)]
          hover:brightness-125
          hover:scale-101 ${className}`}
        style={{ 
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 122 48\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.8999999761581421\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-9.6134e-15 -4.8 12.2 8.7635e-14 61 48)\\'><stop stop-color=\\'rgba(216,234,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(176,213,255,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(136,191,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(97,170,255,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(57,149,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
        }}
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[30px] py-[16px] relative size-full">
            <span className="relative z-10 font-['Poppins:Bold',_sans-serif] leading-[20px] not-italic shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.8px] whitespace-pre">
              {text}
            </span>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#fcfcfc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      </button>
    </a>
  );
};

export default CtaButton;
