import React from 'react';
import ProjectFrame from '../ProjectFrame';
import ProjectFrameGeneral from '../ProjectFrameGeneral';
import DCT0330Contact from '../DXT - 030 Project Components/DXT - 0330 Contact';
import DXT03211ProjectsStat from '../DXT - 030 Project Components/DXT-03211ProjectsStat';
import Footer from '../DXT-013 Footer';
import Section from '../Sections';


const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex w-full flex-col items-center justify-center p-10 bg-gradient-to-t from-blue-50 to-blue-500">

        <Section bg="dark">
                <div className='header+sub text-white-gradient text-center pt-30 flex flex-col items-center gap-5'>
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold">
                    Projects I’ve Worked On
                </h1>
                <p className='w-1/2'>A selection of design and development work that highlights my approach to creating functional, visually engaging experiences.</p>              
                </div>
        </Section>

            <Section bg="light">

                <div className="flex flex-col md:grid grid-cols-3 grid-rows-2 gap-4 w-full my-10 container mx-auto py-auto">        
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

            </Section>
<Section bg='light'>
      <DXT03211ProjectsStat />
</Section>
      <DCT0330Contact />
      <Footer />

      </div>
    </>
  );
};

export default ProjectsPage;
