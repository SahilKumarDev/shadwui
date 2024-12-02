import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - composts ui",
  description:
    "A collection of beautiful and accessible notification components built with Tailwind CSS and Next.js.",
};

const notificationDir = "notifications";
const notificationFiles = [
  "notification-01",
  "notification-02",
  "notification-03",
  "notification-04",
  "notification-05",
  "notification-06",
  "notification-07",
  "notification-08",
  "notification-09",
  "notification-10",
  "notification-11",
  "notification-12",
  "notification-13",
  "notification-14",
  "notification-15",
  "notification-16",
  "notification-17",
  "notification-18",
  "notification-19",
  "notification-20",
  "notification-21",
  "notification-22",
  "notification-23", 
];

const fileCount = [...notificationFiles];

export default function Page() {
  return (
    <GridPageLayout
      heading="Inputs"
      description={`All description are here ${fileCount.length}`}
    >
      {notificationFiles.map((componentName) => {
        return (
          <ComponentPage
          className="grid-center"
            key={componentName}
            directory={notificationDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
