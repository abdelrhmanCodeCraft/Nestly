"use client";

import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

interface FooterColumnProps {
  title: string;
  items: string[];
  orderClass?: string;
}


export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10">

      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-8 md:gap-10 lg:gap-12
        ">

          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 order-1">
            
            <div className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-[#703BF7] to-[#A685FA] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-semibold">Nestly</span>
            </div>

            <div className="flex items-center bg-transparent border border-[#2a2a2a] rounded-xl px-4 py-3 w-full max-w-full sm:max-w-[350px] mx-auto sm:mx-0">
              <span className="text-gray-400 mr-3">✉️</span>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-transparent w-full outline-none text-sm text-gray-300 placeholder-gray-500"
              />
              <button className="ml-3 text-white hover:text-[#A685FA] transition">📨</button>
            </div>
          </div>


          <FooterColumn
            title="Home"
            items={["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"]}
            orderClass="order-2 sm:order-2 md:order-2 lg:order-2"
          />

          <FooterColumn
            title="About Us"
            items={["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"]}
            orderClass="order-3 sm:order-3 md:order-3 lg:order-3"
          />

          <FooterColumn
            title="Properties"
            items={["Portfolio", "Categories"]}
            orderClass="order-4 sm:order-4 md:order-4 lg:order-4"
          />

          <FooterColumn
            title="Services"
            items={[
              "Valuation Mastery",
              "Strategic Marketing",
              "Negotiation Wizardry",
              "Closing Success",
              "Property Management",
            ]}
            orderClass="order-5 sm:order-5 md:order-5 lg:order-5"
          />

          <FooterColumn
            title="Contact Us"
            items={["Contact Form", "Our Offices"]}
            orderClass="order-6 sm:order-6 md:order-6 lg:order-6"
          />

        </div>
      </div>

      <div className="w-full border-t border-[#222] mt-10 md:mt-14 lg:mt-16 mb-6 md:mb-8"></div>

      <div className="
        container px-4 sm:px-6 md:px-8 lg:px-[5%] xl:px-[162px] 
        mx-auto 
        flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-6
      ">

        <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left order-3 md:order-1 mt-4 md:mt-0">
          ©2023 Nestly. All Rights Reserved.
        </p>

        <p className="text-gray-400 text-sm cursor-pointer hover:text-white text-center md:text-left order-2 md:order-2">
          Terms & Conditions
        </p>

        <div className="flex items-center gap-3 md:gap-4 order-1 md:order-3 mb-4 md:mb-0">
          <SocialIcon><Facebook size={16} className="w-4 h-4 sm:w-5 sm:h-5" /></SocialIcon>
          <SocialIcon><Linkedin size={16} className="w-4 h-4 sm:w-5 sm:h-5" /></SocialIcon>
          <SocialIcon><Twitter size={16} className="w-4 h-4 sm:w-5 sm:h-5" /></SocialIcon>
          <SocialIcon><Youtube size={16} className="w-4 h-4 sm:w-5 sm:h-5" /></SocialIcon>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, items, orderClass = "" }: FooterColumnProps) {
  return (
    <div className={`${orderClass} text-center sm:text-left`}>
      <h4 className="font-semibold mb-3 md:mb-4 text-sm sm:text-base">{title}</h4>
      <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs sm:text-sm">
        {items.map((item, i) => (
          <li
            key={i}
            className="hover:text-white transition cursor-pointer py-1"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="
      w-7 h-7 sm:w-8 sm:h-8
      bg-[#1e1e1e] 
      rounded-full 
      flex items-center justify-center 
      cursor-pointer 
      hover:bg-[#333] 
      hover:scale-105
      active:scale-95
      transition-all duration-200
    ">
      {children}
    </div>
  );
}