import React from "react";

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-2.61L7 10.93" />
  </svg>
);

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

interface LocationCardProps {
  heading: string;
  address: string;
  description: string;
  email: string;
  phone: string;
  city: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  heading,
  address,
  description,
  email,
  phone,
  city,
}) => {
  return (
    <div className="p-8 rounded-xl shadow-lg border border-[#262626] backdrop-filter backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white mb-1">{heading}</h3>
      <p className="text-gray-400 text-lg mb-4">{address}</p>

      <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-2 p-3 bg-[#262626] border border-[#262626] rounded-lg">
          <MailIcon className="w-5 h-5 text-white" />
          <span className="text-gray-300 text-sm overflow-hidden whitespace-nowrap text-ellipsis">
            {email}
          </span>
        </div>

        <div className="flex items-center space-x-2 p-3 bg-[#262626] border border-[#262626] rounded-lg">
          <PhoneIcon className="w-5 h-5 text-white" />
          <span className="text-white text-sm">{phone}</span>
        </div>

        <div className="flex items-center space-x-2 p-3 bg-[#262626] border border-gray-800 rounded-lg">
          <MapPinIcon className="w-5 h-5 text-white" />
          <span className="text-gray-300 text-sm">{city}</span>
        </div>
      </div>

      <button className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-200">
        Get Direction
      </button>
    </div>
  );
};

export default LocationCard;
