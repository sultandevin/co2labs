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
    <Container className="relative items-center gap-20 py-24">
      <div className="flex w-full flex-wrap items-center justify-between gap-8">
        <h1 className="font-heading text-5xl font-semibold">Contact Us</h1>

        <div className="flex gap-6">
          {BUTTONS.map((button, i) => (
            <a
              key={i}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black/60"
            >
              <button.icon className="size-12" />
            </a>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <ContactForm />

        <div className="relative rounded-lg shadow-lg max-lg:h-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.4142722416323!2d103.795968!3d1.276258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2sus!4v1754584992988!5m2!1sen!2sus"
            className="absolute inset-0 h-full w-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div id="contact" className="absolute -top-20" />
    </Container>
  );
};

export default HomeContactSection;
