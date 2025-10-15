import React from 'react';

interface BlurredCardProps {
  image: string;
  href?: string; // optional link
}

const BlurredCard: React.FC<BlurredCardProps> = ({ image, href }) => {
  // 🔹 Helper to fix GitHub Pages paths
  const getImagePath = (path: string) => {
    if (path.startsWith('/portfolio/')) return path;
    if (path.startsWith('/')) return `/portfolio${path}`;
    return `/portfolio/${path}`;
  };

  const CardContent = (
    <div
      className="flex items-center justify-center p-1 bg-transparent transition duration-300 ease-in-out
        hover:brightness-125
        hover:scale-101"
    >
      <div className="relative w-14 h-14 ">
        {/* Outer blur circle */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(147, 167, 206, 0.6) 0%, rgba(147, 167, 206, 0.3) 40%, rgba(147, 167, 206, 0.1) 70%, transparent 100%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Middle glass layer */}
        <div
          className="absolute inset-[1px] rounded-full flex items-center justify-center"
          style={{
            background:
              'radial-gradient(circle at 40% 30%, rgba(160, 180, 220, 0.5), rgba(80, 100, 150, 0.4))',
            backdropFilter: 'blur(1.5px)',
            boxShadow:
              'inset 0 0 2px rgba(255, 255, 255, 0.1), 0 1px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Logo goes directly here */}
          <img
            src={getImagePath(image)}
            alt="Icon"
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

export default BlurredCard;
