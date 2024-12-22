import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headings | Shadw ui",
  description:
    "A beautiful collection of headings components built with using TailwindCSS.",
};

const headingDir = "headings";
const headingFiles = [
  "heading-01",
  "heading-02",
  "heading-03",
  "heading-04",
  "heading-05",
  "heading-06",
  "heading-07",
  "heading-08",
  "heading-09",
  "heading-10",
  "heading-11",
  "heading-12",
];

const fileCount = [...headingFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Headings"
      description={`A beautiful collection of ${fileCount} headings components built with using TailwindCSS.`}
    >
      {headingFiles.map((componentName) => {
        return (
          <ComponentPage
            key={componentName}
            directory={headingDir}
            className="grid-center"
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
