import Container from "@/components/container";
import * as m from "@/components/motion";
import { Service } from "@/lib/helpers/services";
import Image from "next/image";

const ServiceHeroSection = (props: Service) => {
  return (
    <>
      <div className="h-20" />

      <Container className="relative min-h-[calc(100vh-5rem)] flex-col-reverse justify-center lg:flex-row lg:items-center lg:justify-between">
        <m.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-20 flex max-w-xl flex-col gap-4"
        >
          <h1 className="font-heading z-10 text-4xl/tight font-bold lg:text-5xl/tight">
            {props.title}
          </h1>

          <p className="z-10 text-xl font-medium">
            &quot;{props.tagline}&quot;
          </p>

          <div className="z-10 w-45 border-t-4 border-black" />

          <div className="absolute -top-12 -left-12">
            <Image
              src={`/images/services/quote.png`}
              alt="Quote"
              width={100}
              height={100}
              className="z-0"
            />
          </div>
        </m.div>

        <m.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 aspect-video h-35 overflow-clip rounded-lg shadow-lg max-lg:ml-auto lg:h-50"
        >
          <Image
            src={`/images/home/hero.png`}
            alt="Hero Image"
            sizes="100%"
            fill
            className="object-cover"
          />
        </m.div>

        <Image
          src={`/images/backdrop.png`}
          alt="Hero Background"
          width={250}
          height={250}
          className="absolute right-0 z-0 max-lg:top-0"
        />
      </Container>
    </>
  );
};

export default ServiceHeroSection;
