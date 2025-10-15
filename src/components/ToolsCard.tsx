import React from "react";
import SkillsTag from "./SkillsTagColors/SkillsTag";

interface Tag {
  text: string;
  bgColor?: string;
  textColor?: string;
}

interface SocialIcon {
  image: string;
  link?: string;
}

interface ToolsCardProps {
  title?: string;
  description?: string;
  tags?: Tag[]; // Accept multiple tags
  socials?: SocialIcon[]; // Accept multiple social icons
}

const ToolsCard: React.FC<ToolsCardProps> = ({
  title = "Skill Name",
  description = "This is a brief description of the tool.",
  tags = [],
  socials = [],
}) => {
  return (
<div className="w-full h-full p-10 relative border rounded-[30px] border-gray-200
                hover:scale-[1.01] hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]
                transition duration-500 ease-in-out cursor-pointer
                flex flex-col justify-between">      
      {/* Title + Description */}
      <div className="title + subheadline flex flex-col gap-[10px]">
        <h3 className="md:text-3xl text-2xl text-gray-700 font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>

      {/* Tags */}
      <div className="tags mt-4 flex flex-wrap gap-5 justify-center text-center">
        {tags.map((tag, index) => (
          <SkillsTag
            key={index}
            text={tag.text}
            bgColor={tag.bgColor}
            textColor={tag.textColor}
          />
        ))}
      </div>

      {/* Social Icons */}
      <div className="icons mt-4 flex gap-5 justify-center">
        {socials.map((icon, index) => (
          <a 
            key={index} 
            href={icon.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={icon.image} alt="social icon" className="w-auto"/>
          </a>
        ))}
      </div>
      
    </div>
  );
};

export default ToolsCard;
