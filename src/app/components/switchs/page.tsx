import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Switchs | Shadw ui",
  description:
    "A beautiful collection of switch components built with using Shadcn UI and TailwindCSS.",
};

const switchDir = "switchs";
const switchFiles = [
  "switch-01",
  "switch-02",
  "switch-03",
  "switch-04",
  "switch-05",
  "switch-06",
  "switch-07",
  "switch-08",
  "switch-09",
  "switch-10",
  "switch-11",
  "switch-12",
  "switch-13",
  "switch-14",
  "switch-15",
  "switch-16",
  "switch-17",
];

const fileCount = [...switchFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Switchs"
      description={`A beautiful collection of ${fileCount} switch components built with using Shadcn UI and TailwindCSS.`}
    >
      {switchFiles.map((componentName) => {
        return (
          <ComponentPage
            className="flex-center"
            key={componentName}
            directory={switchDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
