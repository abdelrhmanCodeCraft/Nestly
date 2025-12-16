"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#000000] text-white overflow-hidden py-12 md:py-16 lg:py-24">

      <Image
        src="/assets/Abstract Design (2).png"
        alt="left pattern"
        width={500}
        height={500}
        className="absolute left-0 top-0 h-full w-auto object-cover opacity-10 sm:opacity-20 md:opacity-30 pointer-events-none"
      />

      <Image
        src="/assets/Abstract Design (1).png"
        alt="right pattern"
        width={600}
        height={600}
        className="absolute right-0 top-0 h-full w-auto object-cover opacity-10 sm:opacity-20 md:opacity-30 pointer-events-none"
      />

      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

          <div className="w-full lg:max-w-[700px] space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold leading-tight sm:leading-tight md:leading-tight">
              Start Your Real Estate Journey Today
            </h1>

            <p className="text-sm sm:text-base md:text-[15px] text-gray-300 leading-relaxed sm:leading-relaxed md:leading-relaxed">
              Your dream property is just a click away. Whether you're looking for a
              new home, a strategic investment, or expert real estate advice, Nestly is here
              to assist you every step of the way. Take the first step towards your real estate
              goals and explore our available properties or get in touch with our team for personalized assistance.
            </p>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <button className="w-full sm:w-auto bg-[#8055FF] hover:bg-[#6e45e0] transition-all duration-300 
              text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 
              rounded-lg text-sm sm:text-[15px] font-medium 
              shadow-lg hover:shadow-xl hover:shadow-purple-900/30
              active:scale-95">
              Explore Properties
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}