"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";


interface FeaturedPropertiesProps {
  title: string;
  desc: string;
  btnText?: string;
}

export default function FeaturedProperties({ title, desc, btnText }: FeaturedPropertiesProps) {
  const cards = [
    {
      title: "Seaside Serenity Villa",
      desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      img: "/assets/pro1.png",
      price: "$550,000",
    },
    {
      title: "Metropolitan Haven",
      desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
      img: "/assets/pro2.png",
      price: "$550,000",
    },
    {
      title: "Rustic Retreat Cottage",
      desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      img: "/assets/pro3.png",
      price: "$550,000",
    },
    {
      title: "Urban Luxe Apartment",
      desc: "Modern apartment with premium furniture and smart home features...",
      img: "/assets/pro1.png",
      price: "$420,000",
    },
    {
      title: "Palm View Mansion",
      desc: "Luxury mansion with a private pool and beachfront access...",
      img: "/assets/pro2.png",
      price: "$1,200,000",
    },
    {
      title: "Skyline Penthouse",
      desc: "Top-floor penthouse with breathtaking skyline views...",
      img: "/assets/pro3.png",
      price: "$950,000",
    },
    {
      title: "Countryside Villa",
      desc: "A peaceful villa surrounded by greenery and nature...",
      img: "/assets/pro1.png",
      price: "$480,000",
    },
    {
      title: "Modern Family House",
      desc: "A spacious home ideal for families with modern interior...",
      img: "/assets/pro2.png",
      price: "$600,000",
    },
  ];

  const infiniteCards = [...cards, ...cards];

  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); 
  const router = useRouter();


  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { 
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else { 
        setItemsToShow(3);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = infiniteCards.length - itemsToShow;
    
    if (index > maxIndex) {
      setTimeout(() => setIndex(0), 300);
    }
    if (index < 0) {
      setTimeout(() => setIndex(maxIndex), 300);
    }
  }, [index, itemsToShow, infiniteCards.length]);

  return (
    <section className="bg-[#141414] py-8 sm:py-12 md:py-16 text-white">
      <div className="max-w-[1596px] mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="flex flex-col px-2 sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="text-gray-400 max-w-[700px] mt-1 sm:mt-2 text-sm sm:text-base">
              {desc}
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
  {btnText || "View All Properties"}
</button>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${index * (100 / itemsToShow)}%)`,
            }}
          >
            {infiniteCards.map((card, i) => (
              <div
                key={i}
                className={`
                  ${itemsToShow === 1 ? 'min-w-full' : ''}
                  ${itemsToShow === 2 ? 'min-w-[50%]' : ''}
                  ${itemsToShow === 3 ? 'min-w-[33.33%]' : ''}
                  px-2 sm:px-3 md:px-4
                `}
              >
                <div className="border border-[#333] rounded-2xl p-4 sm:p-5 bg-[#1b1b1b] h-full">
                  <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] relative mb-3 sm:mb-4">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="rounded-xl object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 line-clamp-1">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                    {card.desc}{" "}
                    <span className="underline cursor-pointer">Read More</span>
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <div className="px-2 sm:px-3 py-1 border rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                      🛏 3-Bedroom
                    </div>
                    <div className="px-2 sm:px-3 py-1 border rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                      🛁 2-Bathroom
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <p className="text-gray-300 text-sm sm:text-base">Price</p>
                    <p className="text-lg sm:text-xl font-bold">{card.price}</p>
                  </div>

                  <button
  onClick={() => router.push("/ropertyDetails")}
  className="w-full py-2 sm:py-3 rounded-lg text-white font-semibold text-sm sm:text-base"
  style={{ background: "#7B3FF2" }}
>
  View Property Details
</button>

                </div>
              </div>
            ))}
          </div>
          <hr className="mt-8 text-gray-800" />

          <div className="flex justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
            <button
              onClick={prev}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-base sm:text-lg hover:bg-[#7B3FF2] hover:border-[#7B3FF2] transition-colors"
              aria-label="Previous property"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-base sm:text-lg hover:bg-[#7B3FF2] hover:border-[#7B3FF2] transition-colors"
              aria-label="Next property"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}