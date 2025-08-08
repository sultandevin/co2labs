import { SERVICES } from "@/lib/helpers/services";
import { notFound } from "next/navigation";
import ServiceHeroSection from "./_modules/hero";
import ServiceLabsSection from "./_modules/labs";
import ServiceAdvantageSection from "./_modules/advantages";
import ServiceCTASection from "./_modules/cta";

export const generateStaticParams = () => {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ service: string }>;
}) => {
  const { service: serviceSlug } = await params;

  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service)
    return {
      title: "Service Not Found | CO2 Labs",
      description: "The requested service could not be found.",
    };

  return {
    title: `${service.title} | CO2 Labs`,
    description: service.tagline,
  };
};

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
