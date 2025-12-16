import React from 'react';

interface Achievement {
  title: string;
  description: string;
}

const achievementsData: Achievement[] = [
  { 
    title: "3+ Years of Excellence", 
    description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate." 
  },
  { 
    title: "Happy Clients", 
    description: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do." 
  },
  { 
    title: "Industry Recognition", 
    description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence." 
  },
];

const OurAchievements: React.FC = () => {
  return (
    <section className=" text-white pb-20 lg:pb-40 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1596px] mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        
        <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 flex items-center">
                Our Achievements
            </h2>
            <p className="text-gray-400 max-w-4xl leading-relaxed ">
                Our story is one of continuous growth and evolution. We started as a small team with big 
                dreams, determined to create a real estate platform that transcended the ordinary.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <div 
                key={index}
                className="
                p-6 rounded-lg 
                transition duration-300 
                hover:bg-gray-800/7
            shadow-[0_0_15px_0_rgba(100,100,100,0.3)]    "
            >
                <h3 className="text-xl font-bold mb-2 ">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
            ))}
        </div>
        
      </div>
    </section>
  );
};

export default OurAchievements;