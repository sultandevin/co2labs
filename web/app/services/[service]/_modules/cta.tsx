import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/helpers/services";
import { ArrowRight } from "lucide-react";

const ServiceCTASection = (props: Service) => {
  return (
    <Container className="lg:flex-row lg:items-center">
      <div className="flex gap-4 overflow-clip rounded-lg shadow-xl max-lg:flex-col">
        <div className="relative aspect-square w-full shrink-0 bg-neutral-200 lg:w-60"></div>

        <div className="space-y-4 p-6">
          <h1 className="text-3xl font-bold">We're Here for You</h1>

          <p className="mt-2 text-lg text-neutral-600">{props.cta.text}</p>

          <Button variant={`secondary`}>
            {props.cta.buttonText}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ServiceCTASection;
