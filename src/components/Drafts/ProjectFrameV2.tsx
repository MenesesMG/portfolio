import React from 'react';

interface ProjectFrameProps {
  image: string;
  imageMobile?: string;
  imageScale?: number;
  imageMobileScale?: number;
  imagePosition?: string;
  imageMobilePosition?: string;
  backgroundColor?: string;
  className?: string; // optional extra class
}

const ProjectFrame: React.FC<ProjectFrameProps> = ({
  image,
  imageMobile,
  imageScale = 1,
  imageMobileScale = 1,
  imagePosition = 'center',
  imageMobilePosition = 'center',
  backgroundColor,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-[30px] ${className}`}
      style={{
        background: backgroundColor || 'transparent',
      }}
    >
      {/* Desktop Image */}
      <img
        src={image}
        alt="Project"
        className="hidden md:block w-full h-full object-cover"
        style={{
          transform: `scale(${imageScale})`,
          objectPosition: imagePosition,
        }}
      />

      {/* Mobile Image */}
      {imageMobile && (
        <img
          src={imageMobile}
          alt="Project"
          className="block md:hidden w-full h-full object-cover"
          style={{
            transform: `scale(${imageMobileScale})`,
            objectPosition: imageMobilePosition,
          }}
        />
      )}
    </div>
  );
};

export default ProjectFrame;
