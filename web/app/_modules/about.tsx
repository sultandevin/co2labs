import Container from "@/components/container";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HomeAboutSection = () => {
  return (
    <Container className="items-center justify-center gap-12 lg:flex-row">
      <div className="max-w-md space-y-4 lg:text-end">
        <h1 className="font-heading text-5xl font-semibold">About Us</h1>

        <p>
          At CO2 Labs, we strive to provide simple yet powerful software
          solutions and expert consultation to help your business thrive in the
          digital world.
        </p>

        <Line />
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

const Line = (props: { className?: string }) => (
  <svg
    className={cn("w-full xl:w-[600px]", props.className)}
    height="81"
    viewBox="0 0 710 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10"
      stroke="#EDEAE3"
      strokeWidth="20"
      strokeLinecap="round"
    ></path>
  </svg>
);

export default HomeAboutSection;
