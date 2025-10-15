import React, { useState, useEffect } from "react";

interface ProjectFrameProps {
  title: string;
  type: string;
  description: string;
  image: string;
  imageMobile?: string;
  modalImage?: string;
  backgroundColor?: string;
  color?: string;
}

const ProjectFrame: React.FC<ProjectFrameProps> = ({
  color,
  title,
  type,
  description,
  image,
  imageMobile,
  modalImage,
  backgroundColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 400);
  };

  // 🔹 Your original getImagePath method
  const getImagePath = (path: string) => {
    if (path.startsWith("/portfolio/")) return path;
    if (path.startsWith("/")) return `/portfolio${path}`;
    return `/portfolio/${path}`;
  };

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setIsOpen(true)}
        className="container relative border rounded-[30px] border-gray-200 hover:scale-[1.01] hover:shadow-lg transition duration-500 ease-in-out cursor-pointer"
        style={{ color }}
      >
        {/* Top Section */}
        <div className="top-headline bg-white rounded-t-[30px] pt-10 pr-10 pl-10 flex flex-col gap-2">
          <div className="headline-subheadline flex flex-col gap-2">
            <h3 className="type text-sm">{type}</h3>
            <h1 className="headline text-4xl font-semibold">{title}</h1>
          </div>
          <p className="description text-sm font-light text-gray-500">
            {description}
          </p>
        </div>

        {/* Bottom Section */}
        <div
          className={`bottom-images rounded-b-[30px] pb-10 pr-10 pl-10 pt-5 flex flex-col gap-4 ${backgroundColor}`}
        >
          <div className="image-container relative w-full h-[250px] flex items-center justify-center mx-auto">
            <img
              src={getImagePath(imageMobile || image)}
              alt={title}
              className="max-h-full w-auto object-contain"
            />
          </div>
          <div className="learn-more w-full flex justify-end">
            <div className="flex gap-2 items-center md:text-base text-xs">
              Learn More
              <div className="relative w-7 min-h-7 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: color || "#000" }}
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

      {/* MODAL */}
      {isOpen && (
        <div
          onClick={handleClose}
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-5 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-[1200px] max-h-[90vh] overflow-hidden rounded-[30px] shadow-2xl transform transition-all duration-500 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white text-2xl transition-all"
            >
              ✕
            </button>

            {/* Full Image */}
            <img
              src={getImagePath(modalImage || imageMobile || image)}
              alt={title}
              className="w-full h-full object-contain bg-black"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-10 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="z-10">
                <h3 className="text-sm font-light mb-1">{type}</h3>
                <h1 className="text-3xl font-semibold mb-2">{title}</h1>
                <p className="text-sm max-w-2xl text-white/80">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectFrame;
