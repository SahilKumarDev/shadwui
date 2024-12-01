import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - composts ui",
  description:
    "A collection of beautiful and accessible alert components built with Tailwind CSS and Next.js.",
};

const alertDir = "alerts";
const alertFiles = [
  "alert-01",
  "alert-02",
  "alert-03",
  "alert-04",
  "alert-05",
  "alert-06",
  "alert-07",
  "alert-08",
  "alert-09",
  "alert-10",
  "alert-11",
  "alert-12",
  "alert-13",
  "alert-14",
];

// const file = [...alertFiles];

export default function Page() {
  return (
    <GridPageLayout heading="Alerts" description="All description are here">
      {alertFiles.map((componentName) => {
        return (
          <ComponentPage
            key={componentName}
            directory={alertDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
