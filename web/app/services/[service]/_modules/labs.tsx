import Container from "@/components/container";
import { Service } from "@/lib/helpers/services";
import Image from "next/image";

const ServiceLabsSection = (props: Service) => {
  return (
    <section className="bg-primary">
      <Container className="justify-between py-20 lg:flex-row lg:items-end">
        <div className="font-heading flex flex-col gap-8 font-bold text-white">
          <div className="relative mt-16">
            <h1 className="absolute bottom-0 left-0 text-8xl text-white/50 lg:text-9xl">
              CO2
            </h1>

            <h2 className="text-4xl lg:text-5xl">CO2 LABS</h2>
          </div>

          <div className="relative aspect-video overflow-clip rounded-lg bg-gradient-to-b from-white/10 to-transparent max-sm:w-full sm:h-60">
            <Image
              src={`/images/services/labs.png`}
              alt="CO2 Labs Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="mb-8 text-center text-lg font-medium text-white lg:text-end">
          {props.labs}
        </p>
      </Container>
    </section>
  );
};

export default ServiceLabsSection;
