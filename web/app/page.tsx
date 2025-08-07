import HomeAboutSection from "./_modules/about";
import HomeACESection from "./_modules/ace";
import HomeContactSection from "./_modules/contact";
import HomeHeroSection from "./_modules/hero";
import HomePortofolioSection from "./_modules/portofolio";
import HomeServicesSection from "./_modules/services";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeACESection />
      <HomeAboutSection />
      <HomePortofolioSection />
      <HomeContactSection />
    </>
  );
}
