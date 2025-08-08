"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Code,
  Diamond,
  GitGraph,
  LucideIcon,
  Menu,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        `fixed z-50 flex h-20 w-screen items-center bg-white transition-shadow duration-300`,
        isScrolled && "shadow-lg",
      )}
    >
      <Container className="flex-row items-center justify-between py-0">
        <Link href={`/`}>
          <Image src={`/images/logo.png`} alt="Logo" width={60} height={60} />
        </Link>

        <DesktopNav />
        <MobileNav />
      </Container>
    </nav>
  );
};

const DesktopNav = () => (
  <>
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList className="gap-3">
        {NAV_LINKS.map((link, index) => (
          <NavigationMenuItem key={index}>
            {link.children ? (
              <>
                <NavigationMenuTrigger className="text-lg font-medium">
                  {link.name}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid min-w-[600px] grid-cols-2 gap-4 p-1">
                    {link.children.map((child, childIndex) => (
                      <NavigationMenuLink key={childIndex} asChild>
                        <ListLinkItem {...child} />
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={link.href}
                className="text-lg font-medium"
              >
                {link.name}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>

    <Button
      transition={`scale`}
      size={`lg`}
      asChild
      className="hidden lg:inline-flex"
    >
      <Link
        href={`https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Get Started Today!
      </Link>
    </Button>
  </>
);

const ListLinkItem = (props: {
  name: string;
  href: string;
  description?: string;
  logo?: LucideIcon;
  logoClassName?: string;
}) => {
  return (
    <Link
      href={props.href}
      className="flex flex-row items-center gap-2 rounded-lg px-2 py-1 transition-colors hover:bg-neutral-100"
    >
      {props.logo && (
        <div
          className={`inline-flex items-center justify-center rounded-md p-2 ${props.logoClassName}`}
        >
          <props.logo className="size-6" />
        </div>
      )}
      <div>
        <h4 className="font-semibold">{props.name}</h4>
        {props.description && <p className="text-xs">{props.description}</p>}
      </div>
    </Link>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button size={`icon`} variant={`ghost`} className="size-12 lg:hidden">
        <Menu className="size-8" strokeWidth={3} />
      </Button>
    </>
  );
};

export default Navbar;
