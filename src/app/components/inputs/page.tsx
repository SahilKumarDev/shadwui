import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inputs | Shadw ui",
  description:
    "A beautiful collection of inputs components built with using Shadcn UI and TailwindCSS.",
};

const inputDir = "inputs";
const inputFiles = [
  "input-01",
  "input-02",
  "input-03",
  "input-04",
  "input-05",
  "input-06",
  "input-07",
  "input-08",
  "input-09",
  "input-10",
  "input-11",
  "input-12",
  "input-13",
  "input-14",
  "input-15",
  "input-16",
  "input-17",
  "input-18",
  "input-19",
  "input-20",
  "input-21",
  "input-22",
  "input-23",
  "input-24",
  "input-25",
  "input-26",
  "input-27",
  "input-28",
  "input-29",
  "input-30",
  "input-31",
  "input-32",
  "input-33",
  "input-34",
  "input-35",
  "input-36",
  "input-37",
  "input-38",
  "input-39",
  "input-40",
  "input-41",
  "input-42",
  "input-43",
  "input-44",
  "input-45",
  "input-46",
  "input-47",
  "input-48",
  "input-49",
  "input-50",
  "input-51",
  "input-52",
  "input-53",
  "input-54",
  "input-55",
  "input-56",
  "input-57",
];

const fileCount = [...inputFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Inputs"
      description={`A beautiful collection of ${fileCount} inputs components built with using Shadcn UI and TailwindCSS.`}
    >
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
