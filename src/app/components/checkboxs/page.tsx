import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkboxs | Shadw ui",
  description:
    "A beautiful collection of checkbox components built with using Shadcn UI and TailwindCSS.",
};

const checkboxDir = "checkboxs";
const checkboxFiles = [
  "checkbox-01",
  "checkbox-02",
  "checkbox-03",
  "checkbox-04",
  "checkbox-05",
  "checkbox-06",
  "checkbox-07",
  "checkbox-08",
  "checkbox-09",
  "checkbox-10",
  "checkbox-11",
  "checkbox-12",
  "checkbox-13",
  "checkbox-14",
  "checkbox-15",
  "checkbox-16",
  // "checkbox-17",
  "checkbox-18",
];

const fileCount = [...checkboxFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Checkboxs"
      description={`A beautiful collection of ${fileCount} checkbox components built with using Shadcn UI and TailwindCSS.`}
    >
      {checkboxFiles.map((componentName) => {
        return (
          <ComponentPage
            className="grid-center"
            key={componentName}
            directory={checkboxDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
