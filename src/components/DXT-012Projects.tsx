import React from 'react';
import ProjectFrame from './ProjectFrame'; 
import ProjectFrameGeneral from './ProjectFrameGeneral';

const DXT012Projects: React.FC = () => {
    return (
        <div className="container block mx-auto px-4 sm:px-6 flex flex-col items-center">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold header-section-color text-center">
                Featured Projects
            </h1>

            <div className="flex flex-col md:grid grid-cols-3 grid-rows-2 gap-4 w-full my-10">
                <div className="col-start-1 row-start-1">
                    <ProjectFrame 
                        image="/OFWakoMockup1.png"
                        modalImage="/Modals/UX _ OFWako P1.png"
                        title='OFWako'
                        description='Experienced in creating visually engaging and user-friendly designs across platforms.'
                        type='UI/UX Case Study'
                        backgroundColor='bg-gradient-to-b from-white to-blue-200'
                        color='#5486E7'
                    />
                </div>
                <div className="col-start-2 row-start-1">
                    <ProjectFrame 
                        image="/OFWakoiPhone.png"
                        modalImage="/Modals/UX _ 1NCLEX.png"                        
                        title='1NCLEX'
                        description='Experienced in creating visually engaging and user-friendly designs across platforms.'
                        type='UI/UX Design Concepts'
                        backgroundColor='bg-gradient-to-b from-white to-teal-100'
                        color='#1CB6B6'
                    />                
                </div>
                <div className="col-start-3 row-start-1">
                    <ProjectFrame 
                        image="/GameLoopMockupMobile.png"
                        modalImage="/Modals/UX _ GameLoop.png"                                                
                        title='GameLoop'
                        description='Experienced in creating visually engaging and user-friendly designs across platforms.'
                        type='UI/UX Design'
                        backgroundColor='bg-gradient-to-b from-white to-purple-100'
                        color='#503150'
                    />                
                </div>     
                <div className="col-start-1 row-start-2">
                    <ProjectFrameGeneral 
                        image="/MoodMirrorCover.jpg"
                        title='MoodMirror'
                        description='Experienced in creating visually engaging and user-friendly designs across platforms.'
                        type='Web Application'
                        color='#DA7191'
                        onClick={() => window.open("https://github.com/MenesesMG/MoodMirror", "_blank")}
                    />                
                </div> 
                <div className="col-start-2 row-start-2">
                    <ProjectFrameGeneral 
                        image="/PlacePerfectCover.jpg"
                        title='PlacePerfect'
                        description='Experienced in creating visually engaging and user-friendly designs across platforms.'
                        type='UI/UX'
                        color='#744CFF'
                        onClick={() => window.open("https://www.behance.net/gallery/218337341/PlacePerfect", "_blank")}
                    />                
                </div>
                <div className="col-start-3 row-start-2">
                    <ProjectFrameGeneral 
                        image="/PortoflioCover.jpg"
                        title='Portfolio Website'
                        description='Experienced in creating visually engaging and user-friendly designs across platforms.'
                        type='Front-end Website'
                        color='#074846'
                        onClick={() => window.open("https://www.behance.net/gallery/218337717/Portfolio-Site", "_blank")}
                    />                
                </div>                                                                                          
            </div>
        </div>
    );
};

export default DXT012Projects;
