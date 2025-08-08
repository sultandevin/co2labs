import { body, heading } from "@/lib/fonts";
import type { Metadata } from "next";
import Footer from "./_modules/footer";
import Navbar from "./_modules/navbar/navbar";
import "./globals.css";
import { MotionProvider } from "@/components/motion";

export const metadata: Metadata = {
  title: "CO2 Labs ",
  description: "Tugas untuk pendaftaran internship Coding House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${body.className} ${body.variable} bg-background ${heading.variable} antialiased`}
      >
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
