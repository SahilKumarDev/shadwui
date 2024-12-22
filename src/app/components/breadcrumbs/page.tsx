import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breadcrumbs | Shadw ui",
  description:
    "A beautiful collection of breadcrumbs components built with using TailwindCSS.",
};

const breadcrumbDir = "breadcrumbs";
const breadcrumbFiles = [
  "breadcrumb-01",
  "breadcrumb-02",
  "breadcrumb-03",
  "breadcrumb-04",
  "breadcrumb-05",
  "breadcrumb-06",
  "breadcrumb-07",
  "breadcrumb-08",
];

const fileCount = [...breadcrumbFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Breadcrumbs"
      description={`A beautiful collection of ${fileCount} breadcrumbs components built using shadcn with TailwindCSS.`}
    >
      {breadcrumbFiles.map((componentName) => {
        return (
          <ComponentPage
            key={componentName}
            directory={breadcrumbDir}
            className="grid-center"
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
