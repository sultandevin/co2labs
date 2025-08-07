import Container from "@/components/container";
import {
  Code,
  Diamond,
  GitGraph,
  LucideIcon,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";

const CONTENT = [
  {
    logo: SlidersHorizontal,
    name: "Website Maintenance",
    href: "/service/web-main",
    description: "Keep your website running smoothly and securely",
  },
  {
    logo: Code,
    name: "Website & App Development",
    href: "/service/",
    description:
      "Transform your online presence with our custom platform design solutions",
  },
  {
    logo: GitGraph,
    name: "IT Support",
    href: "/service/",
    description:
      "Experience peace of mind with our reliable IT support services",
  },
  {
    logo: Diamond,
    name: "3rd Party AI Solution",
    href: "/service/",
    description:
      "Leverage our expertise to find the best third-party services for your business",
  },
];

const HomeServicesSection = () => {
  return (
    <section className="bg-primary">
      <Container className="items-center gap-12">
        <h1 className="font-heading text-5xl font-semibold text-white">
          About Us
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {CONTENT.map((item) => (
            <Card key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Card = (props: {
  name: string;
  description: string;
  href: string;
  logo: LucideIcon;
}) => (
  <div className="flex w-60 flex-col items-center justify-between gap-6 rounded-lg bg-white p-4 text-center">
    <div className="mt-4 flex flex-col items-center gap-3">
      <div className="relative rounded-full bg-neutral-200 p-4">
        <props.logo className="size-8" />
      </div>
      <h3 className="text-lg font-semibold">{props.name}</h3>
      <p className="">{props.description}</p>
    </div>
    <Link href={props.href} className="font-bold underline">
      Learn More
    </Link>
  </div>
);

export default HomeServicesSection;
