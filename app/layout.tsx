import type { Metadata } from "next";
import {
  Geist,
  Manrope,
  Space_Mono,
  Syne,
} from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sebastián Yopasá — Digital Product Designer & Developer",
  description:
    "Portfolio focused on UX/UI, web development, e-commerce and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${syne.variable} ${manrope.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}