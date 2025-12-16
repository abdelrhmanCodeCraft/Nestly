"use client";
import React, { useState } from 'react'

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  hearAboutUs: string;
  message: string;
  agreeToTerms: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const FormInput: React.FC<InputProps> = ({ label, id, ...rest }) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-300">
      {label}
    </label>
    <input
      id={id}
      className="w-full px-4 py-3 bg-[#262626] border border-transparent rounded-lg text-white placeholder-gray-500 focus:border-purple-600 focus:ring-0 transition duration-150 shadow-sm"
      {...rest}
    />
  </div>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: string[];
}

const FormSelect: React.FC<SelectProps> = ({ label, id, options, ...rest }) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-300">
      {label}
    </label>
    <select
      id={id}
      className="w-full px-4 py-3 bg-[#262626] border border-transparent rounded-lg text-white placeholder-gray-500 focus:border-purple-600 focus:ring-0 transition duration-150 appearance-none shadow-sm cursor-pointer"
      {...rest}
    >
      <option value="" disabled hidden>Select</option>
      {options.map((option) => (
        <option key={option} value={option} className="bg-[#262626] text-white">
          {option}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
  </div>
);

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    hearAboutUs: '',
    message: '',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };
  
  const inquiryOptions = ['General Inquiry', 'Partnership', 'Client Support'];
  const hearAboutOptions = ['Social Media', 'Search Engine', 'Referral', 'Other'];

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1596px] mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        
        <div className="space-y-4 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estaten. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.
          </p>
        </div>

        <form onSubmit={handleSubmit} className=" p-4 rounded-xl shadow-2xl border border-[#262626]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <FormInput 
              label="First Name" 
              id="firstName" 
              type="text" 
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <FormInput 
              label="Last Name" 
              id="lastName" 
              type="text" 
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <FormInput 
              label="Email" 
              id="email" 
              type="email" 
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <FormInput 
              label="Phone" 
              id="phone" 
              type="tel" 
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            
            <div className="relative">
                <FormSelect 
                    label="Inquiry Type" 
                    id="inquiryType" 
                    options={inquiryOptions}
                    value={formData.inquiryType}
                    onChange={handleChange}
                />
            </div>

            <div className="relative">
                <FormSelect 
                    label="How Did You Hear About Us?" 
                    id="hearAboutUs" 
                    options={hearAboutOptions}
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                />
            </div>
          </div>

          <div className="flex flex-col space-y-2 mb-6">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4} 
              placeholder="Enter Your Message here."
              className="w-full px-4 py-3 bg-[#262626] border border-transparent rounded-lg text-white placeholder-gray-500 focus:border-purple-600 focus:ring-0 transition duration-150 shadow-sm resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-4">
            
            <div className="flex items-center">
              <input
                id="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-400">
                I agree with <span className="underline cursor-pointer hover:text-white">Terms of Use</span> and <span className="underline cursor-pointer hover:text-white">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.agreeToTerms}
              className={`py-3 px-8 rounded-lg font-medium transition duration-200 
                ${formData.agreeToTerms 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
            >
              Send Your Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactFormSection; 
