import Container from "@/components/container";
import { Service } from "@/lib/helpers/services";

const ServiceAdvantageSection = (props: Service) => {
  return (
    <Container className="grid grid-cols-1 py-20 max-lg:gap-12 lg:grid-cols-2">
      <h1 className="font-heading text-4xl font-semibold">OUR ADVANTAGES</h1>

      <div className="flex flex-col gap-5">
        {props.advantages.map((advantage, index) => (
          <ListItem key={index} {...advantage} />
        ))}
      </div>
    </Container>
  );
};

const ListItem = (props: Service["advantages"][number]) => {
  return (
    <div className="space-y-3">
      <h2 className="flex items-center gap-4 text-3xl font-black">
        <div className="size-6 rounded-full bg-neutral-200" />

        {props.title}
      </h2>

      <div className="flex gap-4">
        <div className="mx-3 border-l-2 border-neutral-200" />

        <div className="rounded-lg p-4 shadow-lg">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvantageSection;
