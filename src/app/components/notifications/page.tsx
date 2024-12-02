import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications | Shadw ui",
  description:
    "A beautiful collection of notification components built with using Shadcn UI and TailwindCSS.",
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

const fileCount = [...notificationFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Notifications"
      description={`A beautiful collection of ${fileCount} notification components built with using Shadcn UI and TailwindCSS.`}
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
