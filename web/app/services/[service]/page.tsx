const ServiceBySlugPage = async ({
  params,
}: {
  params: Promise<{ service: string }>;
}) => {
  const { service } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>Service Details for {service}</h1>
    </div>
  );
};

export default ServiceBySlugPage;
