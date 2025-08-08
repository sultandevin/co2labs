"use client";
import Container from "@/components/container";
import { ChevronDown } from "lucide-react";

const CONTENT = [
  {
    name: "Assessment",
    subtitle: "& Insight Gathering",
    description: (
      <>
        <p>
          Our process begins with an initial consultation to gather insights
          into your business needs and challenges. We work closely with your
          team to understand your objectives and gather all necessary
          information.
        </p>
        <ul className="list-disc pl-6">
          <li>Initial consultation meetings</li>
          <li>Gathering business and technical requirements</li>
          <li>Conducting stakeholder interviews</li>
          <li>Understanding long-term business goals</li>
        </ul>
      </>
    ),
  },
  {
    name: "Customization",
    subtitle: "& Strategic Planning",
    description: (
      <>
        <p>
          We then develop a strategic plan and design tailored solutions that
          address your specific needs. This involves detailed planning, resource
          allocation, and design of bespoke solutions that align with your
          goals.
        </p>
        <ul className="list-disc pl-6">
          <li> Strategic planning sessions</li>
          <li> Solution design and prototyping</li>
          <li> Resource and timeline planning</li>
          <li> Risk assessment and mitigation planning</li>
        </ul>
      </>
    ),
  },
  {
    name: "Execution",
    subtitle: "& Lifecycle Management",
    description: (
      <>
        <p>
          We execute the strategic plan and manage the entire solution
          lifecycle, from implementation to optimization. This ensures the
          solutions are effectively integrated and continuously deliver value.
        </p>

        <ul className="list-disc pl-6">
          <li>Implementation of the strategic plan</li>
          <li>Solution deployment and integration</li>
          <li>Lifecycle management and support</li>
          <li>Continuous performance evaluation and optimization</li>
        </ul>
      </>
    ),
  },
];

const HomeACESection = () => {
  return (
    <section>
      <Container className="items-center gap-12 pt-20">
        <div className="space-y-2 text-center">
          <h1 className="font-heading text-5xl font-semibold">ACE</h1>

          <p className="font-semibold">Methodology for Strategic Consulting</p>
        </div>
      </Container>

      <section className="grid min-h-130 grid-cols-1 lg:grid-cols-3">
        {CONTENT.map((item, i) => (
          <Card key={item.name} idx={i} {...item} />
        ))}
      </section>
    </section>
  );
};

const Card = (props: {
  idx: number;
  name: string;
  subtitle: string;
  description: string | React.ReactNode;
}) => {
  return (
    <div
      className={`group h-fit overflow-clip p-8 ${props.idx % 2 === 0 ? "bg-pink-100" : "bg-green-100"}`}
    >
      <h1 className="text-3xl font-black">{props.name}</h1>

      <h2 className="text-xl">{props.subtitle}</h2>

      <div className="max-h-0 overflow-hidden pt-4 transition-all duration-300 ease-out group-hover:max-h-64">
        {props.description}
      </div>

      <ChevronDown
        className={`${props.idx % 2 === 0 ? "text-muted-foreground" : "text-neutral-300"} mx-auto mt-8 size-8 transition-transform group-hover:rotate-180`}
      />
    </div>
  );
};

export default HomeACESection;
