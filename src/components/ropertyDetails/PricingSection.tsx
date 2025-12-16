

import React from 'react';

interface Detail {
  title: string;
  price: string;
  description: string;
}


interface PricingSectionProps {
  title: string;
  details: Detail[];
  showLearnMore?: boolean;
}

const LISTING_PRICE = '$1,250,000';

const ADDITIONAL_FEES_DATA: PricingSectionProps = {
  title: "Additional Fees",
  showLearnMore: true,
  details: [
    { title: "Property Transfer Tax", price: "$25,000", description: "Based on the sale price and local regulations" },
    { title: "Legal Fees", price: "$3,000", description: "Approximate cost for legal services, including title transfer" },
    { title: "Home Inspection", price: "$500", description: "Recommended for due diligence" },
    { title: "Property Insurance", price: "$1,200", description: "Annual cost for comprehensive property insurance" },
    { title: "Mortgage Fees", price: "Varies", description: "If applicable, consult with your lender for specific details" }, 
  ],
};

const MONTHLY_COSTS_DATA: PricingSectionProps = {
  title: "Monthly Costs",
  showLearnMore: true,
  details: [
    { title: "Property Taxes", price: "$1,250", description: "Approximate monthly property tax based on the sale price and local rates" },
    { title: "Homeowners' Association Fee", price: "$300", description: "Monthly fee for common area maintenance and security" },
  ],
};



interface DetailCardProps {
  detail: Detail;
  isVarying?: boolean;
}

const DetailCard: React.FC<DetailCardProps> = React.memo(({ detail, isVarying = false }) => {
  const priceClasses = isVarying
    ? 'text-[#804DE3] font-bold text-lg'
    : 'text-3xl font-light text-white';

  return (
    <div className="flex justify-between items-start py-4 border-b border-gray-800 last:border-b-0">
      <div className="flex flex-col">
        <p className="text-gray-200 font-medium mb-1">{detail.title}</p>
        <span className={priceClasses}>
          {detail.price}
        </span>
      </div>
      <p className="text-sm text-gray-500 max-w-xs text-right mt-1">
        {detail.description}
      </p>
    </div>
  );
});

DetailCard.displayName = 'DetailCard';



const PricingSection: React.FC<PricingSectionProps> = React.memo(({ title, details, showLearnMore = false }) => {
  const mortgageFees = details.find(d => d.title === 'Mortgage Fees');
  const otherDetails = details.filter(d => d.title !== 'Mortgage Fees');

  return (
    <div className="border border-neutral-800 rounded-xl p-6 shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {showLearnMore && (
          <button className="text-sm text-[#804DE3] font-medium transition-colors">
            Learn More
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {otherDetails.map((detail) => (
          <DetailCard key={detail.title} detail={detail} />
        ))}
      </div>

      {mortgageFees && (
        <div className="mt-6 pt-4 border-t border-gray-800">
          <DetailCard detail={mortgageFees} isVarying={true} />
        </div>
      )}
    </div>
  );
});

PricingSection.displayName = 'PricingSection';



const PricingHeader: React.FC = React.memo(() => {
  return (
    <header className="mt-10 mb-20 max-w-[1596px] ">


      <h1 className="text-4xl font-extrabold text-white mb-4">
        Comprehensive Pricing Details
      </h1>
      <p className="text-gray-400 leading-relaxed">
        At Estateln, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision.
      </p>

      <div className="max-w-[1596px] full width mt-6 p-4 rounded-lg bg-neutral-900 border border-neutral-800">
        <div className="flex items-start">
          <span className="font-bold text-white mr-2">Note</span>
          <p className="text-gray-400 text-sm">
            The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
          </p>
        </div>
      </div>
    </header>
  );
});

PricingHeader.displayName = 'PricingHeader';



const PricingSec: React.FC = () => {
  return (
    <div className=" mb-5 text-white p-8 md:p-16 flex justify-center font-sans">
      <main className="w-full max-w-6xl">
        <PricingHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          
          <div className="md:col-span-1">
            <div className="mb-4">
              <h2 className="text-lg font-medium text-gray-400">Listing Price</h2>
              <p className="text-5xl font-light text-white mt-2">
                {LISTING_PRICE}
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <PricingSection {...ADDITIONAL_FEES_DATA} />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
          </div>
          <div className="md:col-span-2">
            <PricingSection {...MONTHLY_COSTS_DATA} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingSec;