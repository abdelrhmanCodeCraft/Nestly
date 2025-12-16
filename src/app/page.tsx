'use client';

import Hero from "@//components/Home/Hero";
import Boxes from "../components/Home/Boxes"; 
import Properties from "../components/Home/Properties";
import Testimonials from "../components/Home/Testimonials";
import FAQSection from "../components/Home/FAQSection";


export default function Home() {
  return (
    <>
      <Hero/>
      <Boxes/>
      <Properties title="Featured Properties" desc="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Nestly. Click  View Details for more information."/>
      <hr />
      <Testimonials/>
      <FAQSection/>
    </>
  );
}

