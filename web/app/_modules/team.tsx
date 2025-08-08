import Container from "@/components/container";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Jay Chen",
    src: "jay-chen.jpeg",
    position: "CEO",
    biography:
      "Jay began his career in the banking and finance sector, where he honed his skills and developed a deep understanding of the industry. Leveraging this foundation, he expanded into HR operations and outsourcing, successfully growing his businesses by delivering exceptional service to renowned international brands like Huawei, Coca-Cola, and GlaxoSmithKline. CO2 Labs provides a solutions based approach to champion human resource and outsourcing through strategic consultation and meticulously planned placements.",
  },
  {
    name: "Alune",
    src: "alune.jpeg",
    position: "Development Project Manager",
    biography:
      "With a background in IT software development, quality testing and web design, she brings a deep understanding of the technical and strategic aspects of project management. Known for her meticulous planning, effective communication, and ability to navigate challenges, she has consistently delivered high-quality software solutions on time and within budget. Alune excels at fostering collaboration across cross-functional teams, ensuring that projects align with client objectives and business goals. Her dedication to excellence and passion for innovation make her a driving force behind the success of every project she leads.",
  },
  {
    name: "Ron",
    src: "ron.jpeg",
    position: "Business Development Lead",
    biography:
      "With a strong background in business development for finance, logistics and real estate industries, Ron has successfully led initiatives that have expanded market reach and increased revenue for both emerging and established companies. Known for his ability to identify new opportunities and forge lasting relationships, Ron excels in creating tailored solutions that meet client needs and align with business goals through thoughtful solutioning.",
  },
];

const HomeTeamSection = () => {
  return (
    <Container className="mt-30 gap-18 py-20">
      <h1 className="font-heading text-5xl font-semibold">Our Team</h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member, i) => (
          <ProfileCard key={i} {...member} />
        ))}
      </div>
    </Container>
  );
};

const ProfileCard = (props: (typeof TEAM_MEMBERS)[number]) => (
  <div className="relative flex flex-col items-center gap-1 rounded-xl bg-white p-6 text-center transition-all lg:mt-20 lg:pt-24 lg:shadow-xl lg:hover:scale-110 hover:lg:shadow-2xl">
    <div className="-top-20 lg:absolute">
      <div className="relative size-40 overflow-clip rounded-full bg-neutral-200 shadow-lg">
        <Image
          src={`/images/home/team/${props.src}`}
          alt={`${props.name}'s profile picture`}
          fill
          sizes="50%"
          className="object-cover"
        />
      </div>
    </div>

    <h3 className="text-2xl font-bold">{props.name}</h3>

    <h4 className="text-base font-semibold">{props.position}</h4>

    <p className="mt-1 text-xs font-medium italic max-lg:max-w-lg">
      {props.biography}
    </p>
  </div>
);

export default HomeTeamSection;
