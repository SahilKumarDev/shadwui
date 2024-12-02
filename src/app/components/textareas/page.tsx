import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textareas | Shadw ui",
  description:
    "A beautiful collection of textarea components built with using Shadcn UI and TailwindCSS.",
};

const textareaDir = "textareas";
const textareaFiles = [
  "textarea-01",
  "textarea-02",
  "textarea-03",
  "textarea-04",
  "textarea-05",
  "textarea-06",
  "textarea-07",
  "textarea-08",
  "textarea-09",
  "textarea-10",
  "textarea-11",
  "textarea-12",
  "textarea-13",
  "textarea-14",
  "textarea-15",
  "textarea-16",
  "textarea-17",
  "textarea-18",
  "textarea-19",
];

const fileCount = [...textareaFiles].length;

export default function Page() {
  return (
    <GridPageLayout
      heading="Textareas"
      description={`A beautiful collection of ${fileCount} textarea components built with using Shadcn UI and TailwindCSS.`}
    >
      {textareaFiles.map((componentName) => {
        return (
          <ComponentPage
            key={componentName}
            directory={textareaDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
