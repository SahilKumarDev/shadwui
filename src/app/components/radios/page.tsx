import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radios | Shadw ui",
  description:
    "A beautiful collection of radio components built with using Shadcn UI and TailwindCSS.",
};

const radioDir = "radios";
const radioFiles = [
  "radio-01",
  "radio-02",
  "radio-03",
  "radio-04",
  "radio-05",
  "radio-06",
  "radio-07",
  "radio-08",
  "radio-09",
  "radio-10",
  "radio-11",
  "radio-12",
  "radio-13",
  "radio-14",
  "radio-15",
  "radio-16",
  "radio-17",
  "radio-18",
  "radio-19",
];

const fileCount = [...radioFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Radios"
      description={`A beautiful collection of ${fileCount} radio components built with using Shadcn UI and TailwindCSS.`}
    >
      {radioFiles.map((componentName) => {
        return (
          <ComponentPage
            className="gri-center"
            key={componentName}
            directory={radioDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
