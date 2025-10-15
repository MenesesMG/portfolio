import React from 'react';
import CounterIntro from './CounterIntroV2';

    const DXT01211ProjectsStat: React.FC = () => {
        return (
            <div className="py-20 flex flex-col items-center mx-4 block" >
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold header-section-color pb-[25px] text-center">
                Professional Snapshot
                </h1>
                <div className='stats flex flex-wrap max-w-[700px] justify-between md:gap-30 gap-10 items-center justify-center'>
                    <CounterIntro to={1} label="Years of Experience" color='contact-button-color'/>
                    <CounterIntro to={500} label="Hours in Design Work" color='bg-gradient-to-bl from-fuchsia-400 to-red-500'/>
                    <CounterIntro to={10} label="Total Projects" color='bg-orange-gradient' />
                </div>
            </div>
        );
    };

    export default DXT01211ProjectsStat;