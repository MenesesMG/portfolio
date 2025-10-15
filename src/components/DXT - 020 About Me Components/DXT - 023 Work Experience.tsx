import React from 'react';
import WorkExperienceItem from '../Cards/WorkExperienceItem';

const DXT023WorkExperience: React.FC = () => {
    return (
        <div className="container block mx-auto px-4 sm:px-6 flex flex-col items-center">
            <h1 className="text-4xl sm:text-4xl md:text-5xl py-10 font-semibold bg-workexperience-gradient text-center">
                Work Experience
            </h1>

            <div className='container border border-gray-200 bg-gradient-to-bl from-neutral-50 to-pink-50 rounded-[30px] md:p-15 p-5 flex flex-col md:grid grid-cols-3 grid-rows-1 gap-6'>
                <WorkExperienceItem 
                    badgeText={`UI/UX Designer &\nProduct Manager`} 
                    companyName="1NURSE.COM" 
                    period="MAY 2025 - OCT 2025" 
                    dividerColor="#EC4899" // pink-400 hex
                    workDesciption='Contributed to UI/UX design and product development for 1NURSE and 1NCLEX, enhancing app experience, and brand consistency.'
                />
                <WorkExperienceItem 
                    badgeText={`Video Editor &\n Motion Graphic Artist`} 
                    companyName="LITBROS MEDIA" 
                    period="MAY 2024 - SEPT 2024" 
                    dividerColor="#EC4899"
                    workDesciption='Produced video edits and motion graphics for international clients, improving online presence, viewership, and content impact.'
                />
                <WorkExperienceItem 
                    badgeText={`Cyber Security \nAnalyst Intern`} 
                    companyName="CYTECH INTERNATIONAL" 
                    period="SEPT 2023 - NOV 2023" 
                    dividerColor="#EC4899"
                    workDesciption='Performed hands-on cybersecurity tasks, monitoring threats, analyzing risks, and producing actionable incident reports efficiently.'
                />                                              
            </div>

        </div>
    );
};

export default DXT023WorkExperience;
