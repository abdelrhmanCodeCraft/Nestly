"use client";

import { Search, MapPin, Home, DollarSign, Maximize, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  locations,
  propertyTypes,
  pricingRanges,
  propertySizes
} from "../../constants/propertyData";

export default function PropertyHero() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterClick = (filterName: string) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
<section className="text-white pt-24 -mt-30">      
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">

        <div className="relative mb-8">
          <div className="flex flex-col md:flex-row gap-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl p-2">
            <div className="flex-1 flex items-center">
              <Search className="ml-4 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location, property type, or keyword..."
                className="flex-1 bg-transparent text-white outline-none px-4 py-4 text-base placeholder-gray-500"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-[#703BF7] to-[#A685FA] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Find Property
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <FilterBox
            icon={<MapPin size={18} />}
            label="Location"
            isActive={activeFilter === 'location'}
            onClick={() => handleFilterClick('location')}
            options={locations}
            showOptions={activeFilter === 'location'}
          />

          <FilterBox
            icon={<Home size={18} />}
            label="Property Type"
            isActive={activeFilter === 'type'}
            onClick={() => handleFilterClick('type')}
            options={propertyTypes}
            showOptions={activeFilter === 'type'}
          />

          <FilterBox
            icon={<DollarSign size={18} />}
            label="Pricing"
            isActive={activeFilter === 'price'}
            onClick={() => handleFilterClick('price')}
            options={pricingRanges.map(range => range.label)}
            showOptions={activeFilter === 'price'}
          />

          <FilterBox
            icon={<Maximize size={18} />}
            label="Size"
            isActive={activeFilter === 'size'}
            onClick={() => handleFilterClick('size')}
            options={propertySizes.map(size => size.label)}
            showOptions={activeFilter === 'size'}
          />


          <FilterBox
            icon={<Calendar size={18} />}
            label="Year Built"
            isActive={activeFilter === 'year'}
            onClick={() => handleFilterClick('year')}
            options={["2020", "2021", "2022", "2023", "2024"]}
            showOptions={activeFilter === 'year'}
          />

        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="text-gray-400 text-sm">Active filters:</span>
          {activeFilter && (
            <span className="bg-[#703BF7] text-white px-3 py-1 rounded-full text-sm">
              {activeFilter}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

interface FilterBoxProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  options: string[];
  showOptions: boolean;
}

function FilterBox({ icon, label, isActive, onClick, options, showOptions }: FilterBoxProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    console.log(`Selected ${label}: ${option}`);
    onClick(); 
  };

  return (
    <div className="relative">
      <div
        onClick={onClick}
        className={`
          flex items-center justify-between 
          ${isActive ? 'bg-[#1A1A1A] border-[#703BF7]' : 'bg-[#141414] border-gray-800'}
          border px-4 py-4 rounded-xl 
          text-base text-white
          cursor-pointer transition-all duration-200
          hover:border-gray-700
          ${selectedOption ? 'border-[#A685FA]' : ''}
        `}
      >
        <div className="flex items-center gap-3">
          <div className="text-[#A685FA]">
            {icon}
          </div>
          <div className="text-left">
            <div className="text-sm text-gray-400">{label}</div>
            <div className="font-medium">
              {selectedOption || `Select ${label}`}
            </div>
          </div>
        </div>

        <ChevronDown 
          size={18} 
          className={`text-gray-400 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
        />
      </div>
      {showOptions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A1A] border border-gray-800 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto">
          <div className="p-2">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-3 text-white hover:bg-gray-900 rounded-lg cursor-pointer transition-colors"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}