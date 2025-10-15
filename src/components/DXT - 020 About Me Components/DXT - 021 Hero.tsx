import React from 'react';
import { motion } from "framer-motion";
import CtaButtonOrange from '../ctaButtonOrange';
import GlassBadge from '../GlassBadge';
import AnimatedClouds from '../AnimatedClouds';
import IconSocials from '../iconSocials';

// Helper to prefix /portfolio for public assets
const getImagePath = (path: string) => {
  if (path.startsWith('/portfolio/')) return path;
  if (path.startsWith('/')) return `/portfolio${path}`;
  return `/portfolio/${path}`;
};

// Animation variants for better performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 }
};

const badges = [
  "UI/UX Designer",
  "Web Developer", 
  "Video Editor",
  "Digital Marketing",
  "Multimedia Designer"
];

const socials = [
  { image: '/behance.svg', alt: 'Behance', href: 'https://www.behance.net/MenesesMG' },
  { image: '/linkedin.svg', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/menesesmg/' },
  { image: '/github.svg', alt: 'GitHub', href: 'https://github.com/MenesesMG' }
];

const DXT021Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-about-hero-color text-white text-center px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 h-screen max-w-7xl">
        
        {/* Right Side - Image */}
        <div className="relative w-full md:flex-1 max-w-[200px] md:max-w-none md:order-2 order-1 mt-20 md:mt-0">
          <div className="relative rotate-0 md:rotate-5 max-w-md lg:max-w-lg mx-auto">
            <img 
              src={getImagePath('/Hero/SideImage.jpg')} 
              alt="Marcelo - Designer and Developer" 
              className="w-full h-auto object-cover rounded-[30px] relative z-10"
              loading="lazy"
            />
            <div 
              className="absolute md:-inset-5 -inset-2 rounded-[40px] border border-white/50 bg-white/15 backdrop-blur-lg -z-10 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Left Side */}
        <div className="flex flex-col md:items-start justify-center gap-10 pt-8 md:pt-32 w-full md:w-auto md:flex-shrink-0 md:max-w-xl lg:max-w-2xl md:order-1 order-2">
          
          {/* Headline */}
          <div className="flex flex-col items-center gap-6">
            <motion.h1
              {...fadeInUp}
              transition={{ duration: 1.5 }}
              className="text-4xl md:text-5xl font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent [text-shadow:_0px_0px_15px_#ffffff]"
            >
              Hello There!
            </motion.h1>          
          </div>

          {/* Description + Button */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 1, delay: 0.6 }}        
            className="flex flex-col items-center md:items-start gap-5 w-full"
          >
            <p className="font-light text-center md:text-left text-sm sm:text-base md:text-base text-white/90">
              I'm Marcelo! I combine design sensibility with technical expertise, moving seamlessly between UI/UX, front-end development, and video editing. This versatility allows me to bring ideas to life from concept to execution.
            </p>

            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <CtaButtonOrange text="Let's Chat" />
              <div className="flex gap-2">
                {socials.map((social) => (
                  <IconSocials 
                    key={social.alt}
                    image={getImagePath(social.image)}
                    href={social.href}
                  />
                ))}                
              </div>
            </div>
          </motion.div>

          {/* Bottom Tags */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 1, delay: 0.8 }}        
            className="w-full"
          >
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              {badges.map((badge) => (
                <GlassBadge key={badge} text={badge} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <AnimatedClouds />
    </section>
  );
};

export default DXT021Hero;
