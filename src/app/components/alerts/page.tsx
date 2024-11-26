import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - Origin UI",
  description:
    "A collection of beautiful and accessible input components built with Tailwind CSS and Next.js.",
};

const inputDir = "inputs";
const inputFiles = [
  // Add Components Name Line by line
  "input-01",
  "input-02",
  "input-02",
  "input-02",
  "input-02",
  "input-02",
];

const file = [...inputFiles];

export default function Page() {
  return (
    <GridPageLayout heading="Alerts" description="All description are here">
      {inputFiles.map((componentName) => {
        return (
          <ComponentPage
            key={componentName}
            directory={inputDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
