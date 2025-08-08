"use client";
import Container from "@/components/container";
import { cn } from "@/lib/utils";
import { Code, Diamond, GitGraph, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export type NavigationLink = (typeof NAV_LINKS)[number];

const NAV_LINKS = [
  {
    name: "Our Services",
    children: [
      {
        logo: SlidersHorizontal,
        logoClassName: "text-red-300 bg-red-100",
        name: "Website Maintenance",
        href: "/services/web-main",
        description: "Keep your website running smoothly and securely",
      },
      {
        logo: Code,
        logoClassName: "text-yellow-300 bg-yellow-100",
        name: "Website & App Development",
        href: "/services/web-dev",
        description:
          "Transform your online presence with our custom platform design solutions",
      },
      {
        logo: GitGraph,
        logoClassName: "text-green-300 bg-green-100",
        name: "IT Support",
        href: "/services/it-support",
        description:
          "Experience peace of mind with our reliable IT support services",
      },
      {
        logo: Diamond,
        logoClassName: "text-blue-300 bg-blue-100",
        name: "3rd Party AI Solution",
        href: "/services/ai-solution",
        description:
          "Leverage our expertise to find the best third-party services for your business",
      },
    ],
  },
  { name: "About Us", href: "/#about" },
  { name: "Portofolio", href: "/#portofolio" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `bg-background fixed z-50 flex h-20 w-screen items-center transition-shadow duration-300`,
        isScrolled && "shadow-lg",
      )}
    >
      <Container className="flex-row items-center justify-between py-0">
        <Link href={`/`}>
          <Image src={`/images/logo.png`} alt="Logo" width={60} height={60} />
        </Link>

        <DesktopNav links={NAV_LINKS} />
        <MobileNav links={NAV_LINKS} />
      </Container>
    </nav>
  );
};

export default Navbar;
