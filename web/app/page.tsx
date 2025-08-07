import HomeAboutSection from "./_modules/about";
import HomeACESection from "./_modules/ace";
import HomeHeroSection from "./_modules/hero";
import HomeServicesSection from "./_modules/services";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeACESection />
      <HomeAboutSection />
    </>
  );
}
