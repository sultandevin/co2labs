import { Inter, Orbitron } from "next/font/google";

const heading = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export { body, heading };
