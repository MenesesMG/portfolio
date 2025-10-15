import React from 'react';

const AnimatedClouds: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes driftRight {
          from {
            transform: translateX(-70%);
          }
          to {
            transform: translateX(200vw);
          }
        }

        @keyframes driftLeft {
          from {
            transform: translateX(70vw);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .cloud {
          position: fixed;
          pointer-events: none;
          z-index: 0;
          opacity: 0.2;
          width: 100%
          height: auto;
          transition: all 0.4s ease;
        }

        .cloud-drift-right {
          animation: driftRight linear infinite;
        }

        .cloud-drift-left {
          animation: driftLeft linear infinite;
        }

        /* Default desktop positions */
        .cloud-top-left {
          top: -5%;
          animation-duration: 200s;
        }

        .cloud-top-right {
          top: -5%;
          animation-duration: 210s;
        }

        .cloud-left-1 {
          top: 30%;
          animation-duration: 100s;
          animation-delay: 20s;
        }

        .cloud-left-2 {
          top: 60%;
          animation-duration: 80s;
          animation-delay: 60s;
        }

        .cloud-right-1 {
          top: 20%;
          animation-duration: 80s;
        }

        .cloud-right-2 {
          top: 70%;
          animation-duration: 80s;
          animation-delay: 20s;
        }

        /* 🌥 MOBILE VIEW */
        @media (max-width: 768px) {
          .cloud {
            width: 931.07px;
            height: auto;
            opacity: 0.25;
          }

          /* Spread them evenly near bottom */
          .cloud-top-left {
            top: auto !important;
            bottom: 25%;
          }

          .cloud-top-right {
            top: auto !important;
            bottom: 20%;
          }

          .cloud-left-1 {
            top: auto !important;
            bottom: 15%;
          }

          .cloud-left-2 {
            top: auto !important;
            bottom: 10%;
          }

          .cloud-right-1 {
            top: auto !important;
            bottom: 5%;
          }

          .cloud-right-2 {
            top: auto !important;
            bottom: 0%;
          }

          /* Slower animations on mobile */
          .cloud-drift-right,
          .cloud-drift-left {
            animation-duration: 120s !important;
          }
        }
      `}</style>

      {/* Top clouds */}
      <img src="/cloud.webp" alt="" className="cloud cloud-drift-right cloud-top-left" />
      <img src="/cloud.webp" alt="" className="cloud cloud-drift-left cloud-top-right" />

      {/* Left side clouds (drifting right) */}
      <img src="/cloud.webp" alt="" className="cloud cloud-drift-right cloud-left-1" />
      <img src="/cloud.webp" alt="" className="cloud cloud-drift-right cloud-left-2" />

      {/* Right side clouds (drifting left) */}
      <img src="/cloud.webp" alt="" className="cloud cloud-drift-left cloud-right-1" />
      <img src="/cloud.webp" alt="" className="cloud cloud-drift-left cloud-right-2" />
    </>
  );
};

export default AnimatedClouds;
