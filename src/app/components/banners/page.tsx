import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - composts ui",
  description:
    "A collection of beautiful and accessible banner components built with Tailwind CSS and Next.js.",
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

const fileCount = [...bannerFiles];

export default function Page() {
  return (
    <GridPageLayout
      heading="Banner"
      description={`All description are here ${fileCount.length}`}
    >
      {bannerFiles.map((componentName) => {
        return (
          <ComponentPage
            key={componentName}
            directory={bannerDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
