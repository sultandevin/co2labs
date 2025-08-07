import Container from "@/components/container";
import Image from "next/image";

const HomeAboutSection = () => {
  return (
    <Container className="flex-row items-center justify-center gap-12">
      <div className="max-w-md space-y-4 text-end">
        <h1 className="font-heading text-5xl font-semibold">About Us</h1>
        <p>
          At CO2 Labs, we strive to provide simple yet powerful software
          solutions and expert consultation to help your business thrive in the
          digital world.
        </p>
      </div>
      <div className="relative aspect-video h-60 overflow-clip rounded-lg">
        <Image
          src={`/images/home/about.jpeg`}
          alt="About Image"
          fill
          className="object-cover"
        />
      </div>
    </Container>
  );
};

export default HomeAboutSection;
