import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Map, MessageCircle } from "lucide-react";
import Link from "next/link";

const SERVICE_LINKS = [
  {
    name: "Web Maintenance",
    href: "/services/web-main",
  },
  {
    name: "Web & App Development",
    href: "/services/web-dev",
  },
  {
    name: "IT Service",
    href: "/services/it-support",
  },
  {
    name: "AI Solution",
    href: "/services/ai-solution",
  },
];

const ABOUT_LINKS = [
  {
    name: "Our Approach",
    href: "/#",
  },
  {
    name: "Our Team",
    href: "/#",
  },
  {
    name: "Our Portofolio",
    href: "/#",
  },
];

const SOCIAL_LINKS = [
  {
    icon: MessageCircle,
    name: "+65 8118 1595",
    href: "https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0",
  },
  {
    icon: Mail,
    name: "info@co2labs.com",
    href: "https://twitter.com",
  },
  {
    icon: Map,
    name: "100D Pasir Panjang School",
    href: "https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A",
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container className="">
        <section className="flex justify-between gap-8 max-lg:flex-col">
          <div className="flex flex-col justify-between gap-4">
            <h1 className="text-2xl font-black">
              Let's Grow Together with CO2 Labs
            </h1>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">
                Get Exclusive Update From Us
              </h3>
              <div className="flex overflow-clip rounded-full">
                <Input
                  placeholder="youremail@example.com"
                  className="rounded-l-full rounded-r-none bg-white text-black"
                />
                <Button className="h-12 rounded-l-none rounded-r-full bg-yellow-300 text-base text-black hover:bg-yellow-300/80">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="flex max-w-[40%] flex-wrap gap-6">
            <div>
              <h3 className="text-lg font-medium">Services</h3>
              <ul className="text-muted-foreground list-disc pl-6">
                {SERVICE_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="hover:text-muted-foreground/80 flex items-center transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">About</h3>
              <ul className="text-muted-foreground list-disc pl-6">
                {ABOUT_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="hover:text-muted-foreground/80 flex items-center transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">Contact</h3>
              <ul className="text-muted-foreground list-disc pl-6">
                {SOCIAL_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="hover:text-muted-foreground/80 flex items-center transition-colors hover:underline"
                    >
                      <link.icon className="mr-2 inline size-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="text-muted-foreground mt-6 flex justify-between text-sm">
          <h5 className="">© 2024 CO2 Labs. All rights reserved.</h5>

          <div className="flex gap-2">
            <Link href={`/faq`} className="hover:underline">
              FAQ
            </Link>
            <Link href={`/privacy-policy`} className="hover:underline">
              Terms & Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
