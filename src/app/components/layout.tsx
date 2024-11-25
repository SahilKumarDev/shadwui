import BreadCrumb from "@/components/_components/BreadCrumb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BreadCrumb />

      {children}
    </div>
  );
}
