import Container from "@/components/container";
import { MotionDiv, MotionP } from "@/components/motion";
import { Service } from "@/lib/helpers/services";
import Image from "next/image";

const ServiceLabsSection = (props: Service) => {
  return (
    <section className="bg-primary">
      <Container className="justify-between py-20 lg:flex-row lg:items-end">
        <div className="font-heading flex flex-col gap-8 font-bold text-white">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-16"
          >
            <h1 className="absolute bottom-0 left-0 text-8xl text-white/50 lg:text-9xl">
              CO2
            </h1>

            <h2 className="text-4xl lg:text-5xl">CO2 LABS</h2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video overflow-clip rounded-lg bg-gradient-to-b from-white/10 to-transparent max-sm:w-full sm:h-60"
          >
            <Image
              src={`/images/services/labs.png`}
              alt="CO2 Labs Hero Image"
              sizes="100%"
              fill
              className="object-contain"
            />
          </MotionDiv>
        </div>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-center text-lg font-medium text-white lg:text-end"
        >
          {props.labs}
        </MotionP>
      </Container>
    </section>
  );
};

export default ServiceLabsSection;
