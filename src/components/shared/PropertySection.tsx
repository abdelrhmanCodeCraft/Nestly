"use client";
import React from "react";

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SectionProps {
  title: string;
  description: string;
  cards: CardItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

export default function PropertySection({
  title,
  description,
  cards,
  ctaTitle,
  ctaDescription,
  ctaButton,
}: SectionProps) {
  return (
    <section className="text-white lg:mt-20 sm:mt-16 mt-12 py-8">

      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-400 max-w-3xl mb-12">{description}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-6 bg-[#141414] hover:bg-[#1b1b1b] transition"
            >
              <div className="text-purple-400 mb-4">{card.icon}</div>
              <h3 className="text-xl font-medium mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {cards[3] && (
            <div className="border border-gray-700 rounded-xl p-6 bg-[#141414] hover:bg-[#1b1b1b] transition">
              <div className="text-purple-400 mb-4">{cards[3].icon}</div>
              <h3 className="text-xl font-medium mb-2">{cards[3].title}</h3>
              <p className="text-gray-400 text-sm">{cards[3].description}</p>
            </div>
          )}

          <div
  className="md:col-span-2 border border-gray-700 rounded-xl p-10 bg-[#141414] bg-cover bg-center flex flex-col justify-center items-start"
  style={{ backgroundImage: "url('/assets/Group.png')" }}
>

            <h3 className="text-xl font-semibold mb-2">{ctaTitle}</h3>
            <p className="text-gray-400 max-w-2xl mb-4">{ctaDescription}</p>
            <button className="px-5 py-2 border border-gray-500 rounded-md hover:bg-white hover:text-black transition text-sm">
              {ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
