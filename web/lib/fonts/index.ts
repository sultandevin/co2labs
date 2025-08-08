import { Orbitron } from "next/font/google";
import localFont from "next/font/local";

const heading = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = localFont({
  src: "./general-sans.woff2",
  variable: "--font-body",
  style: "normal",
});

export { body, heading };
