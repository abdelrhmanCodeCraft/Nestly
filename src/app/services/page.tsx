import ServicesBoxes from "../../components/services/ServicesBoxes";
import Boxes from "../../components/Home/Boxes";
import ServicesHrader from "../../components/services/ServicesHrader";
import UnlockPropertyValue from "../../components/services/UnlockPropertyValue";
import EffortlessPropertyManagement from "../../components/services/EffortlessPropertyManagement";
import SmartInvestmentsSection from "../../components/services/InvestmentFeatureCard";

function servicesPage() {
  return (
    <>
      <ServicesHrader/>
      <ServicesBoxes/>
      <UnlockPropertyValue/>
      <EffortlessPropertyManagement/>
      <SmartInvestmentsSection/>
    </>
  );
}   
export default servicesPage;