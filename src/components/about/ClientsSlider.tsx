"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Briefcase, Zap, Globe } from "lucide-react"; 
import {  clients } from "../../constants/Client";


export default function ClientsSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < clients.length - 2) setIndex(index + 2);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 2);
  };

  return (
    <section className="bg-[#0d0d0d] text-white py-20 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto px-3 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-bold text-white mb-4">Our Valued Clients</h2>
        <p className="max-w-3xl text-gray-400 text-lg">
          At Nestly, we have had the privilege of working with a diverse range
          of clients across various industries. Here are some of the clients
          we've had the pleasure of serving.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(index / 2) * 100}%)` }}
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full md:w-1/2 p-3" 
            >
              <div className="bg-[#111111] border border-white/10 rounded-xl p-8 shadow-lg h-full flex flex-col justify-between">
                

                <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                    <div>
                        <p className="text-sm text-gray-500">{client.since}</p>
                        <h3 className="text-2xl font-semibold text-white mt-1">{client.name}</h3>
                    </div>
                    
                    <a 
                        href={client.website}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2  border border-white/20 rounded-lg text-sm text-white hover:bg-white/10 transition flex-shrink-0"
                    >
                        Visit Website
                    </a>
                </div>


                <div className="grid grid-cols-2 gap-4 border-b border-gray-800 pb-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Briefcase size={16} className="text-purple-400" /> 
                    <div className="text-sm">
                      <p className="text-gray-400">Domain</p>
                      <p className="text-white font-medium">{client.domain}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Zap size={16} className="text-purple-400" /> 
                    <div className="text-sm">
                      <p className="text-gray-400">Category</p>
                      <p className="text-white font-medium">{client.category}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">What They Said 🤝</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {client.testimonial}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl px-4 mx-auto flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
        
        <p className="text-sm text-white font-medium">
          <span className="text-xl font-bold text-white">
            {String(index / 2 + 1).padStart(2, "0")}
          </span>
          <span className="text-gray-500"> of {String(clients.length / 2).padStart(2, "0")}</span>
        </p>

        <div className="flex gap-4 ">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`w-12 h-12 flex items-center justify-center rounded-full border border-gray-800 transition ${
                index === 0
                ? "text-gray-600 bg-gray-900 cursor-not-allowed"
                : "text-white bg-gray-900 hover:bg-gray-800"
            }`}
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button
            onClick={next}
            disabled={index >= clients.length - 2}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition ${
                index >= clients.length - 2
                ? "text-gray-600 bg-gray-900 border border-gray-800 cursor-not-allowed"
                : "text-white bg-purple-600 hover:bg-purple-700"
            }`}
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}