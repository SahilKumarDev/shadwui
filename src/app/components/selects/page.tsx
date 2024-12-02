import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select | Shadw ui",
  description:
    "A beautiful collection of select components built with using Shadcn UI and TailwindCSS.",
};

const selectDir = "selects";
const selectFiles = [
  "select-01",
  "select-02",
  "select-03",
  "select-04",
  "select-05",
  "select-06",
  "select-07",
  "select-08",
  "select-09",
  "select-10",
  "select-11",
  "select-12",
  "select-13",
];

const fileCount = [...selectFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Selects"
      description={`A beautiful collection of ${fileCount} select components built with using Shadcn UI and TailwindCSS.`}
    >
      {selectFiles.map((componentName) => {
        return (
          <ComponentPage
            className="grid-center"
            key={componentName}
            directory={selectDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
