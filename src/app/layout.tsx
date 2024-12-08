import { CustomSelector } from "@/components/_components/CustomSelector";
import { ThemeProvider } from "@/components/_components/theam-provider";
import MaxWidthWrapper from "@/components/_components/MaxWidthWrapper";
import Header from "@/components/_components/Header";
import Footer from "@/components/_components/Footer";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const orbitMax = localFont({
  src: "./fonts/OrbitMaxenceDuterneVF.woff",
  variable: "--font-orbit-max",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home | Shadw ui",
  description:
    "A beautiful huge collection of components built with using Shadcn UI and TailwindCSS.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitMax.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <MaxWidthWrapper>
            <CustomSelector>
              <Header />
              {children}
              <Analytics />
              <Footer />
            </CustomSelector>
          </MaxWidthWrapper>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
