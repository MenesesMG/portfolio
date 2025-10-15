import React from 'react';
import DXT0222ToolsSection from './DXT - 0222 Tools Section';

const DXT022WhatIUse: React.FC = () => {
    return (
        <div className="container block mx-auto pt-10 px-4 sm:px-6 flex flex-col items-center">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold header-section-color text-center">
                What I Use
            </h1>
            <DXT0222ToolsSection />                                                                                        
        </div>
    );
};

export default DXT022WhatIUse;
