    import React from 'react';
    import ToolsCard from '../ToolsCard';

    const DXT0222ToolsSection: React.FC = () => {
    return (
        <div className="container block mx-auto px-4 sm:px-6 flex flex-col items-center">

        <div className="flex flex-col md:grid grid-cols-3 gap-4 w-full my-10">
            <div className="col-start-1 row-start-1">
            <ToolsCard
                title="Development"
                description="Experienced in creating visually engaging and user-friendly designs across platforms."
                tags={[
                { text: "React", bgColor: "bg-gradient-to-t from-blue-200 to-blue-500" },
                { text: "TypeScript", bgColor: "bg-gradient-to-t from-purple-200 to-purple-500" },
                { text: "Tailwind CSS", bgColor: "bg-gradient-to-t from-cyan-200 to-sky-400" },
                { text: "Node.JS", bgColor: "bg-gradient-to-b from-lime-500 to-lime-300" },
                { text: "Docker", bgColor: "bg-gradient-to-t from-blue-200 to-blue-500" },
                { text: "mySQL", bgColor: "bg-gradient-to-b from-orange-600 to-orange-200" },
                ]}
                  socials={[
                    { image: "/Logo/Elementot.png", link: "" },
                    { image: "/Logo/Elemento-n.png", link: "" },
                    { image: "/Logo/Elemento-r.png", link: "" },
                ]}
            />
            </div>
            <div className="col-start-2 row-start-1">
            <ToolsCard
                title="Design Tools"
                description="Skilled in building responsive and interactive websites with modern technologies."
                tags={[
                { text: "Adobe Photoshop", bgColor: "bg-gradient-to-t from-blue-200 to-blue-500" },
                { text: "Figma", bgColor: "bg-gradient-to-b from-orange-600 to-orange-200" },
                { text: "Premiere Pro", bgColor: "bg-gradient-to-t from-purple-200 to-purple-500" },
                { text: "After Effects", bgColor: "bg-gradient-to-t from-purple-200 to-purple-500" },
                { text: "Illustrator", bgColor: "bg-gradient-to-b from-orange-400 to-orange-200" },                
            ]}
            socials={[
                { image: "/Logo/Elemento-pr.png", link: "" },
                { image: "/Logo/Elemento-ps.png", link: "" },
                { image: "/Logo/Elemento-f.png", link: "" },
            ]}            
            />
            </div>
            <div className="col-start-3 row-start-1">
            <ToolsCard
                title="Other Skills:"
                description="Adept at research, collaboration, and improving overall design performance."
                tags={[
                { text: "Python", bgColor: "bg-gradient-to-t from-indigo-200 to-indigo-500" },
                { text: "JavaScript", bgColor: "bg-gradient-to-t from-indigo-200 to-indigo-500" },
                { text: "Google Analytics (GA4)", bgColor: "bg-gradient-to-t from-blue-200 to-blue-500" },
                { text: "Version Control (Git)", bgColor: "bg-gradient-to-t from-blue-200 to-blue-500" },
                { text: "UX Research", bgColor: "bg-gradient-to-t from-blue-200 to-blue-500" },                
                ]}
                socials={[
                { image: "/Logo/Elemento-1.png", link: "" },
                { image: "/Logo/Elemento-2.png", link: "" },
                { image: "/Logo/Elemento.png", link: "" },
            ]}           
            />
            </div>
        </div>
        </div>
    );
    };

    export default DXT0222ToolsSection;
