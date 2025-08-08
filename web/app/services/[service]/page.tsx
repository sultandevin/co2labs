import { SERVICES } from "@/lib/helpers/services";
import { notFound } from "next/navigation";
import ServiceHeroSection from "./_modules/hero";
import ServiceLabsSection from "./_modules/labs";
import ServiceAdvantageSection from "./_modules/advantages";
import ServiceCTASection from "./_modules/cta";

const ServiceBySlugPage = async ({
  params,
}: {
  params: Promise<{ service: string }>;
}) => {
  const { service: serviceSlug } = await params;

  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) notFound();

  return (
    <>
      <ServiceHeroSection {...service} />
      <ServiceLabsSection {...service} />
      <ServiceAdvantageSection {...service} />
      <ServiceCTASection {...service} />
    </>
  );
};

export default ServiceBySlugPage;
