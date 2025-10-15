import React from 'react';

interface ProjectFrameProps {
  title?: string;
  description?: string;
  image: string;
  imageMobile?: string;
  color?: string;
  backgroundColor?: string;
  imageScale?: number;
  imageMobileScale?: number;
  imagePosition?: string;
  imageMobilePosition?: string;
}

const ProjectFrame: React.FC<ProjectFrameProps> = ({
  title,
  description,
  image,
  imageMobile,
  color,
  backgroundColor,
  imageScale = 1.2,
  imageMobileScale = 1.25,
  imagePosition = 'center',
  imageMobilePosition = 'center',
}) => {
  const hasText = !!title || !!description;

  // Same heights as your grid items
  const baseHeight = 'h-[200px] md:h-[250px]';

  return (
    <div
      className={`project-frame rounded-[30px] overflow-hidden ${
        hasText ? 'grid grid-cols-2 items-center min-h-[200px]' : baseHeight
      } ${backgroundColor?.startsWith('bg-') ? backgroundColor : ''}`}
      style={{
        background: !backgroundColor?.startsWith('bg-')
          ? backgroundColor || '#e5e7eb'
          : undefined,
      }}
    >
      {hasText && (
        <div
          className="md:px-10 px-8 flex flex-col justify-between h-full py-10"
          style={{ color: color || '#000' }}
        >
          <div className="flex flex-col gap-[5px]">
            {title && <h3 className="md:text-2xl text-xl font-semibold">{title}</h3>}
            {description && <p className="md:text-xl text-xs">{description}</p>}
          </div>

          {title && (
            <div className="flex gap-2 items-center md:text-xl text-xs">
              <div className="relative w-7 min-h-7 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: color || '#000' }}
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="white"
                  className="w-3 h-auto relative"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              Learn More
            </div>
          )}
        </div>
      )}

      {/* Image */}
      <div
        className={`relative w-full ${baseHeight} flex items-center justify-center overflow-visible`}
      >
        {/* Desktop Image */}
        <img
          src={image}
          alt={title || 'image'}
          className="hidden md:block w-full h-full object-cover"
          style={{
            transform: `scale(${imageScale})`,
            objectPosition: !title && !description ? 'center' : imagePosition,
          }}
        />

        {/* Mobile Image */}
        {imageMobile && (
          <img
            src={imageMobile}
            alt={title || 'image'}
            className="block md:hidden w-full h-full object-cover"
            style={{
              transform: `scale(${imageMobileScale})`,
              objectPosition: !title && !description ? 'center' : imageMobilePosition,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectFrame;
