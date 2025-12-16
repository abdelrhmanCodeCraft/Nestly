import InquiryForm from "../../components/ropertyDetails/InquiryForm";
import PropertyListing from "../../components/ropertyDetails/PropertyListing";
import PricingSection from "../../components/ropertyDetails/PricingSection";
import FAQSection from "../../components/Home/FAQSection";

function PropertyDetailsPage() {
  return (
    <>
        <PropertyListing />
        <InquiryForm />
        <PricingSection />
        <FAQSection />
    </>
  );
}

export default PropertyDetailsPage;