import React from 'react';
import WorkBadge from './WorkBadge';

interface WorkExperienceItemProps {
  badgeText?: string; // Text for WorkBadge, can include line breaks
  companyName: string;
  period: string;
  dividerColor?: string; // Optional, default pink
  workDesciption: string;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  badgeText = "UI/UX Designer\nProduct Manager",
  workDesciption = "test",
  companyName,
  period,
  dividerColor = "#EC4899", // default pink-400 hex
}) => {
  return (
    <div className="flex flex-col gap-5">
      
      {/* Badge */}
      <div className="work-tag px-5">
        <WorkBadge text={badgeText} />
      </div>

      {/* Divider */}
      <div className="divider flex items-center gap-4">
        <div className="flex-grow border-t" style={{ borderColor: dividerColor }}></div>
        <div
          className="circle w-5 h-5 rounded-full"
          style={{ backgroundColor: dividerColor }}
        ></div>
        <div className="flex-grow border-t" style={{ borderColor: dividerColor }}></div>
      </div>

      {/* Company + Year */}
      <div className="company-year text-gray-700 flex flex-col gap-4 text-center">
        <div className="headline+company">
          <h1 className="font-bold">{companyName}</h1>
          <p>{period}</p>          
        </div>

        <p className="mx-10">{workDesciption}</p>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
