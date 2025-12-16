"use client";

import { Users, Wrench, Wallet2, Scale } from "lucide-react";
import PropertySection from "../shared/PropertySection";

export default function EffortlessPropertyManagement() {
  return (
    <PropertySection
      title="Effortless Property Management"
      description="Owning a property should be a pleasure, not a hassle. Nestly’s Property Management takes the stress out of ownership."
      cards={[
        {
          icon: <Users size={28} />,
          title: "Tenant Harmony",
          description: "Smooth tenant relationships and reduced vacancies.",
        },
        {
          icon: <Wrench size={28} />,
          title: "Maintenance Ease",
          description: "We handle all aspects of property upkeep.",
        },
        {
          icon: <Wallet2 size={28} />,
          title: "Financial Peace of Mind",
          description: "We take care of property finances and rent collection.",
        },
        {
          icon: <Scale size={28} />,
          title: "Legal Guardian",
          description: "Stay compliant with property laws effortlessly.",
        },
      ]}
      ctaTitle="Experience Effortless Property Management"
      ctaDescription="Explore our Property Management Service and enjoy hassle-free ownership."
      ctaButton="Learn More"
    />
  );
}
