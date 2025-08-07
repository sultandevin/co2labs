import Container from "@/components/container";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";

const BUTTONS = [
  {
    icon: MapPin,
    href: "https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A",
  },
  {
    icon: Mail,
    href: "https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A",
  },
  {
    icon: Phone,
    href: "https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A",
  },
];

const HomeContactSection = () => {
  return (
    <Container className="items-center py-24">
      <div className="flex w-full items-center justify-between gap-8">
        <h1 className="font-heading text-5xl font-semibold">Contact Us</h1>

        <div className="flex gap-6">
          {BUTTONS.map((button, i) => (
            <a
              key={i}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <button.icon className="size-12" />
            </a>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <ContactForm />

        <div className="relative rounded-lg shadow-lg"></div>
      </div>
    </Container>
  );
};

export default HomeContactSection;
