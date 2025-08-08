import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomeHeroSection = () => {
  return (
    <>
      <div className="h-20" />

      <Container className="relative min-h-[calc(100vh-5rem)] flex-col-reverse justify-center lg:flex-row lg:items-center lg:justify-between">
        <div className="z-20 flex max-w-md flex-col gap-4">
          <h1 className="font-heading text-4xl/tight font-bold lg:text-5xl/tight">
            Where Code Meets{" "}
            <span className="bg-primary text-background px-4">Creativity</span>
          </h1>

          <p className="text-lg font-medium">
            Harnessing the power of our Coding Collective to build solutions for
            your business needs.
          </p>

          <Button size={`lg`} transition={`scale`} className="w-fit" asChild>
            <Link
              href="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get a free consult
            </Link>
          </Button>
        </div>

        <div className="relative z-10 aspect-video h-35 overflow-clip rounded-lg max-lg:ml-auto lg:h-50">
          <Image
            src={`/images/home/hero.png`}
            alt="Hero Image"
            sizes="100%"
            fill
            className="object-cover"
          />
        </div>

        <Image
          src={`/images/backdrop.png`}
          alt="Hero Background"
          width={250}
          height={250}
          className="absolute right-0 z-0 max-lg:top-0"
        />
      </Container>
    </>
  );
};

export default HomeHeroSection;
