import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - composts ui",
  description:
    "A collection of beautiful and accessible checkbox components built with Tailwind CSS and Next.js.",
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

const fileCount = [...checkboxFiles];

export default function Page() {
  return (
    <GridPageLayout
      heading="Inputs"
      description={`All description are here ${fileCount.length}`}
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
