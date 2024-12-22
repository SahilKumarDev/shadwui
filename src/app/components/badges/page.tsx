import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badges | Shadw ui",
  description:
    "A beautiful collection of badges components built with using TailwindCSS.",
};

const badgeDir = "badges";
const badgeFiles = [
  "badge-01",
  "badge-02",
  "badge-03",
  "badge-04",
  "badge-05",
  "badge-06",
  "badge-07",
  "badge-08",
  "badge-09",
  "badge-10",
  "badge-11",
  "badge-12",
];

const fileCount = [...badgeFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Badges"
      description={`A beautiful collection of ${fileCount} badges components built using shadcn with TailwindCSS.`}
    >
      {badgeFiles.map((componentName) => {
        return (
          <ComponentPage
            key={componentName}
            directory={badgeDir}
            className="grid-center"
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
