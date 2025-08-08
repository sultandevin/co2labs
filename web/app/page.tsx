import HomeAboutSection from "./_modules/about";
import HomeACESection from "./_modules/ace";
import HomeContactSection from "./_modules/contact";
import HomeHeroSection from "./_modules/hero";
import HomePortofolioSection from "./_modules/portofolio";
import HomeServicesSection from "./_modules/services";
import HomeTeamSection from "./_modules/team";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeACESection />
      <HomeAboutSection />
      <HomeTeamSection />
      <HomePortofolioSection />
      <HomeContactSection />
    </main>
  );
}
