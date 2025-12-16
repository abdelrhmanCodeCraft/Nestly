import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
  alignment?: 'left' | 'center'; 
  maxWidth?: string; 
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description, 
  alignment = 'left',
  maxWidth = 'max-w-4xl' 
}) => {
  const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left';
  const marginClass = alignment === 'center' ? 'mx-auto' : ''; 

  return (
    <div className={`bg-gradient-to-r from-[#262626] to-transparent py-20 px-4 sm:px-6 lg:px-8 ${alignmentClass}`}>
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">

        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold font-extrabold text-white mb-6">
          {title}
        </h1>

        <p className={`text-gray-400 text-lg md:text-xl ${maxWidth} ${marginClass}`}>
          {description}
        </p>
        
      </div>
    </div>
  );
};

export default SectionHeader;