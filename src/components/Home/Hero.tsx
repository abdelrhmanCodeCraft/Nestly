"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#141414] text-white overflow-hidden py-12 md:py-16 lg:py-20">

      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">

          <div className="flex flex-col justify-center order-2 lg:order-1">
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] xl:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight">
              Discover Your Dream <br className="hidden sm:block" /> Property with Nestly
            </h1>

            <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg max-w-xl">
              Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
  
            <button className="
              w-full 
              sm:w-auto 
              px-5 sm:px-6 
              py-2.5 sm:py-3 
              border border-gray-700 rounded-lg 
              text-gray-300 hover:bg-gray-800/50 
              transition text-sm sm:text-base
              active:scale-95
              whitespace-nowrap 
            ">
              Learn More
            </button>

            <button className="
              w-full 
              sm:w-auto 
              px-5 sm:px-6 
              py-2.5 sm:py-3 
              bg-[#703BF7] hover:bg-[#5A2BD6] 
              rounded-lg transition font-semibold 
              text-sm sm:text-base
              shadow-lg hover:shadow-xl hover:shadow-purple-900/30
              active:scale-95
              whitespace-nowrap  
            ">
              Browse Properties
            </button>
            
          </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-10 sm:mt-12 lg:mt-14">
              
              <div className="p-4 sm:p-5 border border-gray-800 rounded-xl text-center 
                hover:border-gray-700 transition-colors bg-[#1A1A1A]/50">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">200+</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">Happy Customers</p>
              </div>

              <div className="p-4 sm:p-5 border border-gray-800 rounded-xl text-center 
                hover:border-gray-700 transition-colors bg-[#1A1A1A]/50">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">10k+</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">Properties For Clients</p>
              </div>

              <div className="p-4 sm:p-5 border border-gray-800 rounded-xl text-center 
                hover:border-gray-700 transition-colors bg-[#1A1A1A]/50 
                xs:col-span-2 lg:col-span-1">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">16+</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">Years of Experience</p>
              </div>

            </div>
          </div>

          <div className="w-full h-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] 
              rounded-xl lg:rounded-l-3xl overflow-hidden
              border border-gray-800 lg:border-l-0">
              <Image
                src="/assets/Image.png"
                alt="Luxury Building"
                fill
                className="object-cover object-center lg:object-right"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                lg:bg-gradient-to-r lg:from-black/30 lg:via-transparent lg:to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}