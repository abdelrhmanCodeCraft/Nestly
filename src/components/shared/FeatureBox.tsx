"use client";

import { LucideIcon } from "lucide-react";

interface FeatureBoxProps {
  title: string;
  icon: LucideIcon;
}

export default function FeatureBox({ title, icon: Icon }: FeatureBoxProps) {
  return (
    <div
      className="
        relative
        w-full
        min-w-[160px]
        max-w-full
        border border-[#262626]
        rounded-2xl
        flex flex-col items-center
        p-4 sm:p-6 md:p-8
        transition-all duration-300
        hover:scale-[1.03] sm:hover:scale-105
      "
    >
      <div className="absolute top-3 right-3 rotate-45 text-gray-400 text-xl sm:text-2xl">
        ↑
      </div>

      <div
        className="
          w-12 h-12
          sm:w-14 sm:h-14
          md:w-15 md:h-15
          rounded-full
          flex items-center justify-center
          mb-4 sm:mb-6
          border-2
        "
        style={{ borderColor: "#A685FA" }}
      >
        <Icon size={24} className="sm:w-[28px] sm:h-[28px]" style={{ color: "#A685FA" }} />
      </div>

      <h3 className="text-white text-sm sm:text-lg md:text-xl font-semibold text-center">
        {title}
      </h3>
    </div>
  );
}
