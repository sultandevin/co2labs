import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/helpers/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ServiceCTASection = (props: Service) => {
  return (
    <Container className="pt-20 pb-60 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
      <div className="h-96 w-4 shrink-0 bg-red-100 max-lg:hidden" />

      <div className="flex gap-4 overflow-clip rounded-lg shadow-xl max-lg:flex-col lg:items-center">
        <div className="relative aspect-square w-full shrink-0 bg-neutral-200 lg:size-96">
          <Image
            src={`/images/services/cta.png`}
            alt={props.title}
            sizes="100%"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4 p-6">
          <h1 className="text-3xl font-bold">We&apos;re Here for You</h1>

          <p className="mt-2 text-lg text-neutral-600">{props.cta.text}</p>

          <Button variant={`secondary`} className="group">
            {props.cta.buttonText}
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ServiceCTASection;
