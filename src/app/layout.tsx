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
        <div
          className="
            overflow-clip inset-0 -z-10 h-full w-full bg-transparent bg-[size:14px_24px]
            bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
          "
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
        </div>
        <Toaster />
      </body>
    </html>
  );
}
