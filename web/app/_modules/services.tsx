"use client";
import Container from "@/components/container";
import * as m from "@/components/motion";
import {
  Code,
  Diamond,
  GitGraph,
  LucideIcon,
  SlidersHorizontal,
} from "lucide-react";
import { Variants } from "motion";
import Link from "next/link";

const CONTENT = [
  {
    logo: SlidersHorizontal,
    name: "Website Maintenance",
    href: "/services/web-main",
    description:
      "Keep your website running smoothly and securely with our comprehensive maintenance services. Prevent downtime,..",
  },
  {
    logo: Code,
    name: "Website & App Development",
    href: "/services/web-dev",
    description:
      "Transform your online presence with our custom website design solutions. From stunning visuals to seamless..",
  },
  {
    logo: GitGraph,
    name: "IT Support",
    href: "/services/it-support",
    description:
      "Experience peace of mind with our reliable IT support services. From troubleshooting to server maintenance..",
  },
  {
    logo: Diamond,
    name: "3rd Party AI Solution",
    href: "/services/ai-solution",
    description:
      "Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provide..",
  },
];

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const HomeServicesSection = () => {
  return (
    <section className="bg-primary">
      <Container className="max-w-[1500px] items-center gap-12 py-20">
        <h1 className="font-heading w-full text-5xl font-semibold text-white max-lg:text-center">
          Our Services
        </h1>
        <div className="flex w-full flex-wrap justify-center gap-4 lg:grid lg:grid-cols-4">
          {CONTENT.map((item, idx) => (
            <Card key={item.name} idx={idx} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Card = (props: {
  idx: number;
  name: string;
  description: string;
  href: string;
  logo: LucideIcon;
}) => (
  <m.div
    variants={itemVariants}
    custom={props.idx}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex h-96 w-72 flex-col items-center justify-between gap-6 rounded-xl bg-white p-4 text-center lg:w-full"
  >
    <div className="mt-4 flex flex-col items-center gap-5">
      <div className="bg-accent relative rounded-full p-4">
        <props.logo className="text-primary size-10" />
      </div>

      <h3 className="text-xl font-semibold">{props.name}</h3>

      <p className="text-medium line-clamp-4 font-medium">
        {props.description}
      </p>
    </div>
    <Link
      href={props.href}
      className="font-semibold underline transition-colors hover:text-blue-900"
    >
      View More
    </Link>
  </m.div>
);

export default HomeServicesSection;
