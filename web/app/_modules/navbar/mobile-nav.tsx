"use client";
import * as m from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavigationLink } from "./navbar";
import { usePathname } from "next/navigation";

const MobileNav = (props: { links: NavigationLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size={`icon`}
        variant={`ghost`}
        className="size-12 lg:hidden"
      >
        <Menu className="size-8" strokeWidth={3} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-60 overflow-clip bg-black/50 lg:hidden"
              style={{ overflow: "hidden" }}
            />

            <m.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, type: "tween", ease: "easeOut" }}
              className="fixed top-0 left-0 z-70 flex h-screen w-80 flex-col gap-4 overflow-y-auto bg-white p-4 shadow-lg lg:hidden"
            >
              <Button
                onClick={() => setIsOpen(false)}
                size={`icon`}
                variant={`ghost`}
                className="size-12"
              >
                <X className="size-8" />
              </Button>

              {props.links.map((link, index) => (
                <ListItem key={index} {...link} />
              ))}

              <Button size={`lg`} asChild className="mt-4">
                <Link
                  href={`https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get Started Today!
                </Link>
              </Button>
            </m.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const ListItem = (props: NavigationLink) => (
  <>
    <Button
      asChild={!!props.href}
      variant={`accent`}
      size={`lg`}
      className={`w-full justify-start text-left ${!props.href && "hover:cursor-default"}`}
    >
      {props.href ? (
        <Link href={props.href}>{props.name}</Link>
      ) : (
        <>{props.name}</>
      )}
    </Button>

    {props.children && (
      <ul className="list-disc pl-6">
        {props.children.map((child, i) => (
          <li key={i}>
            <Button asChild variant={`link`}>
              <Link href={child.href}>{child.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    )}
  </>
);

export default MobileNav;
