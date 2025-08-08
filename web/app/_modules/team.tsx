import Container from "@/components/container";
import Image from "next/image";

const HomeTeamSection = () => {
  return (
    <Container className="mt-60">
      <h1 className="font-heading text-5xl font-semibold">Our Team</h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </Container>
  );
};

const ProfileCard = () => (
  <div className="relative flex flex-col items-center gap-1 rounded-xl bg-white p-6 text-center transition-transform lg:mt-20 lg:pt-24 lg:shadow-xl lg:hover:scale-110">
    <div className="-top-20 lg:absolute">
      <div className="relative size-40 overflow-clip rounded-full bg-neutral-200 shadow-lg">
        <Image
          src={`/images/home/hero.png`}
          alt="Profile Picture"
          fill
          sizes="50%"
          className="object-cover"
        />
      </div>
    </div>

    <h3 className="text-xl font-bold">Name</h3>

    <h4 className="text-base font-semibold">Subtitle</h4>

    <p className="text-sm italic max-lg:max-w-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa repellat
      porro eligendi, natus enim perspiciatis soluta tempora molestiae, pariatur
      odio sint earum dignissimos aliquam consectetur voluptatum harum? Dolore,
      unde.
    </p>
  </div>
);

export default HomeTeamSection;
