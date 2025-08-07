import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomeHeroSection = () => {
  return (
    <Container className="min-h-screen justify-center">
      <section className="flex items-center justify-between">
        <div className="flex max-w-md flex-col gap-2">
          <h1 className="font-heading text-5xl/tight font-semibold">
            Where Code Meets{" "}
            <span className="bg-primary text-background px-4">Creativity</span>
          </h1>

          <p>
            Harnessing the power of our Coding Collective to build solutions for
            your business needs.
          </p>

          <Button className="w-fit" asChild>
            <Link href="/">Get a free consult</Link>
          </Button>
        </div>

        <div className="relative aspect-video h-50 overflow-clip rounded-lg">
          <Image
            src={`/images/home/hero.png`}
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </Container>
  );
};

export default HomeHeroSection;
