import OurValues from "../../components/about/OurValues";
import OurJourney from "../../components/about/OurJourney";
import OurAchievements from "../../components/about/OurAchievements";
import NestlyNavigation from "../../components/about/NestlyNavigation";
import NestlyTeam from "../../components/about/NestlyTeam";
import ClientsSlider from "../../components/about/ClientsSlider";

function AboutPage() {
    return (
        <>
            <OurJourney/>
            <OurValues/>
            <OurAchievements/>
            <NestlyNavigation/>
            <NestlyTeam/>
            <ClientsSlider/>
        </>
    );
}

export default AboutPage;