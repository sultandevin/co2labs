import Container from "@/components/container";
import Image from "next/image";

const PROJECTS = [
  {
    src: "/images/home/hero.png",
    name: "AOTC Cosmetics",
  },
  {
    src: "/images/home/hero.png",
    name: "Nosh Kitchen Website",
  },
  {
    src: "/images/home/hero.png",
    name: "Michelah Event Organizer Singapore",
  },
  {
    src: "/images/home/hero.png",
    name: "Joywaltzstudio Academy",
  },
  {
    src: "/images/home/hero.png",
    name: "Octopay Payment",
  },
];

const HomePortofolioSection = () => {
  return (
    <section className="bg-primary">
      <Container className="gap-12 py-18">
        <h1 className="font-heading text-5xl font-semibold text-white">
          Our Portofolio
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {PROJECTS.map((project, i) => (
            <Card key={i} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Card = (props: { name: string; src: string }) => (
  <div className="flex flex-col gap-2 text-white">
    <div className="relative aspect-square h-60 overflow-clip rounded-lg">
      <Image
        src={`/images/home/hero.png`}
        alt={props.name}
        fill
        className="object-cover"
      />
    </div>

    <h3 className="text-lg font-semibold">{props.name}</h3>
  </div>
);

export default HomePortofolioSection;
