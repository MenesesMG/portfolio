import React from 'react';
import DXT021Hero from '../DXT - 020 About Me Components/DXT - 021 Hero';
import DXT022WhatIUse from '../DXT - 020 About Me Components/DXT - 022 What I Use';
import DXT023WorkExperience from '../DXT - 020 About Me Components/DXT - 023 Work Experience';
import Contact from '../DXT - 020 About Me Components/DXT - 0230 Contact';
import DXT013Footer from '../DXT-013 Footer';
import Section from '../Sections';

const AboutMe: React.FC = () => {
  return (
    <>
      <Section bg="dark">
        <DXT021Hero />        
      </Section>  
      <Section bg="light">
        <DXT022WhatIUse />
      </Section>  
      <Section bg="light">
        <DXT023WorkExperience />        
      </Section>
      <Section bg="light">
        <Contact />
      </Section>
      <Section bg="light">
        <DXT013Footer />
      </Section>                    

    </>
  );
};

export default AboutMe;
