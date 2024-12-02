import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banners | Shadw ui",
  description:
    "A beautiful collection of banner components built with using Shadcn UI and TailwindCSS.",
};
const bannerDir = "banners";
const bannerFiles = [
  "banner-01",
  "banner-02",
  "banner-03",
  "banner-04",
  "banner-05",
  "banner-06",
  "banner-07",
  "banner-08",
  "banner-09",
  "banner-10",
  "banner-11",
  "banner-12",
  "banner-13",
  "banner-14",
  "banner-15",
];

const fileCount = [...bannerFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Banners"
      description={`A beautiful collection of ${fileCount} banner components built with using Shadcn UI and TailwindCSS.`}
    >
      {bannerFiles.map((componentName) => {
        return (
          <ComponentPage
          className="grid-center"
            key={componentName}
            directory={bannerDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
