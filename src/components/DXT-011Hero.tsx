import React from 'react';
import CtaButtonOrange from './ctaButtonOrange';
import GlassBadge from './GlassBadge';
import AnimatedClouds from './AnimatedClouds';
import CounterIntro from './CounterIntro';
import { motion } from "framer-motion";

const DXT011Hero: React.FC = () => {

  // Helper to prepend GitHub Pages repo base path
  const getImagePath = (path: string) => {
    if (path.startsWith('/portfolio/')) return path;
    if (path.startsWith('/')) return `/portfolio${path}`;
    return `/portfolio/${path}`;
  };

  return (
    <section className="block relative min-h-screen flex flex-col justify-center items-center bg-hero-color text-white text-center px-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 pt-24 md:pt-32">

        {/* Headline + Picture */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 md:gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5 }}
              className="text-4xl text-shadow-white [text-shadow:_0px_0px_15px_#ffffff] sm:text-4xl md:text-5xl font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              I'm Marcelo
            </motion.h1>
            <img
              src={getImagePath('/marcelo-icon.png')}
              alt="Picture of Marcelo"
              className="h-15 sm:h-12 md:h-16 rotate-[5deg] animate-bounce"
            />
          </div>

          <div className="flex flex-col items-center leading-tight">
            <motion.h1
              className="text-2xl sm:text-4xl md:text-[72px] font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: 0.4 }}
            >
              I bring ideas to life through
            </motion.h1>
            <motion.h2
              className="text-[28px] sm:text-3xl md:text-[84px] font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: 0.5 }}
            >
              design & development
            </motion.h2>
          </div>
        </div>

        {/* Description + Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-5 max-w-[320px] sm:max-w-[500px] md:max-w-[600px]"
        >
          <p className="font-light text-sm sm:text-base md:text-xl text-white/90">
            I create user-centered designs, engaging visuals, and digital products that tell stories.
          </p>
          <CtaButtonOrange text="Stay in touch"/>
        </motion.div>

        {/* Bottom Stats + Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white grid grid-cols-2 gap-6 mt-10 md:flex md:justify-center"
        >
          {/* Left Stat */}
          <div className="row-start-2 flex flex-col items-center">
            <CounterIntro to={500} label="Hours in Design Work" />
          </div>

          {/* Tags */}
          <div className="col-span-2 flex flex-wrap justify-center gap-3 md:w-[600px]">
            <GlassBadge text="UI/UX Designer" />
            <GlassBadge text="Web Developer" />
            <GlassBadge text="Video Editor" />
            <GlassBadge text="Digital Marketing" />
            <GlassBadge text="Multimedia Designer" />
          </div>

          {/* Right Stat */}
          <div className="row-start-2 flex flex-col items-center">
            <CounterIntro to={99} label="Cups of Coffee" />
          </div>
        </motion.div>

      </div>
      <AnimatedClouds />
    </section>
  );
};

export default DXT011Hero;
