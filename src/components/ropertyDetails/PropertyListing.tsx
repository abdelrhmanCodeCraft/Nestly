"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Zap } from "lucide-react";

const images = [
  "/assets/pro1.png",
  "/assets/pro2.png",
  "/assets/pro3.png",
  "/assets/pro1.png",
  "/assets/pro2.png",
  "/assets/pro3.png",
];

export default function PropertyDetails() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 text-white px-6 py-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">Seaside Serenity Villa</h1>
          <p className="flex items-center gap-2 text-sm text-gray-400 mt-1">
            <MapPin size={14} /> Malibu, California
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Price</p>
          <p className="text-lg font-semibold">$1,250,000</p>
        </div>
      </div>

      <div className="bg-[#121212] rounded-2xl p-4 mb-8">
        <div className="flex gap-3 overflow-x-auto pb-3 mb-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative min-w-[120px] h-[70px] rounded-lg overflow-hidden transition ${
                activeIndex === i ? "ring-2 ring-purple-500" : "opacity-70"
              }`}
            >
              <Image src={img} alt="thumb" fill className="object-cover" />
            </button>
          ))}
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
            <Image
              src={images[activeIndex]}
              alt="main"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
            <Image
              src={images[(activeIndex + 1) % images.length]}
              alt="secondary"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center"
          >
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  activeIndex === i ? "bg-purple-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#121212] rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-3">Description</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            This open floor plan offers breathtaking ocean views from every room
            and direct access to a pristine sandy beach.
          </p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Bedrooms</p>
              <p className="font-semibold">04</p>
            </div>
            <div>
              <p className="text-gray-400">Bathrooms</p>
              <p className="font-semibold">03</p>
            </div>
            <div>
              <p className="text-gray-400">Area</p>
              <p className="font-semibold">2,500 Sq Ft</p>
            </div>
          </div>
        </div>

        <div className="bg-[#121212] rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Key Features and Amenities</h2>
          <ul className="space-y-4 text-sm">
            {[
              "Expansive oceanfront terrace for outdoor entertaining",
              "Gourmet kitchen with top-of-the-line appliances",
              "Private beach access for morning strolls and sunset views",
              "Master suite with a spa-inspired bathroom",
              "Private garage and ample storage space",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-purple-500">
                  <Zap size={16} />
                </span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
