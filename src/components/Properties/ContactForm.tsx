'use client';

import React, { useState } from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const [contactMethod, setContactMethod] = useState<'phone' | 'email'>('phone');

  return (
    <section className=" text-white p-6 md:p-12 flex flex-col justify-center items-center">
      
      <div className="w-full max-w-7xl mb-10">
        <div className="flex items-center gap-2 mb-2 text-gray-500">
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-semibold mb-4">Let's Make it Happen</h1>
        <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
        </p>
      </div>

      <div className="w-full max-w-7xl bg-[#141414] border border-[#222] rounded-2xl p-2 md:p-10 shadow-2xl">
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">First Name</label>
            <input 
              type="text" 
              placeholder="Enter First Name" 
              className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#704AF2] transition-colors placeholder:text-gray-600"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">Last Name</label>
            <input 
              type="text" 
              placeholder="Enter Last Name" 
              className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#704AF2] transition-colors placeholder:text-gray-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">Email</label>
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#704AF2] transition-colors placeholder:text-gray-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">Phone</label>
            <input 
              type="tel" 
              placeholder="Enter Phone Number" 
              className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#704AF2] transition-colors placeholder:text-gray-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">Preferred Location</label>
            <div className="relative">
              <select className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-[#704AF2] text-gray-400">
                <option>Select Location</option>
                <option>Cairo</option>
                <option>Giza</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">Property Type</label>
            <div className="relative">
              <select className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-[#704AF2] text-gray-400">
                <option>Select Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">No. of Bathrooms</label>
            <div className="relative">
              <select className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-[#704AF2] text-gray-400">
                <option>Select no. of Bedrooms</option> {/* Note: Image typo said bedrooms here too, kept logic generic */}
                <option>1</option>
                <option>2</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">No. of Bedrooms</label>
            <div className="relative">
              <select className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-[#704AF2] text-gray-400">
                <option>Select no. of Bedrooms</option>
                <option>1</option>
                <option>2</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2 col-span-1 md:col-span-2">
            <label className="text-sm font-medium ml-1">Budget</label>
            <div className="relative">
              <select className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-[#704AF2] text-gray-400">
                <option>Select Budget</option>
                <option>$100k - $200k</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2 col-span-1 md:col-span-2">
            <label className="text-sm font-medium ml-1">Preferred Contact Method</label>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
              <div 
                onClick={() => setContactMethod('phone')}
                className={`cursor-pointer border rounded-lg p-3.5 flex items-center justify-between transition-all ${contactMethod === 'phone' ? 'border-[#704AF2] bg-[#1A1A1A]' : 'border-[#333] bg-[#1A1A1A]'}`}
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-sm text-gray-400">Enter Your Number</span>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${contactMethod === 'phone' ? 'border-[#704AF2]' : 'border-gray-600'}`}>
                    {contactMethod === 'phone' && <div className="w-2.5 h-2.5 bg-[#704AF2] rounded-full" />}
                </div>
              </div>

              <div 
                onClick={() => setContactMethod('email')}
                className={`cursor-pointer border rounded-lg p-3.5 flex items-center justify-between transition-all ${contactMethod === 'email' ? 'border-[#704AF2] bg-[#1A1A1A]' : 'border-[#333] bg-[#1A1A1A]'}`}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-sm text-gray-400">Enter Your Email</span>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${contactMethod === 'email' ? 'border-[#704AF2]' : 'border-gray-600'}`}>
                    {contactMethod === 'email' && <div className="w-2.5 h-2.5 bg-[#704AF2] rounded-full" />}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 col-span-1 md:col-span-2 lg:col-span-4">
            <label className="text-sm font-medium ml-1">Message</label>
            <textarea 
              rows={4}
              placeholder="Enter your Message here.." 
              className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#704AF2] transition-colors placeholder:text-gray-600 resize-none"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="peer sr-only" />
              <div className="w-5 h-5 border border-[#333] rounded bg-[#1A1A1A] peer-checked:bg-[#704AF2] peer-checked:border-[#704AF2] transition-colors relative">
              </div>
              <span className="text-sm text-gray-400 select-none group-hover:text-gray-300">
                I agree with <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span>
              </span>
            </label>

            <button 
              type="submit"
              className="w-full md:w-auto bg-[#704AF2] hover:bg-[#5e3dc7] text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-colors"
            >
              Send Your Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}