import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { QueryProvider } from "../providers/query-provider";

import { Fraunces } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});


export const metadata: Metadata = {
  title: "Bookworm",
  description: "Track your reading journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${geist.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
