import ContactFormSection from "../../components/contacts/ContactFormSection";
import ContactBoxes from "../../components/contacts/ContactBoxes";
import ContactHero from "../../components/contacts/ContactHero";
import OfficeLocationsSection from "../../components/contacts/OfficeLocationsSection";


function ContactsPage() {
  return <>
    <ContactHero />
    <ContactBoxes />
    <ContactFormSection />
    <OfficeLocationsSection/>
  </>;
}

export default ContactsPage;