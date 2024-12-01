import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - composts ui",
  description:
    "A collection of beautiful and accessible switch components built with Tailwind CSS and Next.js.",
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

const fileCount = [...switchFiles];

export default function Page() {
  return (
    <GridPageLayout
      heading="Inputs"
      description={`All description are here ${fileCount.length}`}
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
