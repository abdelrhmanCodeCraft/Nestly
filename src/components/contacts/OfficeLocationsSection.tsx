"use client";
import React, { useState } from 'react';
import LocationCard from '../shared/LocationCard'; 

interface OfficeLocation {
  id: number;
  type: 'All' | 'Regional' | 'International';
  heading: string;
  address: string;
  description: string;
  email: string;
  phone: string;
  city: string;
}

const officeLocations: OfficeLocation[] = [
  {
    id: 1,
    type: 'Regional',
    heading: 'Main Headquarters',
    address: '123 Nestly Plaza, City Center, Metropolis',
    description: "Our main headquarters serve as the heart of Nestly. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: 'info@Nestly.com',
    phone: '+1 (123) 456-7890',
    city: 'Metropolis',
  },
  {
    id: 2,
    type: 'International',
    heading: 'Regional Offices',
    address: '456 Urban Avenue, Downtown District, Metropolis',
    description: "Nestly's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    email: 'info@Nestly.com',
    phone: '+1 (123) 628-7890',
    city: 'Metropolis',
  },
];


const OfficeLocationsSection: React.FC = () => {
  const tabs: ('All' | 'Regional' | 'International')[] = ['All', 'Regional', 'International'];
  const [activeTab, setActiveTab] = useState<'All' | 'Regional' | 'International'>('All');

  const filteredLocations = officeLocations.filter(location => 
    activeTab === 'All' || location.type === activeTab
  );

  return (
    <section className="py-1 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="space-y-6">
            


            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Discover Our Office Locations</h2>
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              Nestly is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Nestly office nearest to you.
            </p>

            <div className="flex space-x-3 mt-6">
              <div className="flex p-1 bg-gray-900 rounded-xl border border-gray-800">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-lg font-medium transition duration-200 text-sm
                      ${activeTab === tab
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                        : 'text-gray-400 hover:bg-gray-700/50'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredLocations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>

      </div>
    </section>
  );
};


export default OfficeLocationsSection;