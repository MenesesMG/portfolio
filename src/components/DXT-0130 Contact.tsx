import React from 'react';
import CtaButtonOrange from './ctaButtonOrange';
import IconSocials from './iconSocials';

const Contact: React.FC = () => {
    return (
        <section className="container block mx-auto py-5 px-4 sm:px-6 flex flex-col items-center">
            <div className="w-full bg-hero-color md:rounded-[40px] max-h-[450px] p-5 md:p-10 flex flex-col md:flex-row items-center text-white relative overflow-hidden h-[380px] md:h-auto">
                
                {/* Left Side: Headline & Socials */}
                <div className="left-side flex flex-col justify-between gap-10 md:gap-20 z-10 w-full md:w-1/2">
                    <div className="headline+description flex flex-col gap-5">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                            Interested in working together or just want to say hi?
                        </h1>
                        <h3 className="font-extralight italic text-lg md:text-xl">
                            Feel free to reach out — and check out my other socials below.
                        </h3>
                    </div>

                    <div className="socials flex gap-3 items-center">
                        <CtaButtonOrange text="Let's Chat" />
                        <IconSocials image='/behance.svg' href='https://www.behance.net/MenesesMG'/>
                        <IconSocials image='/linkedin.svg' href='https://www.linkedin.com/in/menesesmg/' />
                        <IconSocials image='/github.svg' href='https://github.com/MenesesMG'/>
                    </div>
                </div>
            {/* Right Side: Image */}
            <div className="right-side hidden md:flex md:w-1/2 h-full justify-center items-center">
                <img 
                    src="/OFWakoMockup1.png" 
                    alt="Project Mockup" 
                    className="object-contain h-full max-h-[380px] w-auto"
                />
            </div>

            </div>
        </section>
    );
};

export default Contact;
