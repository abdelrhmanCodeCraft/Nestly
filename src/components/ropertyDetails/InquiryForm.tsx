
import React from 'react';

interface InquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  property: string; 
  message: string;
  agreeToTerms: boolean;
}

interface InquiryFormProps {
}

const InquiryForm: React.FC<InquiryFormProps> = () => {


  const propertyName = 'Seaside Serenity Villa, Malibu, California';

  const InputField: React.FC<{ label: string; placeholder: string; type?: string }> = ({ label, placeholder, type = 'text' }) => (
    <div className="flex flex-col w-full">
      <label className="text-sm font-medium mb-1 text-gray-300">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full p-3.5 bg-[#202020] border-none 
          text-gray-100 placeholder-gray-500 rounded-lg 
          focus:outline-none focus:ring-1 focus:ring-purple-600 
          transition duration-200
        "
      />
    </div>
  );

  return (
    <div className="text-white p-4 sm:p-8 md:p-16 lg:p-24 ">
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 flex flex-col lg:flex-row">
        
        <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">

          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Inquire About <br />
            Seaside Serenity Villa
          </h1>
          <p className="text-gray-400 text-base max-w-md">
            Interested in this property? Fill out the form below, and our real 
            estate experts will get back to you with more details, including 
            scheduling a viewing and answering any questions you may have.
          </p>
        </div>

        <div className="lg:w-1/2">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField label="First Name" placeholder="Enter First Name" />
              <InputField label="Last Name" placeholder="Enter Last Name" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField label="Email" placeholder="Enter Your Email" type="email" />
              <InputField label="Phone" placeholder="Enter Phone Number" type="tel" />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 text-gray-300">Selected Property</label>
              <div 
                className="
                  flex justify-between items-center w-full p-3.5 bg-[#202020] 
                  text-gray-100 rounded-lg border-none
                "
              >
                <span className="text-base">{propertyName}</span>
                <span className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 text-gray-300">Message</label>
              <textarea
                placeholder="Enter Your Message here."
                rows={5}
                className="
                  w-full p-3.5 bg-[#202020] border-none 
                  text-gray-100 placeholder-gray-500 rounded-lg 
                  focus:outline-none focus:ring-1 focus:ring-purple-600 
                  transition duration-200 resize-none
                "
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4">
              
              <div className="flex items-center mb-4 sm:mb-0">
                <input
                  id="terms-checkbox"
                  type="checkbox"
                  className="
                    h-4 w-4 text-purple-600 bg-transparent border-gray-600 
                    rounded focus:ring-purple-500 checked:bg-purple-600 
                    checked:border-transparent
                  "
                />
                <label htmlFor="terms-checkbox" className="ml-2 text-sm text-gray-400">
                  I agree with <span className="underline cursor-pointer hover:text-white transition">Terms of Use</span> and <span className="underline cursor-pointer hover:text-white transition">Privacy Policy</span>
                </label>
              </div>

              <button
                type="submit"
                className="
                  px-8 py-3.5 text-base font-semibold bg-[#804DE3] 
                  hover:bg-[#6A3BC2] text-white rounded-lg 
                  transition duration-200 shadow-lg shadow-purple-900/40
                  w-full sm:w-auto
                "
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;