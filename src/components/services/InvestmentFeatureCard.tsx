import React from 'react';

interface InvestmentFeature {
  icon: string;
  title: string;
  description: string;
}

const investmentFeatures: InvestmentFeature[] = [
  {
    icon: 'MarketInsight',
    title: 'Market Insight',
    description: 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
  },
  {
    icon: 'ROIAssessment',
    title: 'ROI Assessment',
    description: 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
  },
  {
    icon: 'CustomizedStrategies',
    title: 'Customized Strategies',
    description: 'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
  },
  {
    icon: 'DiversificationMastery',
    title: 'Diversification Mastery',
    description: 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
  },
];

const IconComponent = ({ name }: { name: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    MarketInsight: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><path d="M3 3v18h18"/><path d="m18 15-6-6-4 4-2-2"/></svg>,
    ROIAssessment: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    CustomizedStrategies: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><path d="M10 10v.01"/><path d="M12 12v.01"/><path d="M14 14v.01"/><path d="M16 16v.01"/><circle cx="12" cy="12" r="10"/></svg>,
    DiversificationMastery: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400"><path d="M6 18c.5-1.5 2-2 4-2s3.5.5 4 2c.5 1.5 2 2 4 2s3.5-.5 4-2"/><path d="M2 18c.5-1.5 2-2 4-2s3.5.5 4 2c.5 1.5 2 2 4 2s3.5-.5 4-2"/><path d="M12 2c-.5 1.5-2 2-4 2s-3.5-.5-4-2c-.5-1.5-2-2-4-2s-3.5.5-4 2"/></svg>,
  };
  return icons[name] || <div className="w-6 h-6 bg-purple-400 rounded-full"></div>;
};

const InvestmentFeatureCard: React.FC<InvestmentFeature> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl shadow-xl bg-[#0f0f0f] hover:bg-[#1a1a1a] transition">
      <div className="flex items-center space-x-3 mb-3">
        <IconComponent name={icon} />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const SmartInvestmentsSection: React.FC = () => {
  return (
    <section className="pt-20 pb-20 lg:px-8 ">
      <div className="max-w-[1596px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Smart Investments,<br />Informed Decisions
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Building a real estate portfolio requires a strategic approach.
              Estaten's Investment Advisory Service empowers you to make
              smart investments and informed decisions.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-2xl bg-[#0f0f0f] space-y-4 "
          style={{ backgroundImage: "url('/assets/Group.png')" }}>
            <h3 className="text-xl font-semibold text-white">Unlock Your Investment Potential</h3>
            <p className="text-gray-400 text-sm">
              Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
            </p>
            <button className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition duration-200">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-xl shadow-2xl bg-[#3333]">
          {investmentFeatures.map((feature) => (
            <InvestmentFeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartInvestmentsSection;