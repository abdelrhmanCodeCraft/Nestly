
import PropertyHero from "../../components/Properties/PropertyHero";
import React from "react";
import Discover from "../../components/Properties/Discover";
import ContactForm from "../../components/Properties/ContactForm";
import ScoundComponent from "../../components/Properties/PropertiesdHeader";

function PropertiesPage() {
  return (
    <>
        <ScoundComponent/>
        <PropertyHero/>
        <Discover/>
        <ContactForm/>
    </>
  );
}

export default PropertiesPage;