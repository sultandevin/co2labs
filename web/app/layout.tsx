import type { Metadata } from "next";
import "./globals.css";
import { body, heading } from "@/lib/fonts";
import Navbar from "./_modules/navbar";
import Footer from "./_modules/footer";

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
      <body className={`${body.className} ${heading.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
