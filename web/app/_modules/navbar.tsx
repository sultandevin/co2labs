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
import { Code, Diamond, GitGraph, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

const NAV_LINKS = [
  {
    name: "Our Services",
    children: [
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
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Portofolio", href: "/portofolio" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed flex h-20 w-screen items-center bg-white shadow-md">
      <Container className="flex-row items-center justify-between py-0">
        <Link href={`/`}>
          <Image src={`/images/logo.png`} alt="Logo" width={50} height={50} />
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {NAV_LINKS.map((link, index) => (
              <NavigationMenuItem key={index}>
                {link.children ? (
                  <>
                    <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid min-w-[600px] grid-cols-2 gap-4">
                        {link.children.map((child, childIndex) => (
                          <NavigationMenuLink key={childIndex} asChild>
                            <ListLinkItem {...child} />
                          </NavigationMenuLink>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink href={link.href}>
                    {link.name}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button>Get Started Today!</Button>
      </Container>
    </nav>
  );
};

const ListLinkItem = (props: {
  name: string;
  href: string;
  description?: string;
  logo?: LucideIcon;
}) => {
  return (
    <Link href={props.href} className="flex flex-row items-center gap-2">
      {props.logo && (
        <div className="inline-flex items-center justify-center rounded-md bg-neutral-200 p-2">
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

export default Navbar;
