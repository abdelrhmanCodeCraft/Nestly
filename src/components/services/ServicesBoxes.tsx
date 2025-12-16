

"use client";

import { Home, Unlock, Settings, TrendingUp } from "lucide-react";
import FeatureBox from "../shared/FeatureBox";

export default function ServicesBoxes() {
  const features = [
    { title: "Find Your Dream Home", icon: Home },
    { title: "Unlock Property Value", icon: Unlock },
    { title: "Effortless Property Management", icon: Settings },
    { title: "Smart Investments, Informed Decisions", icon: TrendingUp },
  ];

  return (
    <section className="pt-16 -mt-16">
<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 border-t-[5px] border-b-[5px] border-[#262626]">

        <div className=" rounded-3xl p-8">

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
