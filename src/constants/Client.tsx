
import { useState } from "react";
import { ArrowLeft, ArrowRight, Briefcase, Zap, Globe } from "lucide-react";

type Client = {
  since: string;
  name: string;
  domain: string;
  category: string;
  testimonial: string;
  website: string;
};

export const clients: Client[] = [
  {
    since: "Since 2019",
    name: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial: "Nestly's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    website: "#",
  },
  {
    since: "Since 2018",
    name: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial: "Nestly’s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    website: "#",
  },
  {
    since: "Since 2021",
    name: "Aqua Ventures",
    domain: "Land Acquisition",
    category: "Waterfront Development",
    testimonial: "The advice and market insights provided by Nestly were crucial for our large-scale land acquisition project. Flawless execution.",
    website: "#",
  },
  {
    since: "Since 2017",
    name: "Tech Innovators Inc.",
    domain: "Office Leasing",
    category: "IT Headquarters",
    testimonial: "We secured our new HQ with ease thanks to the dedicated efforts of the Nestly team. Highly recommend their services.",
    website: "#",
  },
  {
    since: "Since 2020",
    name: "Urban Builders Co.",
    domain: "Residential Development",
    category: "Affordable Housing",
    testimonial: "Nestly successfully managed the sales of our entire residential complex, exceeding our target deadlines.",
    website: "#",
  },
  {
    since: "Since 2016",
    name: "Phoenix Fund",
    domain: "Investment & Portfolio",
    category: "High-Yield Properties",
    testimonial: "As institutional investors, we rely on Nestly for consistent, high-value property sourcing and management.",
    website: "#",
  },
  {
    since: "Since 2022",
    name: "Global Logistics",
    domain: "Industrial Real Estate",
    category: "Warehousing & Distribution",
    testimonial: "Finding the right logistics hub was challenging, but Nestly delivered the perfect warehouse solution on time.",
    website: "#",
  },
  {
    since: "Since 2015",
    name: "Heritage Hotels",
    domain: "Hospitality",
    category: "Boutique Resorts",
    testimonial: "Nestly helped us acquire and develop two key locations for our expansion into the luxury resort market.",
    website: "#",
  },
  {
    since: "Since 2023",
    name: "Solar Energy Systems",
    domain: "Commercial Land",
    category: "Renewable Energy Farms",
    testimonial: "Their knowledge of commercial land zoning was instrumental in securing permits for our large solar farm project.",
    website: "#",
  },
  {
    since: "Since 2014",
    name: "Capital Growth Bank",
    domain: "Corporate Real Estate",
    category: "Branch Network",
    testimonial: "We use Nestly exclusively for managing our entire branch relocation and acquisition strategy across the region.",
    website: "#",
  },
];