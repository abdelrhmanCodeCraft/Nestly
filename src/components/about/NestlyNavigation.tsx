"use client";

import React from "react";

const steps = [
  {
    step: "Step 01",
    title: "Discover a World of Possibilities",
    desc: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "Step 02",
    title: "Narrowing Down Your Choices",
    desc: "Once you’ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "Step 03",
    title: "Personalized Guidance",
    desc: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    step: "Step 04",
    title: "See It for Yourself",
    desc: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: "Step 05",
    title: "Making Informed Decisions",
    desc: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    step: "Step 06",
    title: "Getting the Best Deal",
    desc: "We’ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export default function StepsSection() {
  return (
    <section className="text-white ">
      <div  className="max-w-[1596px] mx-auto px-4 lg:pb-15 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Navigating the Statein Experience
          </h2>
          <p className="text-gray-400 max-w-3xl">
            At Nestly, we’ve designed a straightforward process to help you find and purchase your dream property with ease.
            Here’s a step-by-step guide to how it all works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl p-6 bg-[#111] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-purple-500 to-transparent"></div>

              <p className="text-sm text-gray-400 mb-4">{item.step}</p>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
