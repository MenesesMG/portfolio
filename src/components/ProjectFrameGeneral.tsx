import React from 'react';

interface ProjectFrameProps {
  title: string;
  type: string;
  description: string;
  image: string;
  imageMobile?: string;
  color?: string;
  onClick?: () => void;
}

const ProjectFrameGeneral: React.FC<ProjectFrameProps> = ({
  color,
  title,
  type,
  description,
  image,
  imageMobile,
  onClick,
}) => {
  // Helper function to add base URL to image paths
  const getImagePath = (path: string) => {
    // If path already starts with /portfolio, return as-is
    if (path.startsWith('/portfolio/')) return path;
    // If path starts with /, add portfolio prefix
    if (path.startsWith('/')) return `/portfolio${path}`;
    // Otherwise add /portfolio/ prefix
    return `/portfolio/${path}`;
  };

  return (
    <div onClick={onClick} className="container relative border rounded-[30px] border-gray-200 hover:scale-101 hover:shadow-lg transition duration-500 ease-in-out cursor-pointer" style={{ color }}>
      {/* Top Section - Always white */}
      <div className="top-headline bg-white rounded-t-[30px] pt-10 pr-10 pl-10 flex flex-col gap-2">
        <div className="headline-subheadline flex flex-col gap-2">
          <h3 className="type text-sm">{type}</h3>
          <h1 className="headline text-2xl font-semibold">{title}</h1>
        </div>
        <p className="description text-sm font-light text-gray-800">{description}</p>
      </div>

      {/* Bottom Section - Accepts any color or gradient */}
      <div className="bottom-images rounded-b-[30px] pb-10 pr-10 pl-10 pt-5 flex flex-col gap-4 bg-white">
        <div className="image-container inset-shadow-sm border border-gray-200 overflow-hidden rounded-[10px] relative w-full h-[150px] flex items-center justify-center mx-auto">
          <img
            src={getImagePath(imageMobile || image)}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="learn-more w-full flex justify-end">
          <div className="flex gap-2 items-center md:text-base text-xs">
            Learn More
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFrameGeneral;