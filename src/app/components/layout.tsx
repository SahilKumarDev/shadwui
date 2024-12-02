import BreadCrumb from "@/components/_components/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | Shadw ui",
  description:
    "A beautiful collection of components built with using Shadcn UI and TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BreadCrumb />
      <div className="px-5">{children}</div>
    </div>
  );
}
