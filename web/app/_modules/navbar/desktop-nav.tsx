import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationLink } from "./navbar";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

const DesktopNav = (props: { links: NavigationLink[] }) => (
  <>
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList className="gap-3">
        {props.links.map((link, index) => (
          <NavigationMenuItem key={index}>
            {link.children ? (
              <>
                <NavigationMenuTrigger className="text-lg font-medium">
                  {link.name}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid min-w-[800px] grid-cols-2 gap-4 p-1">
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
      className="flex flex-row items-start gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-neutral-100"
    >
      {props.logo && (
        <div
          className={`inline-flex items-center justify-center rounded-md p-2 ${props.logoClassName}`}
        >
          <props.logo className="size-10" />
        </div>
      )}
      <div>
        <h4 className="text-lg/tight font-semibold">{props.name}</h4>
        {props.description && (
          <p className="text-xs font-medium">{props.description}</p>
        )}
      </div>
    </Link>
  );
};

export default DesktopNav;
