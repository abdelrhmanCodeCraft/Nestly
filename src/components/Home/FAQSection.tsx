"use client";
import { useState, useEffect } from "react";

export default function FAQSection() {
  const faqItems = [
    {
      id: 1,
      title: "How do I search for properties on Nestly?",
      description: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      id: 2,
      title: "What documents do I need to sell my property through Nestly?",
      description: "Discover the essential documents required to list and sell your property smoothly.",
    },
    {
      id: 3,
      title: "How can I contact an Nestly agent?",
      description: "Find out the best ways to get in touch with our professional real estate agents.",
    },
    {
      id: 4,
      title: "What makes Nestly different from other agencies?",
      description: "Learn about our unique approach, technology, and customer service advantages.",
    },
    {
      id: 5,
      title: "How long does the buying process usually take?",
      description: "Get an estimate of the typical timeline for purchasing a property through Nestly.",
    },
    {
      id: 6,
      title: "Can I schedule a property viewing online?",
      description: "Learn how to easily schedule viewings for properties you're interested in.",
    },
    {
      id: 7,
      title: "What are the fees for using Nestly's services?",
      description: "Understand our transparent pricing structure and service fees.",
    },
    {
      id: 8,
      title: "How do I get a property valuation?",
      description: "Find out how to get an accurate market valuation for your property.",
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(6); 
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { 
        setItemsToShow(3);
      } else if (window.innerWidth < 1024) { 
        setItemsToShow(4);
      } else { 
        setItemsToShow(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedItems = showAll ? faqItems : faqItems.slice(0, itemsToShow);

  return (
    <section className="bg-[#141414] py-8 sm:py-12 md:py-16 text-white">
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-[600px] mt-1 sm:mt-2 text-sm sm:text-base">
              Find answers to common questions about Nestly's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
            </p>
          </div>

          <button 
            className="
              border 
              border-[#333] 
              px-4 sm:px-5 
              py-2 
              rounded-md 
              text-sm sm:text-base 
              w-full sm:w-auto
              transition-all 
              duration-200
              hover:border-[#7B3FF2]
              hover:text-[#7B3FF2]
              hover:scale-105
              active:scale-95
            "
          >
            View All FAQ's
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="border border-[#333] rounded-2xl p-4 sm:p-6 bg-[#1b1b1b] hover:border-[#7B3FF2]/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="
                    w-8 h-8 
                    sm:w-10 sm:h-10 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center 
                    text-sm 
                    sm:text-base 
                    font-bold
                    border 
                    border-[#7B3FF2]
                  "
                  style={{ background: "rgba(123, 63, 242, 0.1)" }}
                >
                  {item.id.toString().padStart(2, '0')}
                </div>
                <span className="text-xs sm:text-sm text-gray-400">
                  Question
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6">
                {item.description}
              </p>

              <button 
                className="
                  flex 
                  items-center 
                  gap-2 
                  text-[#7B3FF2] 
                  text-sm 
                  sm:text-base 
                  font-medium
                  hover:text-[#9d6df5]
                  transition-colors
                  group
                "
              >
                Read More
                <span className="
                  transition-transform 
                  duration-300 
                  group-hover:translate-x-1
                ">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

        {faqItems.length > itemsToShow && (
          <div className="flex justify-center mt-8 sm:mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                border 
                border-[#7B3FF2] 
                px-6 
                py-3 
                rounded-lg 
                text-sm 
                sm:text-base 
                font-medium
                transition-all 
                duration-200
                hover:bg-[#7B3FF2]
                hover:text-white
              "
            >
              {showAll ? 'Show Less' : 'Load More FAQ\'s'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}