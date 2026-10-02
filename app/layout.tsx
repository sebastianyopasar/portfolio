import type {
  Metadata,
} from "next";

import {
  Geist,
  Manrope,
  Space_Mono,
  Syne,
} from "next/font/google";

import "./globals.css";

const geist = Geist({
  variable:
    "--font-geist",

  subsets: ["latin"],
});

const syne = Syne({
  variable:
    "--font-syne",

  subsets: ["latin"],
});

const manrope =
  Manrope({
    variable:
      "--font-manrope",

    subsets: ["latin"],
  });

const spaceMono =
  Space_Mono({
    variable:
      "--font-space-mono",

    subsets: ["latin"],

    weight: [
      "400",
      "700",
    ],
  });

export const metadata:
  Metadata = {
  title:
    "Sebastián Yopasá — UX/UI Designer & Developer",

  description:
    "UX/UI designer who also builds. Portfolio exploring interface design, web development, e-commerce and immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
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