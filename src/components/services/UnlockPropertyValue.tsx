"use client";

import { TrendingUp, Megaphone, Handshake, CheckCircle } from "lucide-react";
import PropertySection from "../shared/PropertySection";

export default function UnlockPropertyValue() {
  return (
    <PropertySection
      title="Unlock Property Value"
      description="Selling your property should be a rewarding experience, and at Nestly, we make sure it is. Our Property Selling Service is designed to maximize the value of your property."
      cards={[
        {
          icon: <TrendingUp size={28} />,
          title: "Valuation Mastery",
          description: "Discover the true worth of your property with our expert valuation services.",
        },
        {
          icon: <Megaphone size={28} />,
          title: "Strategic Marketing",
          description: "Selling a property requires more than listing; it needs a strategic approach.",
        },
        {
          icon: <Handshake size={28} />,
          title: "Negotiation Wizardry",
          description: "Our negotiation experts secure the best deals for you.",
        },
        {
          icon: <CheckCircle size={28} />,
          title: "Closing Success",
          description: "We guide you through every step of the closing process.",
        },
      ]}
      ctaTitle="Unlock the Value of Your Property Today"
      ctaDescription="Explore our Property Selling Service categories and let us help you achieve the best deal possible."
      ctaButton="Learn More"
    />
  );
}
