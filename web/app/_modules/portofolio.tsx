import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    src: "aotc.png",
    name: "AOTC Cosmetics",
    href: "https://aotccosmetics.com",
  },
  {
    src: "nosh.png",
    name: "Nosh Kitchen Website",
    href: "https://noshkitchen.com.sg",
  },
  {
    src: "michelah.png",
    name: "Michelah Event Organizer Singapore",
    href: "https://michelah.com",
  },
  {
    src: "studio.png",
    name: "Joywaltzstudio Academy",
    href: "https://pianistprodigy.com/",
  },
  {
    src: "octopay.png",
    name: "Octopay Payment",
    href: "https://octopay.asia",
  },
];

const HomePortofolioSection = () => {
  return (
    <section className="bg-primary relative">
      <Container className="gap-12 py-18">
        <h1 className="font-heading text-5xl font-semibold text-white">
          Our Portofolio
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          {PROJECTS.map((project, i) => (
            <Card key={i} {...project} />
          ))}
        </div>
      </Container>

      <div id="portofolio" className="absolute -top-20" />
    </section>
  );
};

const Card = (props: { name: string; src: string; href: string }) => (
  <Link
    href={props.href}
    rel="noopener noreferrer"
    target="_blank"
    className="group flex w-70 flex-col gap-2 rounded-lg p-2 text-white"
  >
    <div className="relative aspect-square w-full overflow-clip rounded-lg">
      <Image
        src={`/images/home/portofolio/${props.src}`}
        alt={props.name}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
    </div>

    <h3 className="text-lg font-semibold">{props.name}</h3>
  </Link>
);

export default HomePortofolioSection;
