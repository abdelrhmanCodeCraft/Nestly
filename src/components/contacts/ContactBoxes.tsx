"use client";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react"; 
import FeatureBox from "../shared/FeatureBox";

export default function ContactBoxes() {
  const features = [
    { title: "info@Nestly.com", icon: Mail },          
    { title: "+1 (123) 456-7890", icon: Phone },         
    { title: "Main Headquarters", icon: MapPin },   
    { title: "LinkedIn", icon: Linkedin },     
  ];

  return (
    <section className="pt-16 -mt-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 border-t-[7px] border-b-[7px] border-[#262626]">
        <div className="rounded-3xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((item, index) => (
              <FeatureBox key={index} title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
