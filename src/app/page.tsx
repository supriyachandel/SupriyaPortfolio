import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProjects from "@/components/OtherProjects";
import MobileAppAPI from "@/components/MobileAppAPI";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <FeaturedProject />
      <OtherProjects />
      <MobileAppAPI />
      <TechStack />
      <Experience />
      <TechnicalExpertise />
      <Contact />
    </>
  );
}
