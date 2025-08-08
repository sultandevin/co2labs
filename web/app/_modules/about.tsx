import Container from "@/components/container";
import { MotionDiv, MotionH1, MotionP, MotionSVG } from "@/components/motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HomeAboutSection = () => {
  return (
    <Container className="relative items-center justify-center gap-12 lg:flex-row">
      <div className="max-w-md space-y-4 lg:text-end">
        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-5xl font-semibold"
        >
          About Us
        </MotionH1>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          At CO2 Labs, we strive to provide simple yet powerful software
          solutions and expert consultation to help your business thrive in the
          digital world.
        </MotionP>

        <Line />
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-video h-auto overflow-clip rounded-lg max-sm:w-full sm:h-60"
      >
        <Image
          src={`/images/home/about.jpeg`}
          alt="About Image"
          sizes="100%"
          fill
          className="object-cover"
        />
      </MotionDiv>

      <div id="about" className="absolute -top-40" />
    </Container>
  );
};

const Line = (props: { className?: string }) => (
  <MotionSVG
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={cn("w-full max-w-[600px]", props.className)}
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
  </MotionSVG>
);

export default HomeAboutSection;
