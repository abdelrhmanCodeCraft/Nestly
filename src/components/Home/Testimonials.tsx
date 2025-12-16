"use client";
import { useState, useEffect } from "react";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      title: "Exceptional Service!",
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      role: "Property Buyer",
      rating: 5,
      comment: "Our experience with Nestly was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      avatar: "/assets/avatar1.jpg"
    },
    {
      title: "Life Changing Experience!",
      name: "Sarah Mohammed",
      location: "Alexandria, Egypt",
      role: "Property Seller",
      rating: 5,
      comment: "Exceptional service from start to finish. The team was always available to answer questions and guide us through the process. Truly professional!",
      avatar: "/assets/avatar2.jpg"
    },
    {
      title: "Investment Game-Changer!",
      name: "Omar Khalid",
      location: "Giza, Egypt",
      role: "Real Estate Investor",
      rating: 5,
      comment: "Working with Nestly was a game-changer for my investment portfolio. Their market insights and professional approach are unmatched.",
      avatar: "/assets/avatar3.jpg"
    },
    {
      title: "Dream Home Found!",
      name: "Layla Ahmed",
      location: "Sharm El Sheikh",
      role: "Home Owner",
      rating: 5,
      comment: "They helped us find the perfect vacation home. The attention to detail and customer service exceeded all our expectations.",
      avatar: "/assets/avatar4.jpg"
    },
    {
      title: "Business Made Easy!",
      name: "Karim Farouk",
      location: "Luxor, Egypt",
      role: "Business Owner",
      rating: 5,
      comment: "Nestly transformed our office search into a seamless experience. Their expertise in commercial real estate is impressive.",
      avatar: "/assets/avatar5.jpg"
    },
    {
      title: "First-Time Buyer Success!",
      name: "Noura Samir",
      location: "Aswan, Egypt",
      role: "First-time Buyer",
      rating: 5,
      comment: "As a first-time buyer, I was nervous about the process. Nestly made everything simple and stress-free. Thank you!",
      avatar: "/assets/avatar6.jpg"
    },
  ];

  const infiniteTestimonials = [...testimonials, ...testimonials];

  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

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
    const maxIndex = infiniteTestimonials.length - itemsToShow;
    
    if (index > maxIndex) {
      setTimeout(() => setIndex(0), 300);
    }
    if (index < 0) {
      setTimeout(() => setIndex(maxIndex), 300);
    }
  }, [index, itemsToShow, infiniteTestimonials.length]);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <div 
        key={i} 
        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
      >
        <div className="relative w-6 h-6 sm:w-8 sm:h-8">
          <div className="absolute inset-0 border border-yellow-400 rounded-full"></div>
          <div className="absolute inset-1 flex items-center justify-center">
            <span className="text-yellow-400 text-lg sm:text-xl">★</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="bg-[#141414] py-8 sm:py-12 md:py-16 text-white">
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-[600px] mt-1 sm:mt-2 text-sm sm:text-base">
              Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Nestly for their real estate needs.
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
            View All Testimonials
          </button>
        </div>

        <div className="relative overflow-hidden">

          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${index * (100 / itemsToShow)}%)`,
            }}
          >
            {infiniteTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`
                  ${itemsToShow === 1 ? 'min-w-full' : ''}
                  ${itemsToShow === 2 ? 'min-w-[50%]' : ''}
                  ${itemsToShow === 3 ? 'min-w-[33.33%]' : ''}
                  px-2 sm:px-3 md:px-4
                `}
              >
                <div className="border border-[#333] rounded-2xl p-4 sm:p-5  h-full flex flex-col">
                  
                  <div className="flex mb-4 sm:mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-left">
                    {testimonial.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 flex-grow text-left">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Avatar */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#7B3FF2] flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="text-left">
                      <h4 className="font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {testimonial.location}
                      </p>
                      
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
          <hr className="mt-8 text-gray-800" />

          <div className="flex justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
            <button
              onClick={prev}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-base sm:text-lg hover:bg-[#7B3FF2] hover:border-[#7B3FF2] transition-colors bg-[#1b1b1b] shadow-lg"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <button
              onClick={next}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-base sm:text-lg hover:bg-[#7B3FF2] hover:border-[#7B3FF2] transition-colors bg-[#1b1b1b] shadow-lg"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}