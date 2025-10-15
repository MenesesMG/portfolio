import React, { type ReactNode } from 'react';

interface SectionProps {
  bg?: 'light' | 'dark'; // default dark
  children: ReactNode;
  className?: string;
}

const Sections: React.FC<SectionProps> = ({ bg = 'dark', children, className }) => {
  return (
    <section data-nav-bg={bg} className={className}>
      {children}
    </section>
  );
};
export default Sections;